import * as fs from 'fs';
import finder from 'glob';

const MOCKS_FOLDER = '../mock/domain-ui-generic/public/';
const ENIQ_FOLDER = '../eniq/';
const imports = {};

function addModuleToImportmap(module, pathStart = '/') {
  const name = `${module.name}`;
  if (!(module.name in imports)) {
    let path =
      module.path[0] === '.'
        ? `${module.path.replace('.', '')}/${module.main}`
        : `${module.path}/${module.main}`;
    path = pathStart + path;
    console.log(name);
    console.log(path);
    imports[name] = path.replaceAll('//', '/');
  }
}

function readJSON(path) {
  const packageJson = JSON.parse(fs.readFileSync(path));
  packageJson.modules.forEach((module) => {
    addModuleToImportmap(module, `/serve/${path.replace(MOCKS_FOLDER, '').split('/')[0]}/`);
  });
}

// eniq json path read
// function eniqReadJSON(path) {
//   const packageJson = JSON.parse(fs.readFileSync(path));
//   packageJson.modules.forEach((module) => {
//     addModuleToImportmap(module, `/serve/eniq/`);
//   });
// }

JSON.parse(fs.readFileSync('./public/config.package.json')).modules.forEach((module) =>
  addModuleToImportmap(module),
);

const files = finder.sync(`${MOCKS_FOLDER}**/config.package.json`);
files.forEach((file) => readJSON(file));

// eniq
// const eniqFiles = finder.sync(`${ENIQ_FOLDER}**/config.package.json`);
// eniqFiles.forEach((file) => eniqReadJSON(file));

export default { imports };
