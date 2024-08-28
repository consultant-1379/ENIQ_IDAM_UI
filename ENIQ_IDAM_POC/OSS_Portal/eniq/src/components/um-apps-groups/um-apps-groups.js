/**
 * Component UmAppsGroups is defined as
 * `<e-um-apps-groups>`
 *
 * @extends {LitComponent}
 */
import { LitComponent, html, definition } from '@eui/lit-component';
import { Tree } from '@eui/base/tree';
import style from './um-apps-groups.css';

export default class UmAppsGroups extends LitComponent {
  // Uncomment this block to add initialization code
  // constructor() {
  //   super();
  //   // initialize
  // }

  static get components() {
    return {
      // register components here
      'eui-tree': Tree,
    };
  }

  // didConnect
  didConnect() {
    console.log(this.appsData);
    this.apps_data = [
      { label: 'AdminUI' },
      { label: 'AlarmCfg' },
      { label: 'BI' },
      { label: 'Launcher page' },
      { label: 'NetAn' },
      { label: 'RHEL' },
      { label: 'Self Service' },
      { label: 'TechPackIDE' },
      { label: 'User Management' },
      { label: 'Windows' },
    ];

    // filterGroup
    this.groups_data = [
      {
        label: 'AdminUI',
        children: [{ label: 'AdminUI ReadOnly' }, { label: 'AdminUI Admin' }],
      },
      {
        label: 'AlarmCfg',
        children: [{ label: 'AlarmCfg ReadOnly' }, { label: 'AlarmCfg Admin' }],
      },
      {
        label: 'BI',
        children: [{ label: 'BI ReadOnly' }, { label: 'BI Admin' }],
      },
      {
        label: 'Launcher page',
        children: [
          { label: ' Launcher pageReadOnly' },
          { label: 'Launcher page Admin' },
        ],
      },
      {
        label: 'NetAn',
        children: [{ label: 'NetAn ReadOnly' }, { label: 'NetAn Admin' }],
      },
      {
        label: 'RHEL',
        children: [{ label: 'RHEL ReadOnly' }, { label: 'RHEL Admin' }],
      },
      {
        label: 'Self Service',
        children: [
          { 'Self Service label': 'ReadOnly' },
          { label: 'Self Service Admin' },
        ],
      },
      {
        label: 'TechPackIDE',
        children: [
          { 'TechPackIDE label': 'ReadOnly' },
          { label: 'TechPackIDE Admin' },
        ],
      },
      {
        label: 'User Management',
        children: [
          { label: 'User Management ReadOnly' },
          { label: 'User Management Admin' },
        ],
      },
      {
        label: 'Windows',
        children: [{ label: 'Windows ReadOnly' }, { label: 'Windows Admin' }],
      },
    ];
  }

  // didRender
  didRender() {
    setTimeout(() => {
      this.apps = this.shadowRoot
        .querySelector('#apps')
        .shadowRoot.querySelectorAll('div > ul > eui-tree-item');
      this.groups = this.shadowRoot
        .querySelector('#groups')
        .shadowRoot.querySelectorAll('div > ul > eui-tree-item');
      // console.log(this.filter_group);
      this.group_disable(this.groups);
    }, 400);
  }

  // unselecting group chilitem
  unselect_groupchild(group_item) {
    const child_items = group_item.querySelectorAll('eui-tree-item');
    console.log(child_items);
    for (const item of child_items) {
      if (item.hasAttribute('checked')) {
        item.removeAttribute('checked');
      }
    }
  }

  // Disable group items
  group_disable(groups) {
    for (const group of groups) {
      group.style.opacity = '0.5';
      group.style.pointerEvents = 'none';
      // closing group open tree
      if (group.hasAttribute('open')) {
        console.log('open removed');
        group.removeAttribute('open');
      }
      // uncheck group and it's child items
      if (group.hasAttribute('checked')) {
        // console.log("calling sub_groupchildren");
        this.unselect_groupchild(group);
        group.removeAttribute('checked');
        console.log('checked removed');
      }
      //
      if (group.hasAttribute('indeterminate')) {
        // console.log("calling sub_groupchildren");
        this.unselect_groupchild(group);
        group.removeAttribute('indeterminate');
        console.log('indeterminate removed');
      }
    }
  }

  // Enableing  group for select
  group_enable(group_items) {
    // console.log(group_items);
    for (const item of group_items) {
      console.log(item.tagName);
      item.style.opacity = 'inherit';
      item.style.pointerEvents = 'inherit';
    }
  }

  // component Event handling
  handleEvent(event) {
    // collect selected filter apps
    if (event.type === 'eui-tree:select' && event.target.id === 'apps') {
      if (event.detail.selected) {
        // Enable selected group
        for (const group of this.groups) {
          if (group.innerText.includes(event.detail.label)) {
            console.log(group.innerText);
            this.group_enable([group]);
          }
        }
      } else {
        // disable unselected group
        for (const group of this.groups) {
          // console.log(group.innerText);
          if (group.innerText.includes(event.detail.label)) {
            console.log(group.innerText);
            this.group_disable([group]);
          }
        }
      }
    }
  }

  /**
   * Render the <e-um-apps-groups> component. This function is called each time a
   * prop changes.
   */
  render() {
    return html`
      <div id="app-groups">
        <!--Applications-->
        <div class="form-fields ${this.class}">
          <label>Applications</label>
          <div class="apps_checkbox">
            <eui-tree
              id="apps"
              multi-select
              .data=${this.apps_data}
              @eui-tree:select="${this}"
            >
            </eui-tree>
          </div>
        </div>

        <!--Groups-->
        <div class="form-fields ${this.class}">
          <label>Groups</label>
          <eui-tree
            id="groups"
            multi-select
            .data=${this.groups_data}
            @eui-tree:select="${this}"
          >
          </eui-tree>
        </div>
      </div>
    `;
  }
}

/**
 * @property {Boolean} propOne - show active/inactive state.
 * @property {String} propTwo - shows the "Hello World" string.
 */
definition('e-um-apps-groups', {
  style,
  props: {
    // propOne: { attribute: true, type: Boolean },
    // propTwo: { attribute: true, type: String, default: 'Hello World' },
    class: { attribute: true, type: String, default: 'filter-form' },
    // appsData: {attribute: true, type: Array},
    // groupsData:{attribute: true, type: Array},
  },
})(UmAppsGroups);
