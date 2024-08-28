# Tilt

Tilt is a development tool for Kubernetes based development.
It speeds up the local deployment of an application during code change.

## Install

```bash
 curl -fsSL https://raw.githubusercontent.com/tilt-dev/tilt/master/scripts/install.sh | bash
```

After installation verify Tilt with

```bash
tilt version
```

## Local execution

The default mode is `local`. In local mode the used namespace is `default`
if `exactnamespace` option is not set.
This mode is preferred when using a local kubernetes cluster.
To start using locally just jump to [Usage](#usage)
For other options check the [Configuration](#configuration) chapter.

For local testing an Nginx is required. The easiest way to install to use helm.

## Prerequirements

- If you would like to test the integration with other services, then
  you have to refresh the helm dependencies under the charts/ci folder.

```bash
cd charts/ci
rm -rf charts/*
helm repo add proj-adp-gs-all-helm \
https://arm.sero.gic.ericsson.se/artifactory/proj-adp-gs-all-helm

helm dep update
```

- You have to install an ingress controller in case of a local kubernetes environment,
  because ingress resources are used during the tilt deployment.

With minikube use:

```bash
minikube addons enable ingress
```

## Quick start

These are the quick steps to start working with a remote cluster.
For detailed explanations or troubleshooting check the [Remote execution](#remote-execution) chapter.

1. configure kubectl context to use the dev cluster

   ```bash
   export KUBECONFIG=$HOME/.kube/config:$(pwd)/mock/cluster-config/kube-config.yaml
   kubectl config use-context kubernetes-admin@dev-presentation
   ```

2. save `tilt.option.user.template.json` as `tilt.option.user.json`
3. set `mode` to `remote` in `tilt.option.user.json`
4. start tilt: `tilt up`. See [Usage](#usage)

?> In the remote development a unique namespace is created for your deployments.
To interact with them add the namespace to your context or append the namespace flag to all kubectl command.

## Configuration

The main Tiltfile is in the root: `Tiltfile`
It uses some configuration files to define where to connect and how to create the resources.
`tilt.option.json` is the default configuration which is merged into the repo.
It can be overwritten with `tilt.option.user.json` which is gitignored to avoid unnecessary changes.
Mostly the execution mode (local / remote) and the ARM credentials can be defined there, but any
option can be overridden if needed.

### Ingress

Note that at the moment Nginx is supported without verifyClientCertificate.
For mTLS use own ICCR from CI chart. Deploy CI chart at first and get ICCR remote IP:

```bash
kubectl get service -n dev-signum -o=jsonpath='{.items[?(@.spec.type == "LoadBalancer")].status.loadBalancer.ingress[0].ip}'
```

Then on top of your other settings, apply these in tilt.option.json and deploy Help Aggregator:

```json
{
  "ingressHost": "gas.ingress-iccr-ip.nip.io",
  "ingressPath": "/",
  "ingressEnableTLS": false,
  "ingressUseContour": true,
  "ingressClass": "EEA-Applications",
  "adpIccrServiceName": "eric-eea-ingress-ctrl-common",
  "mTLS": true,
  "verifyClientCertificate": "required"
}
```

### Authentication

Note that this does not work with Nginx. Assuming that ICCR is configured in Tilt,
set these additional options for authentication:

```json
{
  "deployIam": true,
  "authzProxy": true,
  "authnProxyFQDN": "authn.iam.signum.gas.ingress-iccr-ip.nip.io",
  "keycloakFQDN": "iam.signum.gas.ingress-iccr-ip.nip.io"
}
```

Note that startup of IAM pods can take up to 10 minutes.

### Configuration files

`tilt.option.json` - this is a generic options file which is used as default config

```json
{
  "mode": "local", // can be local or remote
  "exactnamespace": "", // The exact namespace to be used. It is used in local mode too if given
  // the next attributes are used only in remote mode
  "arm_url": "armdocker.rnd.ericsson.se", // ARM url
  "arm_repo": "proj-eea-dev", // ARM project
  "pull_secret": "arm-pullsecret", // name of the pull secret to be created in the namespace
  // The namespace prefix to generate unique name. Only used if 'exactnamespace' is an empty string
  "namespace_prefix": "dev",
  "kubecontext": "kubernetes-admin@dev-presentation", // The kubecontext used for remote connection,
  "dockerUser": "", // Shall be set only in the user config
  "dockerPassword": "", // Shall be set only in the user config
  "deployCiChart": false, // Deploy CI dependency chart, please read the Prerequirements section
  "deployIam": true, // Within CI chart whether to deploy IAM service
  "deployFm": false, // Within CI chart whether to deploy FM Proxy service
  "deployPm": false, // Within CI chart whether to deploy pm-server
  "deployLogTransformer": false, // Within CI chart whether to deploy Log Transformer service
  "deployIccr": true, // Within CI chart whether to deploy own ADP Ingress Controller service
  "deployServiceMesh": false, // Within CI chart whether to deploy Service Mesh service
  "deployMockServices": true, // Deploy dummy services to test the discovery functionality
  "deployMainService": true, // Build and deploy the GUI Aggregator Service
  "ingressEnabled": true,
  "ingressHost": "localhost", // Ingress hostname, override if own ICCR and nip.io DNS is used
  "ingressIP": "", // Ingress IP Address, used if the ICCR is separately installed.
  "ingressPath": "/",
  "ingressEnableTLS": false,
  "ingressUseContour": true, // false = Nginx, true = ICCR
  "ingressClass": "EEA-Applications", // Only needed if own ICCR is configured
  "adpIccrServiceName": "eric-eea-ingress-ctrl-common", // Revert to common if needed: eric-tm-ingress-controller-cr
  "mTLS": true, // If globally TLS is on or off
  "verifyClientCertificate": "optional", // Set to "required" for mTLS
  "authzProxy": false,
  "authnProxyFQDN": "",
  "keycloakFQDN": "",
  "logStreamingMethod": "indirect", // Set to "direct" or "dual" to turn on syslog
  "faultIndicationsEnabled": false,
  "replicaCount": 1, // Number of GAS POD's
  "logLevel": "info",
  "serviceMeshEnabled": "false", // Whether to turn on Service Mesh on service level
  "forwardingPort": "3001", // Port from which requests to GAS will be forwarded
  "debugPort": "9230", // Port for debugger attachment
  "helpAggregatorEnabled": false, // Set to true if GAS is intented to be used with HA
  "devMode": true // Whether to run GAS in devMode
}
```

`tilt.option.user.json` - this is a gitignored file to store user specific configs
like ARM credential information. Create this file and add the following json structure.
Any other attribute from the `tilt.option.json` can be added to define custom value for it.
Check the `tilt.option.user.template.json` for an empty example.

If the `dockerUser` and `dockerPassword` fields are left empty tilt will try to read them from the
`$DOCKER_USERNAME` and `$DOCKER_PASSWORD` environment variables.

## Remote execution

In remote mode the Tiltfile does some extra initialization steps based on `tilt.option.json`:

- generate unique namespace
- create the namespace
- create a pullsecret in the namespace
- login to the ARM docker repo
- and allow the kubectl context defined in the configuration

To use a remote cluster the kubectl context has to be changed to connect to a remote cluster.
For cluster info check [this wiki](https://eth-wiki.rnd.ki.sw.ericsson.se/pages/viewpage.action?spaceKey=EIT&title=05+Cluster+informations).
See the K8s.io docs: [Configure Access to Multiple Clusters](https://kubernetes.io/docs/tasks/access-application-cluster/configure-access-multiple-clusters/)
To speed up configuration a remote cluster config is in the repository: mock/cluster-config/kube-config.yaml.

### Kubectl context

Change kubectl context to point to the remote cluster.

```bash
# If KUBECONFIG is empty add the default config from HOME first
export KUBECONFIG=$HOME/.kube/config
# Add dev cluster config to KUBECONFIG
export KUBECONFIG=$KUBECONFIG:$(pwd)/mock/cluster-config/kube-config.yaml
# Check the result. Both seliics01760e01 and minikube shall be present
kubectl config view
# To switch to remote cluster
kubectl config use-context kubernetes-admin@dev-presentation
# To switch back to local cluster
kubectl config use-context minikube
```

### Configure Tilt

For more info about the configuration see: [Configuration](#configuration)

Change the `tilt.option.json` file.

- set mode to `remote`
  - by default no other config change is necessary
  - and also the namespace is: \<namespace_prefix\>-\<dockerUser\>
  - but if the `exactnamespace` is set in the config then that is used as namespace
- `ingressHost` attribute should be configured with the ingress
  loadbalancer node name.
- then set your context to that namespace:
  `kubectl config set-context --current --namespace=<NAMESPACE NAME>`

## Usage

To start tilt: `tilt up`

Then press space to open Tilt console in a browser. It will show the process of the build and
the status of the services. At first time it builds the docker images which may take time.
When finished the logs of the processes can be seen on the UI.
Note: it can take up to 20 minutes to start everything, if all dependencies are enabled.

To stop: Ctrl+C then `tilt down` to remove services from kubernetes.
_Note: by default the namespaces created by Tilt are not deleted._
To do use the --delete-namespaces flag: `tilt down --delete-namespaces`
Especially when CI pods are not starting e.g. due to secret issues, delete the namespace.

If anything is changed (eg. Docker file, source code, Tiltfile),
then the build process is automatically restarted and the changed services are replaced
with the new version. The config is optimized for fast update, but the overall time depends
which part of the code is changed.

### Help aggregator integration

To generate the necessary ZIP files with the packaged help content, run the following bob rule manually:

`bob generate-and-copy-help-content`

## Remote debugging

The debugger port is opened for the GUI Aggregator Service and the mock services so it is possible
to remote connect with the `Attach to GAS in K8S` launch option.
Just select the project to debug (mock or backend), the port (eg. 9230) and attach to the process.
After a short time the debugger is attached and nodejs will stop at breakpoints.

?> When the process is paused it cannot serve incoming requests including the K8s Liveness Endpoint.
If the pause takes longer time than the Liveness wait timeout Kubernetes will restart the Pod,
so for debugging it is advised to increase the `periodSeconds` at the `livenessProbe` in the `deployment.yaml`.

?> If the code to be debugged is at the startup phase then change the `--inspect` to `--inspect-brk`
in the `docker/entrypoint.sh` file. At startup the node process will wait for a debugger to attach
before starting the server.

## Implementation

The tilt config is based on the official [NodeJS tutorial](https://docs.tilt.dev/example_nodejs.html).
This focuses on short reload cycles, and it is achieved by multiple optimizations:

**Helm template plugin**: this tilt plugin allows transforming helm templates to kubernetes resource
descriptors. To make this work the name of the deployed images shall be configurable from helm cli
parameters. The _tag name_ is automatically generated and overridden by Tilt, but other part of the
image name must be the same as used in `docker_build` methods.
In the context of ADP these are:

- registry URL
- repoPath
- image name

**Optimized Dockerfile**, where `npm install` is executed first and the source files are copied second.
With this, the result of npm install can be cached by the docker registry which can speed up a
docker build.

**Live update**: tilt provides a live update mechanism where file changes can be copied into a running
pod. The service watches file changes and restarts when detects new files.
For live update there are some requirements:

- use `nodemon` to start the server. Nodemon watches files in a directory and restarts the service
  if it detects changes. `--ext js` is set to nodemon to avoid restarts when config files (json files,
  certificates etc.) are changed at runtime. These changes shall be handled by the service
  without restarts.
- set `replicaCount` to 1: live update works only with single pod deployment
- set write permission to the default user in the docker image for the service files.

If live update is not working, tilt logs out the reason.
