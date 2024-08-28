/**
 * Component UmUsersTable is defined as
 * `<e-um-users-table>`
 *
 * @extends {LitComponent}
 */
import { LitComponent, html, definition } from '@eui/lit-component';
import { MultiPanelTile, TilePanel, Tile } from '@eui/layout';
import {
  Button,
  Dialog,
  Tooltip,
  Menu,
  Checkbox,
  TextField,
  Tree,
  Link,
} from '@eui/base';
import { Icon } from '@eui/theme/icon';
import { Table, Setting } from '@eui/table';
import style from './um-users-table.css';
import UmAppsGroups from '../um-apps-groups/um-apps-groups.js';

export default class UmUsersTable extends LitComponent {
  // Uncomment this block to add initialization code
  constructor() {
    super();
    // initialize
    this.table_columns = [];
    this.table_row = [];
    this.tableSetting_columns = [];
    this.select_user;
    this.userdetails_container = '';
    this.select_filterapps = [];
    this.filter_group = [];
    this.select_filtergroups = [];
    this.row_count = 0;
    this.dialog_eventlistener;

    // user table_Data
    this.data = [
      {
        col1: 'ClOGNEci',
        col2: 'Joe',
        col3: 'Bloggs',
        col4: 'j.bloggs@yahoo.com',
        col5: 'NetAn',
        col6: 'NetAn ReadOnly',
        col7: 'Disabled',
      },
      {
        col1: 'GUSEutOr',
        col2: 'Latha',
        col3: 'Smith',
        col4: 'lathasmith@vodafone.ie',
        col5: 'NetAn',
        col6: 'NetAn Admin',
        col7: 'Enabled',
      },
      {
        col1: 'ClOGNEc',
        col2: 'John',
        col3: 'smith',
        col4: 'j.smith@yahoo.com',
        col5: 'NetAn',
        col6: 'NetAn Admin',
        col7: 'Enabled',
      },
    ];
  }

  static get components() {
    return {
      // register components here
      'eui-multi-panel-tile': MultiPanelTile,
      'eui-tile-panel': TilePanel,
      'eui-table': Table,
      'eui-table-setting': Setting,
      'eui-tile': Tile,
      'eui-button': Button,
      'eui-dialog': Dialog,
      'eui-tooltip': Tooltip,
      'eui-menu': Menu,
      'eui-checkbox': Checkbox,
      'eui-text-field': TextField,
      'eui-tree': Tree,
      'eui-link': Link,
      'eui-icon': Icon,
      'e-um-apps-groups': UmAppsGroups,
    };
  }

