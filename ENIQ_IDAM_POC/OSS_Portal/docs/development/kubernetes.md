# Kubernetes

The service can be tested in a Kubernetes cluster. The cluster can be a local or a remote cluster
as well.

## Kubectl

Kubectl is the tool used to manage kubernetes resources. This tool is used internally by other
tools (eg. Helm).

- [Cheatsheet](https://kubernetes.io/docs/reference/kubectl/cheatsheet/)
- [Command reference](https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands)

### Configuration

Before using kubectl or other tools building on it, it shall be configured to access
kubernetes clusters. By default minikube adds its configuration,
but it is only useful for simple developments.

To configure a remote cluster check the [relevant chapter](https://kubernetes.io/docs/tasks/access-application-cluster/configure-access-multiple-clusters/)
in the kubernetes documentation.

There is a user specific global config in the user director: `~/.kube/config`.
This contains the available `clusters` and the required `user` credentials.
The combination of a `cluster`, a `user` and a default `namespace` is called `context`.
The configuration file can contain multiple contexts, and from the cli with kubectl commands
the current context can be simply changed.

The config to access the development cluster used in EEA is committed to this repo:
`mock/cluster-config/kube-config.yaml`.
To use it, merge its content into the user kubeconfig file.
It can be edited by a text editor, or by the `kubectl config` command.

After adding the new context to the config:

```bash
# To switch to remote cluster
kubectl config use-context kubernetes-admin@dev-presentation
# To switch back to local cluster
kubectl config use-context minikube

# Change default namespace in current context:
kubectl config set-context --current --namespace=<NAMESPACE NAME>
```

### CLI

When the kubectl is configured the cli can be used to search, edit, deploy, delete kubernetes
resources.

?> If the `-n` (namespace) parameter is not set then any command is executed on
the default namespace of the current context. To avoid adding namespace parameter to every command,
change the namespace for the current context.

### Tools

There are a number of tools to make it easier to handle a kubernetes cluster:

- [k9s](https://k9scli.io/) is a terminal based UI to interact with your Kubernetes clusters
  - `choco install k9s`
- [Kubernetes VSCode extension](https://marketplace.visualstudio.com/items?itemName=ms-kubernetes-tools.vscode-kubernetes-tools)
  is adding support for kubernetes into VSCode IDE

## Helm

Helm is used to manage the application in Kubernetes. This is a package manager which can handle
the kubernetes resources needed by an application.

In ADP the Helm v3 is used: [Helm](https://helm.sh/).
For some basic term check the [glossary](https://helm.sh/docs/glossary/).

### Repositories

Charts can be uploaded to Helm repositories. To use such repository first
add them to the local config.
Multiple repositories can be added by their URL. The name parameter can be used to
reference a repository in local commands.

Manage repositories:

```bash
# Add GAS drop repository
helm repo add eea-drop https://arm.seli.gic.ericsson.se/artifactory/proj-eea-drop-helm \
    --username $DOCKER_USERNAME --password $DOCKER_PASSWORD

# Time to time refresh the local cache
helm repo update
```

Search for charts of a service version.

```bash
# Search for available charts in the repo
helm search repo <chart name>

# by default only released version is shown. Add --devel to show development version
helm search repo <chart name> --devel

# Add -l to show all versions,
# or add --version to search for a given version by regex or exact match
```

### Releases

If a chart is available in a remote repository or locally it can be installed to any cluster.

When the chart references images from remote docker repositories the relevant credentials must
be deployed to the kubernetes cluster. It is done by creating a `secret` containing the
username and the api token for the docker login. Then set the `imageCredentials.pullSecret` parameter
at helm install. For more info see [Remote Cluster chapter](#remote-cluster)

Installing a local chart usually requires a set of different values as the repository url,
image name and version are parameters for the chart. Remote charts (uploaded to repositores)
usually contains proper values for them.

```bash
# Generic install
helm install <releasename> <path-to-chart> \
  --namespace <namespace-name> \
  --set imageCredentials.pullSecret=<pull-secret-name> \
  ...<extra-deployment-values>

# Install GAS from a drop repo
# If version is not provided the latest released one is installed.
# To install development version use --devel
helm install gas eea-drop/eric-adp-gui-aggregator-service --devel --namespace dev \
  --set imageCredentials.pullSecret=arm-pullsecret

# Install GAS from a local chart with remote docker images
helm install gas charts/eric-adp-gui-aggregator-service --namespace dev \
  --set imageCredentials.main.repoPath=proj-eea-drop \
  --set imageCredentials.main.name=eric-adp-gui-aggregator-service \
  --set imageCredentials.main.tag=0.6.0-21 \
  --set imageCredentials.pullSecret=arm-pullsecret
```

After a release is installed it can be managed by helm

```bash
# uninstall
helm uninstall gas

# list releases
helm ls

# upgrade release. Use it if the deployment parameters of the release should be changed
helm upgrade gas <path-to-chart> <new-deplyoment-values>
```

## Local testing

### Build image

Build the service docker image with a local name to use it locally.
(local image name: `local/proj-eea-dev/uiservice:1.0`)
It has to be done every time the content is changed.

```bash
docker login armdocker.rnd.ericsson.se # enough to do it once, use SIGNUM + pass
docker image build --file docker/Dockerfile -t local/proj-eea-dev/uiservice:1.0 .
```

### Deploy

Deploy the helm chart into a local kubernetes cluster. It works only locally as the image is
only in the local docker registry.
There are some parameters which has to be set or overridden for local deployment.
The image name related ones are important to use the local docker image.
Also the resources shall be set as the default ones may be too much for a local cluster.

```bash
helm install eric-adp-gui-aggregator-service charts/eric-adp-gui-aggregator-service \
  --set global.registry.url=local \
  --set imageCredentials.repoPath=proj-eea-dev \
  --set images.main.name=uiservice \
  --set images.main.tag=1.0 \
  --set ingress.enabled=true \
  --set ingress.path=/uiservice \
  --set ingress.hostname=localhost \
  --set resources.main.requests.memory=256Mi \
  --set resources.main.limits.memory=256Mi
```

Also resource requests or resource limits may be unset if deployment with "best effort" QoS
class is desired.

```bash
helm install eric-adp-gui-aggregator-service charts/eric-oss-help-aggregator \
  --set global.registry.url=local \
  --set imageCredentials.repoPath=proj-eea-dev \
  --set images.main.name=help-aggregator \
  --set images.main.tag=1.0 \
  --set ingress.enabled=true \
  --set ingress.path=/help-aggregator \
  --set ingress.hostname=localhost \
  --set resources.main.requests.cpu=null \
  --set resources.main.limits.memory=null
```

After the command is executed the deployment and other resources are created in Kubernetes.

### Undeploy

To remove the chart totally from the cluster, execute this:

```bash
helm uninstall eric-adp-gui-aggregator-service
```

### Debug deployment

Get the helm chart release status: `helm status eric-adp-gui-aggregator-service`

Check if the pods are okay: `kubectl get pods`
If the pod is not in Running state then there can be an issue.
To check what is happening with the pod: `kubectl describe pods <pod name>`

Even if the pod is running the app can still fail. To show logs: `kubectl logs <pod name>`
SSH into a pod: `kubectl exec --stdin --tty <pod name> -- bash`
Port-forward: `kubectl port-forward <pod name> <local port>:<pod port>`

Change default namespace in current context:
`kubectl config set-context --current --namespace=<NAMESPACE NAME>`

## Remote cluster

To deploy to a remote cluster, the image first has to be pushed to
a remote docker registry. For that deploy privilege is required to do it manually.
To avoid naming conflicts in the registry use VERSION.SIGNUM as _TAG_.
Also the remote cluster can be used by multiple developer at the same time.
To separate deployments the release name shall be unique and be in separate namespaces.
(in Helm 3 it is a bit different as release names are scoped to namespaces)

Set up some variables (eg.):

```bash
SIGNUM = 'esmbody' # set it to your SIGNUM
TAG = "VERSION-$SIGNUM" # set a version number
RELEASE_NAME = "eric-adp-gui-aggregator-service.$SIGNUM"
NAMESPACE = "dev-$SIGNUM"
```

Build the docker image:

```bash
docker login armdocker.rnd.ericsson.se # enough to do it once, use SIGNUM + pass
docker image build --file docker/Dockerfile \
  -t armdocker.rnd.ericsson.se/proj-eea-dev/eric-adp-gui-aggregator-service:$TAG .
```

Push the image to the remote docker repository:

```bash
docker push armdocker.rnd.ericsson.se/proj-eea-dev/eric-adp-gui-aggregator-service:$TAG
```

Create pullsecret for your cluster

```bash
kubectl create namespace $NAMESPACE

kubectl create secret docker-registry arm-pullsecret \
  --docker-server=armdocker.rnd.ericsson.se \
  --docker-username=$DOCKER_USERNAME \
  --docker-password=$DOCKER_PASSWORD \
  --namespace $NAMESPACE
```

Install with helm

```bash
helm install $RELEASE_NAME charts/eric-adp-gui-aggregator-service \
  --namespace $NAMESPACE \
  --set imageCredentials.main.repoPath=proj-eea-dev \
  --set imageCredentials.main.name=eric-adp-gui-aggregator-service \
  --set imageCredentials.main.tag=$TAG \
  --set imageCredentials.pullSecret=arm-pullsecret
```

To remove with helm

```bash
helm uninstall $RELEASE_NAME
```

## Runtime configuration

For testing new helm configuration use the --set option of the helm chart to change values.
To permanently change configuration, overwrite values in the values.yaml file.
