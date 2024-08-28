load('ext://namespace', 'namespace_create')
load('config.star', 'get_settings')

settings = get_settings()
secret_name = settings.get('pull_secret')
arm_url = settings.get('arm_url')
dockerUser = settings.get('dockerUser','')
dockerPassword = settings.get('dockerPassword','')

def secret_yaml(
    namespace,
    username=dockerUser,
    password=dockerPassword,
    secret_name=secret_name,
    arm_url=arm_url
  ):
  """Returns YAML for a secret
  Returns:
    The namespace YAML as a blob
  """
  args = [
    "kubectl",
    "create",
    "secret",
    "docker-registry",
    secret_name,
    "--docker-server=" + arm_url,
    "--docker-username=" + username,
    "--docker-password=" + password,
    "--namespace=" + namespace,
    "-o=yaml",
    "--dry-run=client"
  ]
  return local(args, quiet=True)

def init_namespace(namespace):
    namespace_create(namespace)
    k8s_yaml(secret_yaml(namespace))

def docker_login():
  docker_config = read_json(os.getenv('HOME') + '/.docker/config.json')
  if not docker_config.get('auths') or arm_url not in docker_config.get('auths'):
    local('docker login ' + arm_url + ' --username=' + dockerUser + ' --password=' + dockerPassword)

def generate_namespace_name():
  namespace = settings.get('exactnamespace', '')
  if namespace == '':
    namespace = settings.get('namespace_prefix') + '-' + dockerUser
  return namespace