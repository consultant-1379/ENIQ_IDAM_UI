/**
 * @license
 * COPYRIGHT Ericsson 2022
 * The copyright to the computer program(s) herein is the property of
 * Ericsson Inc. The programs may be used and/or copied only with written
 * permission from Ericsson Inc. or in accordance with the terms and
 * conditions stipulated in the agreement/contract under which the
 * program(s) have been supplied.
 */

/**
 * NOTE
 * Currently it is not possible to test ES Modules in Sinon because they are
 * immutable and as such sinon cannot stub functions out (it cannot mutate the module).
 * One way around this is to export a private class that implements a
 * static function that you (the developer) want to stub out.
 * In this case the function _import is "stubbable" in sinon which makes
 * it possible to test this utility module.
 *
 * @class _Dynamic
 * @private
 */
export class _Dynamic {
  /**
   * Import a module.
   * This static function is a wrapper around the native import().
   *
   * @function _import
   * @param {String} moduleName - the name of the module to import
   * @private
   * @returns {Object}
   */
  static async _import(moduleName) {
    return import(moduleName);
  }
}

/**
 * Dynamically import a module.
 * The function will try both "moduleName" and "moduleName.js".
 * A module is retrieved on a successful import.
 * It tries to access the default export first,
 * then it tries the named export, if no exports are
 * found an error is thrown
 *
 * @function dynamic
 * @param {String} moduleName - name of the module to dynamically import
 * @returns Module.
 */
export const dynamic = async moduleName => {
  let module = null;
  try {
    // module = await _import(moduleName);
    module = await _Dynamic._import(moduleName);
  } catch (error) {
    module = await _Dynamic._import(`${moduleName}.js`).catch(finalError => {
      throw new Error(
        `Failed to dynamically import '${moduleName}'.\n\nDetails\n${finalError.message}`,
      );
    });
  }

  if (module.default) {
    // return the DEFAULT export from the module...
    return module.default;
  }

  // the developer did NOT export anything from this module.
  // there must be either ONE default export or a named export...
  if (Object.keys(module).length < 1) {
    throw new Error(
      `Failed to dynamically import '${moduleName}'.\n\nDetails\nThere needs to be one exported class. This module does not export a component`,
    );
  } else if (Object.keys(module).length > 1) {
    throw new Error(
      `Failed to dynamically import '${moduleName}'.\n\nDetails\nThere should be only one default or one named export. This module exports ${
        Object.keys(module).length
      }.`,
    );
  }
  // return the NAMED export from the module...
  return module[Object.keys(module)[0]];
};