  // didConnect
  didConnect() {
    console.log("didConnect");
    this.router = window.EUI.Router;
    // user table_columns
    this.table_columns = [
      {
        title: 'Username',
        attribute: 'col1',
        sortable: true,
        mandatory: true,
        cell: (row, column) => html` <div
          class="table__cell"
          part="username_cell"
        >
          <div part="username">${row[column.attribute]}</div>
          <eui-icon part="menu" name="more"></eui-icon>
        </div>`,
        resizable: true,
      },
      {
        title: 'First name',
        attribute: 'col2',
        sortable: true,
        resizable: true,
      },
      {
        title: 'Last name',
        attribute: 'col3',
        sortable: true,
        resizable: true,
      },
      { title: 'E-mail', attribute: 'col4', sortable: true, resizable: true },
      {
        title: 'Application',
        attribute: 'col5',
        sortable: true,
        resizable: true,
      },
      {
        title: 'Group',
        attribute: 'col6',
        sortable: true,
        resizable: true,
        width: '20%',
      },
      {
        title: 'Status',
        attribute: 'col7',
        sortable: true,
        resizable: false,
        cell: (row, column) => html` <div
          class="table__cell"
          part="status_cell"
        >
          <eui-icon
            name=${row[column.attribute] == 'Disabled' ? 'cross' : 'check'}
            color=${row[column.attribute] == 'Disabled' ? 'red' : 'green'}
          ></eui-icon>
          <div part="status">${row[column.attribute]}</div>
        </div>`,
      },
    ];
    this.tableSetting_columns = this.table_columns;
    this.table_row = this.data;
    // this.row_count=this.data.length
    // filterApplications
    this.filterapps_data = [
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
    this.filterGroup_data = [
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

    // statup_functions
    setTimeout(() => {
      this.startup_fun();
    }, 550);
  }

  // didRender
  didRender() {
    // hold on to a user details reference
    console.log("didRender");
    this.userdetails_container =
      this.shadowRoot.querySelector('#selected-user');
    // console.log(this.userdetails_container);
    this.users_table = this.shadowRoot.querySelector('eui-table');
    this.filter_form = this.shadowRoot.querySelector('#filter-form');
    this.multi_panel_tile = this.shadowRoot.querySelector('#multi-panel-tile');
    this.action_buttons = this.shadowRoot.querySelector('#action_buttons');
    this.statusChange_dialog = this.shadowRoot.querySelector('#status_dialog');
    setTimeout(() => {
      // table multi Panel
      this.set_multiPanelTile();
      this.filter_apps = this.shadowRoot
        .querySelector('#filter-form > e-um-apps-groups')
        .shadowRoot.querySelector('#apps')
        .shadowRoot.querySelectorAll('div > ul > eui-tree-item');
      this.filter_groups = this.shadowRoot
        .querySelector('#filter-form > e-um-apps-groups')
        .shadowRoot.querySelector('#groups')
        .shadowRoot.querySelectorAll('div > ul > eui-tree-item');
      // console.log(this.filter_group);
      this.filtergroup_disable(this.filter_groups);
    }, 450);
  }

  // didUpgrade
  didUpgrade() {
    console.log("didUpgrade");
    // hold on to a reference of the table Setting.
    this.tableSetting = this.shadowRoot.querySelector('eui-table-setting');

  }

  // didDisconnect
  didDisconnect() {
    // this.user_actionbutton(false);
    // this.select_userdetails();
  }

  startup_fun() {
    console.log('statup_fun');
    //this.set_multiPanelTile();
    this.set_tableheadingstyle();
    console.log(window.EUI.Router.getRouteMap());
  }

  // setting title in multipanel
  set_multiPanelTile() {
    console.log(this.multi_panel_tile.subtitle);
    const panel_subtitle = this.multi_panel_tile.shadowRoot.querySelector(
      'div.tile__header__left__subtitle',
    );
    const table_rows_count = `<span class="row_count">${this.data.length}</span><span> items</span>`;

    const filter_clear = `<span class="filter_text">Filters applied</span> -
      <span id="filter_clear" style="color: #0069c2;cursor: pointer;">Clears</span>`;
    const last_refresh =
      '<span refresh_text>Last refreshed</span> <span class="refresh_time">right now</span>';
    panel_subtitle.innerHTML = `${table_rows_count} | ${filter_clear} | ${last_refresh}`;
    const filter_clear_link =
      this.multi_panel_tile.shadowRoot.querySelector('#filter_clear');
    filter_clear_link.addEventListener('click', this);
  }

  // add style to table heading content
  set_tableheadingstyle() {
    const last_tableheading = this.users_table.shadowRoot.querySelector(
      'thead  th:nth-last-child(2)',
    );
    const table_headings = this.users_table.shadowRoot.querySelectorAll(
      'thead th span.table__cell-content',
    );
    last_tableheading.style.borderRight = 'none';
    for (const heading of table_headings) {
      heading.style.flex = 'none';
    }
  }

  // updating table count
  update_tablerowcount(row_count) {
    const count_element = this.multi_panel_tile.shadowRoot.querySelector(
      'div.tile__header__left__subtitle > span.row_count',
    );
    count_element.innerHTML = row_count;
  }

  // select table row count
  select_tablerowcount(select_row) {
    const count_element = this.multi_panel_tile.shadowRoot.querySelector(
      'div.tile__header__left__subtitle > span.filter_text',
    );
    if (select_row > 0) {
      count_element.innerHTML = `${select_row} selected`;
    } else {
      count_element.innerHTML = 'Filters applied';
    }
  }

  // unselecting filter group children
  unselect_groupchildren(group_item) {
    const children_items = group_item.querySelectorAll('eui-tree-item');
    console.log(children_items);
    for (const item of children_items) {
      if (item.hasAttribute('checked')) {
        item.removeAttribute('checked');
      }
    }
  }

  // disableing filter group
  filtergroup_disable(group_items) {
    // console.log(group_items);
    for (const item of group_items) {
      console.log(item.tagName);
      item.style.opacity = '0.5';
      item.style.pointerEvents = 'none';
      if (item.hasAttribute('open')) {
        console.log('open removed');
        item.removeAttribute('open');
      }
      if (item.hasAttribute('checked')) {
        // console.log("calling sub_groupchildren");
        this.unselect_groupchildren(item);
        item.removeAttribute('checked');
        console.log('checked removed');
      }
      if (item.hasAttribute('indeterminate')) {
        // console.log("calling sub_groupchildren");
        this.unselect_groupchildren(item);
        item.removeAttribute('indeterminate');
        console.log('indeterminate removed');
      }
    }
  }

  // Enableing filter group
  filtergroup_able(group_items) {
    // console.log(group_items);
    for (const item of group_items) {
      console.log(item.tagName);
      item.style.opacity = 'inherit';
      item.style.pointerEvents = 'inherit';
    }
  }

  // sorting user table
  filtering_usertable(formdata) {
    // this.table_row
    let new_tabledata = [];

    new_tabledata = this.data.filter(row => {
      let rowdata_match = false;
      for (const column of this.table_columns) {
        // console.log(row[column.attribute]+ "::"+ formdata[column.title.toLowerCase()]);
        const rowcolumn_data = row[column.attribute].toLowerCase();
        let formfield_data = formdata[column.title.toLowerCase()];
        if (Array.isArray(formfield_data)) {
          formfield_data = formfield_data.join(' ').toLowerCase();

          // formfield_data=formfield_data.toLowerCase();
        }
        // console.log(rowcolumn_data.includes(formfield_data));
        console.log(`${rowcolumn_data}== ${formfield_data}`);
        if (formfield_data != '') {
          // console.log("not null");
          if (rowcolumn_data.includes(formfield_data)) {
            // console.log(rowcolumn_data+"="+formfield_data);
            rowdata_match = true;
          }
        }
      }
      if (rowdata_match) {
        return row;
      }
    });
    console.log(new_tabledata);
    // adding search  data to usertable
    // this.table_row = new_tabledata
    this.users_table.data = new_tabledata;
    // this.update_tablerowcount(this.users_table.data.length);
  }

  // retriving  filter form elements data
  filterform_data() {
    const formdata = {};
    const text_fields = this.filter_form.querySelectorAll('eui-text-field');
    const status_checkboxs = this.filter_form.querySelectorAll(
      '#status > eui-checkbox',
    );

    for (const field of text_fields) {
      // console.log(field.name +" "+ field.value);
      formdata[field.name] = field.value;
    }
    // filter selected application
    // formdata.application=this.select_filterapps;
    formdata.application = [];
    for (const app of this.filter_apps) {
      if (app.hasAttribute('checked')) {
        formdata.application.push(app.innerText.trim());
      }
    }
    // filter selected groups
    formdata.group = [];
    for (const group of this.filter_groups) {
      if (
        group.hasAttribute('checked') ||
        group.hasAttribute('indeterminate')
      ) {
        const children_items = group.querySelectorAll('eui-tree-item[checked]');
        for (const item of children_items) {
          // console.log(item.innerText.trim());
          formdata.group.push(item.innerText.trim());
        }
      }
    }
    console.log(formdata.groups);

    // filter form status
    formdata.status = [];
    for (const checkbox of status_checkboxs) {
      if (checkbox.hasAttribute('checked')) {
        formdata.status.push(checkbox.name);
      }
    }
    console.log(formdata);
    this.filtering_usertable(formdata);
  }

  // Reseting filter form fields
  reset_filterform() {
    const text_fields = this.filter_form.querySelectorAll('eui-text-field');
    const status_checkboxs = this.filter_form.querySelectorAll(
      '#status > eui-checkbox',
    );

    // empty filter form text fields
    for (const field of text_fields) {
      field.value = '';
    }
    // uncheck select apps
    for (const apps of this.filter_apps) {
      if (apps.hasAttribute('checked')) {
        apps.removeAttribute('checked');
      }
    }
    // uncheck select groups
    this.filtergroup_disable(this.filter_groups);
    // uncheck the status check box
    for (const checkbox of status_checkboxs) {
      if (checkbox.hasAttribute('checked')) {
        checkbox.removeAttribute('checked');
      }
    }
  }

  // selected user details
  select_userdetails(user) {
    let user_content = '';

    if (user === undefined) {
      user_content = `<div class="no-user d-flex">
        <eui-icon name="info"></eui-icon>
        <div class="info_text">
        <div>No user selected</div>
        <div class="info-gray">Select a user from the table to view details</div>
        </div>
      </div>`;
      console.log('no user');
    } else {
      console.log('selected user');
      // console.log(user);
      const details = this.table_columns.map(column => {
        if (column.title == 'Status') {
          return `<div class="info_text">
        <div class="title">${column.title}</div>
        <div class="info-gray">
        <eui-icon name=${
          user[column.attribute] == 'Disabled' ? 'cross' : 'check'
        }
           color=${
             user[column.attribute] == 'Disabled' ? 'red' : 'green'
           }></eui-icon>
        ${user[column.attribute]}
        </div>
        </div>`;
        }
        return `<div class="info_text">
      <div class="title">${column.title}</div>
      <div class="info-gray">
      ${user[column.attribute]}
      </div>
      </div>`;
      });
      user_content = details.join('');
      // console.log(user_content);
    }

    this.userdetails_container.innerHTML = user_content;
  }

  // user action buttons
  user_actionbutton(val) {
    const class_list = this.action_buttons.classList;
    if (val) {
      if (class_list.contains('hide')) {
        class_list.remove('hide');
      }
      // this._rowActionButton = val;
    } else {
      if (!class_list.contains('hide')) {
        class_list.add('hide');
      }
      // this._rowActionButton = val;
    }
  }

  // redirect to edit user form
  edit_user(id) {
    // this.router.goto(`user-management-app/user-edit?userId=${id}`);
    window.EUI.Router.goto(`user-management-app/user-edit?userId=${id}`);
  }

  // redirect to password change form
  changepassword_user(id) {
    console.log('redirect to password change');
    // this.router.goto(`user-management-app/edit-user?id=${id}`);
  }

  // disable or enable the user
  disable_enable_user(user, status) {
    console.log(user);
    console.log(status);
    console.log(this.data);

    const updated_data = this.data.map(dataitem => {
      console.log(dataitem);
      if (dataitem.col1 == user.col1) {
        dataitem.col7 = status;
      }
      return dataitem;
    });
    this.data = updated_data;
    this.users_table.data = this.data;
    console.log(this.data);
  }

  // change user status disable or enable the user
  changeUser_status(user) {
    console.log('redirect to disable or enable');
    const dialogbox = this.statusChange_dialog;
    const dialog_centent =
      this.statusChange_dialog.querySelector('div.dialog-content');
    const dialog_confirmbutton =
      this.statusChange_dialog.querySelector('eui-button');
    if (dialog_confirmbutton.hasAttribute('warning')) {
      dialog_confirmbutton.removeAttribute('warning');
    }
    console.log(`${user.col2} ${user.col7}`);
    // enable user
    if (user.col7 == 'Disabled') {
      dialogbox.show = 'true';
      dialogbox.label = 'Confirm enable';
      dialog_centent.innerText = `Are you sure you want to enable user [${`${user.col2} ${user.col3}`}]?`;
      dialog_confirmbutton.innerText = 'Enable';
      this.dialog_eventlistener = () => {
        dialogbox.removeAttribute('show');
        this.disable_enable_user(user, 'Enabled');
      };
      dialog_confirmbutton.addEventListener('click', this.dialog_eventlistener);
    }
    // Disabled user
    if (user.col7 == 'Enabled') {
      dialogbox.show = 'true';
      dialogbox.label = 'Confirm disable';
      dialog_centent.innerText = `Are you sure you want to disable user [${`${user.col2} ${user.col3}`}]?`;
      dialog_confirmbutton.innerText = 'Disable';
      this.dialog_eventlistener = () => {
        dialogbox.removeAttribute('show');
        this.disable_enable_user(user, 'Disabled');
      };
      dialog_confirmbutton.addEventListener('click', this.dialog_eventlistener);
    }
  }

  // user_delete
  user_delete(user) {
    console.log('delete user');
    const new_userlist = this.data.filter(dataitem => {
      if (dataitem.col1 != user.col1) {
        return dataitem;
      }
    });
    console.log(new_userlist);
    // this.table_row = new_userlist;
    this.data = new_userlist;
    this.users_table.data = this.data;
    console.log(this.data);
  }

  // delete user permanently
  delete_user(user) {
    console.log('redirect to delete user');
    const dialogbox = this.statusChange_dialog;
    const dialog_centent =
      this.statusChange_dialog.querySelector('div.dialog-content');
    const dialog_confirmbutton =
      this.statusChange_dialog.querySelector('eui-button');
    // add content to dialog box
    dialogbox.show = 'true';
    dialogbox.label = 'Confirm disable';
    dialog_centent.innerHTML = `<p>This action will permanently delete the user and
    all access rights etc.<br> to ENIQ applications/groups... </p><br>
    <p>Are you sure you want to disable user [${`${user.col2} ${user.col3}`}]?</p>`;
    dialog_confirmbutton.setAttribute('warning', '');
    dialog_confirmbutton.innerText = 'Delete';
    this.dialog_eventlistener = () => {
      dialogbox.removeAttribute('show');
      dialog_confirmbutton.removeAttribute('warning');
      this.user_delete(user);
    };
    dialog_confirmbutton.addEventListener('click', this.dialog_eventlistener);
  }

  // component Event handling
  handleEvent(event) {
    if (event.type === 'click' && event.target.id === 'settings') {
      console.log(this.tableSetting.tagName);
      // set the table settings columns
      this.tableSetting.columns = this.table_columns;
      // open/close dialog...
      this._showSettings = !this._showSettings;
    }
    if (event.type === 'click' && event.target.id === 'apply-settings') {
      // call apply on the table settings component...
      this.tableSetting.apply();
    }
    if (event.type === 'eui-table-setting:apply') {
      // apply the settings...
      this.table_columns = event.detail.value;
      // close dialog...
      this._showSettings = false;
    }
    // reset table setting columns
    if (event.type === 'click' && event.target.id === 'reset-tableSettings') {
      // resetting table columns in table settings component...
      this.tableSetting.columns = this.tableSetting_columns;
    }
    if (event.type === 'eui-dialog:cancel' && event.id === 'table_settings') {
      // call cancel on the table settings component...
      this.tableSetting.cancel();
      this._showSettings = false;
    }

    if (event.type === 'eui-table:row-select') {
      // table row selection
      if (event.detail.length > 0) {
        this.user_actionbutton(true);
        // this._rowActionButton = true;
        console.log(event.detail.length);
        // this.select_users=event.detail[event.detail.length - 1];
        // console.log(this.select_users);
        this.select_user = event.detail[event.detail.length - 1];
        this.select_userdetails(event.detail[event.detail.length - 1]);
        this.select_tablerowcount(event.detail.length);
      } else {
        // this._rowActionButton = false
        this.user_actionbutton(false);
        this.select_userdetails();
        this.select_tablerowcount(event.detail.length);
      }
    }

    if (event.type === 'eui-table:contextmenu') {
      // store the row...
      this.contextRow = event.detail.row;

      // show the menu
      event.detail.menu.show = true;
    }

    if (event.type === 'eui-menu:click') {
      // table contextmenu select
      const [menuItem] = event.detail.menuItems;
      switch (menuItem.value) {
        case 'edit':
          // perform an edit action on this.contextRow
          console.log('edit', this.contextRow);
          // this.router.goto(`user-management-app/edit-user?id=${this.contextRow.col1}`);
          this.edit_user(this.contextRow.col1);
          break;
        case 'change-password':
          // perform an change-password action on this.contextRow
          console.log('change-password:', this.contextRow);
          this.changepassword_user(this.contextRow.col1);
          break;
        case 'disable':
          // perform an disable action on this.contextRow
          console.log('disable:', this.contextRow);
          this.changeUser_status(this.contextRow);
          break;
        case 'delete':
          // ask for deletion confirmation...
          // delete the row, this.contextRow
          console.log('delete:', this.contextRow);
          this.delete_user(this.contextRow);
          break;
      }
    }
    // collect selected filter apps --remove
    if (event.type === 'eui-tree:select' && event.target.id === 'filterapps') {
      console.log('filter apps event');
      console.log(event.detail);
      if (event.detail.selected) {
        this.select_filterapps.push(event.detail.label);
        console.log(this.select_filterapps);
        // Enable selected group
        for (const group of this.filter_groups) {
          if (group.innerText.includes(event.detail.label)) {
            // console.log(group.innerText);
            this.filtergroup_able([group]);
          }
        }
      } else {
        const select_apps = this.select_filterapps.filter(app => {
          if (app !== event.detail.label) {
            return app;
          }
        });
        this.select_filterapps = select_apps;
        console.log(this.select_filterapps);
        // disable unselected group
        for (const group of this.filter_groups) {
          // console.log(group.innerText);
          if (group.innerText.includes(event.detail.label)) {
            this.filtergroup_disable([group]);
          }
        }
      }
    }

    // filter form apply
    if (event.type === 'click' && event.target.id === 'apply') {
      console.log('form apply');
      // retriving filterform data
      this.filterform_data();
    }
    // filter form reset
    if (event.type === 'click' && event.target.id === 'reset') {
      console.log('form reset');
      //this.filter_form.reset();
      this.reset_filterform();
      // this.users_table.data=this.table_row;
    }

    // filter clear
    if (event.type === 'click' && event.target.id === 'filter_clear') {
      console.log('filter_clear');
      // this.table_row = this.data
      this.users_table.data = this.data;
      // this.update_tablerowcount(this.users_table.data.length);
    }
    // edit user action button
    if (event.type === 'click' && event.target.id === 'edit') {
      console.log('edituser');
      // console.log(this.select_user.col1);
      this.edit_user(this.select_user.col1);
    }
    // user password change action button
    if (event.type === 'click' && event.target.id === 'change-password') {
      console.log('Change password');
      this.changepassword_user(this.select_user.col1);
    }
    // user disable or enable action button
    if (event.type === 'click' && event.target.id === 'change-status') {
      console.log('disable or enable user');
      this.changeUser_status(this.select_user);
    }
    // user delete action button
    if (event.type === 'click' && event.target.id === 'delete') {
      console.log('delete user');
      this.delete_user(this.select_user);
    }
    // user dialog @eui-dialog:cancel
    if (
      event.type === 'eui-dialog:cancel' &&
      event.target.id === 'status_dialog'
    ) {
      console.log('user dialog cancel');
      console.log(event);
      const confirm_button = event.target.querySelector('eui-button');
      confirm_button.removeEventListener('click', this.dialog_eventlistener);
    }

    // event handler end
  }

  /**
   * Render the <e-um-users-table> component. This function is called each time a
   * prop changes.
   */
  render() {
    return html`
    <div class="um-users-container">
    <!--um-users-table start -->
        <eui-multi-panel-tile id="multi-panel-tile" class="multi-panel" tile-title="Users"
           subtitle="${this.data.length} Items | Filters applied - Clear | Last refreshed right now">

          <!-- main panel content -->
          <div slot="content">
            <eui-table id="users-table" .columns=${this.table_columns} .data=${this.data} multi-select sortable resizable
              @eui-table:contextmenu=${this} @eui-table:row-select=${this} >
              <!-- table context-menu -->
              <eui-menu slot="context-menu" @eui-menu:click="${this}">
                <eui-menu-item value="edit" label="Edit"></eui-menu-item>
                <eui-menu-item value="change-password" label="Change-password"></eui-menu-item>
                <eui-menu-item value="disable" label="Disable"></eui-menu-item>
                <eui-menu-item value="delete" label="Delete"></eui-menu-item>
              </eui-menu>
            </eui-table>
          </div>

          <!--table settings right panel  -->
          <!--row slection buttons-->
          <div id="action_buttons" class="row-action-buttons hide" slot="action">
             <eui-button id="edit" @click=${this}>Edit</eui-button>
             <eui-button id="change-password" @click=${this}>Change password</eui-button>
             <eui-button id="change-status" @click=${this}>Disable</eui-button>
             <eui-button id="delete" @click=${this}>Delete</eui-button>
          </div>

          <!--table settings icon main panel action  -->
          <eui-tooltip action slot="action" message="settings">
              <eui-icon id='settings' @click=${this} name='settings'>
              </eui-icon>
          </eui-tooltip>

          <!-- Filter panel action-->
            <eui-tooltip class="hide" action slot="action" message="Clear filter">
              <eui-icon name="filter-clear"></eui-icon>
            </eui-tooltip>
          </eui-tile-panel>

          <!-- Filter panel -->
          <eui-tile-panel tile-title="Filter by" slot="left" icon-name="filter"  resizable>

            <!-- Filter panel content -->
            <div slot="content">
              <!--I am content in the Filter panel.-->
              <div class="table-filter">
                <form id="filter-form" class="filter-form">
                    <!--Username-->
                    <div class="form-fields">
                      <label for="username">Username</label>
                      <eui-text-field name="username" placeholder="Username"
                      pattern="^[A-Za-z]+$"></eui-text-field>
                    </div>

                    <!--First name-->
                    <div class="form-fields">
                      <label for="firstname">First name</label>
                      <eui-text-field name="first name" placeholder="First name"
                      pattern="^[A-Za-z]+$"></eui-text-field>
                    </div>

                    <!--Last name-->
                    <div class="form-fields">
                      <label for="lastname">Last name</label>
                      <eui-text-field name="last name" placeholder="Last name"
                      pattern="^[A-Za-z]+$"></eui-text-field>
                    </div>

                    <!--E-mail-->
                    <div class="form-fields">
                      <label for="email">E-mail</label>
                      <eui-text-field name="e-mail" placeholder="Email"
                      pattern="^\\w+([\\.\\-]?\\w+)*@\\w+([\\.\\-]?\\w+)*(\\.\\w{2,3})+$">
                      </eui-text-field>
                    </div>

                    <!--Applications
                    <div class="form-fields">
                      <label>Applications</label>
                      <div class="apps_checkbox">
                      <eui-tree id="filterapps"  multi-select
                       .data=${this.filterapps_data}
                        @eui-tree:select="${this}">
                       </eui-tree>
                      </div>
                    </div>-->

                    <!--Groups
                    <div class="form-fields">
                      <label>Groups</label>
                      <eui-tree id="filtergroups" multi-select
                      .data=${this.filterGroup_data}
                      @eui-tree:select="${this}" >
                      </eui-tree>
                    </div>-->

                    <!--apps and groups-->
                   <e-um-apps-groups class="filter-form">
                   </e-um-apps-groups>

                    <!--Status-->
                    <div class="form-fields">
                      <label>Status</label>
                      <div id="status" class="status_checkbox">
                          <eui-checkbox name="Enabled">Enabled</eui-checkbox>
                          <eui-checkbox name="Disabled">Disabled</eui-checkbox>
                      </div>
                    </div>

                    <!--form buttons-->
                    <div class="form-fields form-buttons">
                       <eui-button id="reset" class="reset"
                       @click="${this}">
                       Reset</eui-button>
                       <eui-button id="apply" class="apply" primary
                       @click="${this}">
                       Apply</eui-button>
                    </div>

                </form>
              </div>
            </div>
            <!--filter panel end -->
          </eui-tile-panel>

          <!-- User details panel (icon)-->
          <eui-tile-panel tile-title="User details" slot="right" icon-name="info" width=300 resizable>

            <!-- User details flyout panel content -->
            <div class="user-details" slot="content">
              <!--No user selected in table-->
              <!--selected user details from table-->
              <div id="selected-user" class="selected-user">
                <div class="no-user d-flex ">
                    <eui-icon name="info"></eui-icon>
                    <div class="info_text">
                      <div>No user selected</div>
                      <div class="info-gray">Select a user from the table to view details</div>
                    </div>
                </div>
              </div>
            </div>
          </eui-tile-panel>
        </eui-multi-panel-tile>
        <!--um-users-table end -->

        <!--  table settings dialog-->
        <div class="table-settings-dialog">
          <!--  table settings-->
          <eui-dialog id="table_settings" label='Table settings'
              ?show=${this._showSettings}
              @eui-dialog:cancel=${this}>

              <eui-table-setting @eui-table-setting:apply=${this} slot='content'
               pin-action-tooltip="pin / unpin column" pinned >
              </eui-table-setting>
              <eui-button id='reset-tableSettings' slot='bottom'  @click=${this}>
              Reset
              </eui-button>
              <eui-button id='apply-settings' slot='bottom' primary @click=${this}>
                Apply
              </eui-button>

          </eui-dialog>
        </div>
        <!--user status change dialog-->
        <div class="statusChange_dialog">
            <!--enable or disable-->
            <eui-dialog label="Confirm disable" id="status_dialog"
            @eui-dialog:cancel=${this} >
                <div class="dialog-content" slot="content" show="false">
                  Are you sure you want to disable user?
                </div>
              <eui-button id="user_dialog" @click=${this} slot="bottom" primary>Button</eui-button>
            </eui-dialog>
        </div>

    </div>
    `;
  }
}

/**
 * @property {Boolean} propOne - show active/inactive state.
 * @property {String} propTwo - shows the "Hello World" string.
 */
definition('e-um-users-table', {
  style,
  props: {
    propOne: { attribute: true, type: Boolean },
    propTwo: { attribute: true, type: String, default: 'Hello World' },
    _showSettings: { type: Boolean },
    _rowActionButton: { type: Boolean },
    filterApplications: { type: Array },
    filterGroup: { type: Array },
    data: { type: Array },
  },
})(UmUsersTable);

UmUsersTable.register();