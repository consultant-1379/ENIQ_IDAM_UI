/**
 * @license
 * COPYRIGHT Ericsson 2022
 * The copyright to the computer program(s) herein is the property of
 * Ericsson Inc. The programs may be used and/or copied only with written
 * permission from Ericsson Inc. or in accordance with the terms and
 * conditions stipulated in the agreement/contract under which the
 * program(s) have been supplied.
 */
import { TemplateComponent, definition } from '../../../../../pkg/@eui/component.js';
import { dynamic } from '../utils/dynamic.js';

export default class SystemBarActions extends TemplateComponent {
  /**
   * Set the slot attribute to "action". This inserts this
   * component into the System Bar "action" slot.
   * Load Components listed in metaData.
   */
  didConnect() {
    this.slot = 'action';
    this._loadComponents(this.metaData);
  }

  /**
   * Dynamically import a Module by name.
   *
   * @function _importModule
   * @param {string} module - name of the Module to import
   * @returns Module
   */
  _importModule(moduleName) {
    return dynamic(moduleName);
  }

  /**
   * Load Components designated for the System Bar's action slot.
   * These are components signified by type = system/SYSTEM in UI-Meta.
   *
   * Once the component is loaded it is inserted into the System Bar.
   *
   * @function loadComponents
   * @param {Object} metaData
   * @private
   */
  _loadComponents = async (metaData = {}) => {
    const systemBarComponents = metaData?.components?.filter(
      component => component.type?.toLowerCase() === 'euisdk:system',
    );
    systemBarComponents?.forEach(async component => {
      if (component.module != null) {
        try {
          const componentModule = await this._importModule(component.module);
          this._insertComponent(
            this._createElement(componentModule, component),
          );
        } catch (error) {
          // eslint-disable-next-line no-console
          console.warn(
            `System Bar: Failed to import component [${component.name}] - ${error}`,
          );
        }
      }
    });
  };

  /**
   * Create a component from the name of the imported module
   *
   * @function createElement
   * @param {String} componentName - name of the component to create
   * @param {Object} data - UI-Meta data for the component
   * @private
   * @returns
   */
  _createElement(component, data) {
    // register the component...
    this.register(component);

    // create the component...
    const componentElement = this.createElement(component.is);
    if (data.priority) {
      componentElement.dataset.priority = data.priority;
    }
    componentElement.metaData = data;
    return componentElement;
  }

  /**
   * Insert a component based on its priority.
   * Components are ordered right to left based on their priority.
   * The component with the highest priority (1) will go first.
   * Components without a priority are added to the end.
   *
   * @function insertComponent
   * @param {HTMLElement} componentElement - component to insert into the system Bar
   * @private
   */
  _insertComponent = componentElement => {
    if (componentElement.dataset.priority == null) {
      this.insertBefore(componentElement, this.firstChild);
      return;
    }
    const value = [...this.children].find(element => {
      if (element.dataset.priority) {
        return (
          parseInt(componentElement.dataset.priority, 10) >=
          parseInt(element.dataset.priority, 10)
        );
      }
      return false;
    });
    this.insertBefore(componentElement, value);
  };

  /**
   * Remove components that were previously imported to the System Bar, which
   * are no longer in the metaData. Return a new version of the config which only
   * contains the new components to add, leaving the others intact.
   *
   * This function does NOT remove components that were added declaratively.
   *
   * @function removeDuplications
   * @param {[HTMLElement]} sbComponents - Components added to the System Bar
   * @param {Object} metaData - UI-Meta containing all the components
   * @private
   */
  _removeDuplications = (sbComponents, metaData) => {
    const duplicateEntry = [];

    // remove the declaratively added components from components to be considered in this search...
    const nonStaticComponents = sbComponents.filter(
      child => child.metaData != null,
    );

    // compare the remaining components, with those listed in metaData. Components that are no longer in the
    // metaData are removed. Those which are present in both the System Bar and in the metaData
    // are added to a new array.
    nonStaticComponents.forEach(component => {
      const result = metaData.components.find(
        metaDataComponent => metaDataComponent === component.metaData,
      );
      if (result == null) {
        component.remove();
      } else {
        duplicateEntry.push(result);
      }
    });

    const finalArray = [];

    // from the duplicates found above, create a new array only containing
    // new components to add to the System Bar.
    metaData.components.forEach(component => {
      const result = duplicateEntry.find(
        dupComponent => dupComponent === component,
      );
      if (result == null) {
        finalArray.push(component);
      }
    });
    return { components: finalArray };
  };

  /**
   * metaData
   * -------------------------------------------------------
   * Update the System Bar components when the metaData prop
   * changes. Remove old components and add new components
   * all based on the UI-Meta.
   *
   * @param {Map} changedProps - changed props
   */
  didChangeProps(changedProps) {
    if (changedProps.has('metaData')) {
      const componentsInSystemBar = [...this.children].filter(
        child => child.metaData != null,
      );
      const newComponentsToAdd = this._removeDuplications(
        componentsInSystemBar,
        this.metaData,
      );
      this._loadComponents(newComponentsToAdd);
    }
  }
}

const style = `
:host {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 16px;
    min-width: 0;
  }
`;

definition('eui-system-bar-actions', {
  style,
  template: '<slot></slot>',
  props: {
    metaData: { type: Object, default: {} },
  },
})(SystemBarActions);

SystemBarActions.register();
