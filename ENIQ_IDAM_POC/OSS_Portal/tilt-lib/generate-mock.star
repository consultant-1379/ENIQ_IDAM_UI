load('config.star', 'get_settings')
settings = get_settings()
arm_url = settings.get('arm_url')
arm_repo = settings.get('arm_repo')
pull_secret = settings.get('pull_secret')

def generate_mock_service(mock_id, port_offset, namespace, loadBalancerIp, public_path, context_root=False, unsetLabels=False):

  path = '/domainapp_' + mock_id + '_' + settings.get('dockerUser', 'test')
  name_override = 'demo-ui-service-' + mock_id

  ingressHost = settings.get('ingressHost', 'localhost')

  # for displaying only. The host name is calculated in the mock helm chart.
  if loadBalancerIp:
    ingressHost = ''.join([str(settings.get('dockerUser')),'.', str(mock_id),'.', str(name_override), '.', str(loadBalancerIp), '.nip.io'])

  protocol = 'http'
  if (settings.get('ingressEnableTLS')):
    protocol = 'https'
  mockUrl=''.join([protocol, '://', ingressHost, path])
  if (settings.get('ingressEnabled') or settings.get('serviceMeshEnabled')):
    print('\n    ' + mock_id + 'mock service address: ' + mockUrl)
    print('\n    Test request can be sent to: ' + ''.join([mockUrl, context_root if context_root else '','/data' ]) + '\n')


  set_params = [  # Values to set from the command-line
    'global.security.tls.enabled=' + str(settings.get('mTLS')),
    'global.registry.url=' + arm_url,
    'global.pullSecret=' + pull_secret,
    'global.uid=' + ''.join([str(settings.get('dockerUser')),'.', str(mock_id)]),
    'global.serviceMesh.enabled=' + str(settings.get('serviceMeshEnabled')),
    'imageCredentials.repoPath=' + arm_repo,
    'images.main.name=domain-ui-generic',
    'resources.main.requests.memory=128Mi',
    'resources.main.limits.memory=128Mi',
    'publicPath=' + public_path,
    'nameOverride=' + name_override,
    'productInfo.version=' + mock_id,
    'ingress.enabled='+str(settings.get('ingressEnabled')),
    'ingress.path=' + path,
    'ingress.adpIccrServiceName=' + str(settings.get('adpIccrServiceName')),
    'ingress.loadBalancerIp=' + loadBalancerIp,
    'ingress.hostname=' + ingressHost,
    'ingress.ingressClass='+str(settings.get('ingressClass')),
    'ingress.tls.enabled=' + str(settings.get('ingressEnableTLS')),
    'ingress.useContour='+str(settings.get('ingressUseContour')),
    'serviceMesh.enabled=' + str(settings.get('serviceMeshEnabled')),
    'serviceMesh.ingress.hostname=' + ingressHost,
  ]

  if context_root:
    set_params.append('contextRoot=' + context_root)

  if unsetLabels:
    set_params.append('labels=null')

  mock_yaml = helm(
    'mock/charts/domain-ui-generic/',
    name='demo-ui-service-' + mock_id, # The release name, equivalent to helm --name
    namespace=namespace, # The namespace to install in, equivalent to helm --namespace
    set=set_params
  )
  k8s_yaml(mock_yaml)

  domain_port = str(4000 + int(port_offset))
  debug_port = str(9230 + int(port_offset))
  k8s_resource('demo-ui-service-' + mock_id, port_forwards=[
      '' + domain_port + ':4000',   # domain
      '' + debug_port  + ':9229',   # debugger
    ]
  )

def build_mock_service_image():
  docker_build(
    arm_url + '/' + arm_repo + '/domain-ui-generic',
    '.',
    dockerfile='mock/domain-ui-generic/Dockerfile',
    entrypoint='node_modules/.bin/nodemon --inspect=0.0.0.0:9229 server.js --watch .',
    only=[
      'mock/domain-ui-generic',
      'mock/charts/domain-ui-generic'
    ],
    live_update=[
      sync('mock/domain-ui-generic', '/runtime/server'),
      run('cd /runtime/server && npm run install:all && npm run build:dev', trigger=['mock/domain-ui-generic/package.json']),
    ]
  )