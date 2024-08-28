settings = read_json('../tilt.option.json')
settings_user = read_json('../tilt.option.user.json', {})

if settings_user != None:
  settings.update(settings_user)

if settings.get('dockerUser', '') == '':
  dockerUser = os.environ['DOCKER_USERNAME'] if os.environ['DOCKER_USERNAME'] else ''
  settings['dockerUser'] = dockerUser

if settings.get('dockerPassword', '') == '':
  dockerPassword = os.environ['DOCKER_PASSWORD'] if os.environ['DOCKER_PASSWORD'] else ''
  settings['dockerPassword'] = dockerPassword

if settings.get('mode') == 'remote':
  if settings.get('dockerUser', '') == '' or settings.get('dockerPassword', '') == '':
    fail('For remote mode the dockerUser and dockerAPI Keys must be set in tilt.option.user.json')

def get_settings():
  return settings
