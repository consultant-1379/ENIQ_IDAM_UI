import { Validator, validate } from 'jsonschema';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const manualServiceConfigSchema = require('../schemas/manualServiceConfig.json');
const configSchema = require('../schemas/ui.config.json');
const appSchema = require('../schemas/ui.app.json');
const componentSchema = require('../schemas/ui.component.json');
const entitySchema = require('../schemas/ui.entity.json');
const configPackageSchema = require('../schemas/ui.config.package.json');
const groupMappings = require('../schemas/ui.config.groupMappings.json');

class SchemaValidator {
  constructor() {
    this.validator = new Validator();
    this.validator.addSchema(appSchema, '/ui.app.json');
    this.validator.addSchema(componentSchema, '/ui.component.json');
    this.validator.addSchema(entitySchema, '/ui.entity.json');
    this.validator.addSchema(groupMappings, '/ui.config.groupMappings.json');
  }

  validateConfig(json) {
    return this.validator.validate(json, configSchema);
  }

  validatePackageConfig(json) {
    return validate(json, configPackageSchema);
  }

  validateManualServiceConfig(json) {
    return validate(json, manualServiceConfigSchema);
  }
}

const schemaValidator = new SchemaValidator();
export { schemaValidator };
