/**
 * Component UmUsersTable is defined as
 * `<e-um-users-table>`
 *
 * @extends {LitComponent}
 */
import { LitComponent, html, definition } from '@eui/lit-component';
import style from './um-users-table.css';
import { MultiPanelTile, TilePanel } from '@eui/layout';
import { Tile } from '@eui/layout';
import { Button, Dialog, Tooltip } from '@eui/base';
import { Table, Setting } from '@eui/table';

export default class UmUsersTable extends LitComponent {
  // Uncomment this block to add initialization code
   constructor() {
     super();
     // initialize
     this.table_columns=[];
     this.table_row=[];
   }

  static get components() {
    return {
      // register components here
      'eui-multi-panel-tile': MultiPanelTile,
      'eui-tile-panel': TilePanel,
      'eui-table':Table,
      'eui-table-setting':Setting,
      'eui-tile':Tile,
      'eui-button':Button,
      'eui-dialog':Dialog,
      'eui-tooltip':Tooltip
    };
  }
 //didConnect
 didConnect(){
   //user table_columns
   this.table_columns=[
    { title: 'User name', attribute: 'col1', sortable: true ,mandatory: true},
    { title: 'First name', attribute: 'col2', sortable: true },
    { title: 'Last name', attribute: 'col3', sortable: true },
    { title: 'E-mail', attribute: 'col4', sortable: true },
    { title: 'Application', attribute: 'col5', sortable: true },
    { title: 'Group', attribute: 'col6', sortable: true },
    { title: 'Status', attribute: 'col7', sortable: true }
  ];
  //user table_Data
  this.table_row=[
    { col1: 'ClOGNEci', col2: 'Joe', col3: 'Bloggs', col4: 'j.bloggs@yahoo.com', col5: 'NetAn', col6: 'NetAn ReadOnly', col7: 'Disabled' },
    { col1: 'GUSEutOr', col2: 'Latha', col3: 'Smith', col4: 'lathasmith@vodafone.ie', col5: 'NetAn', col6: 'NetAn Admin', col7: 'Enabled' },
    { col1: 'ClOGNEci', col2: 'Joe', col3: 'Bloggs', col4: 'j.bloggs@yahoo.com', col5: 'NetAn', col6: 'NetAn Admin', col7: 'Enabled' },
  ];
 }
 //didUpgrade
 didUpgrade() {
  // hold on to a reference of the table Setting.
  this.tableSetting = this.shadowRoot.querySelector('eui-table-setting');
}

// table settings Event hand
 handleEvent(event) {
  if (event.type === 'click' && event.target.id === 'settings') {
    console.log(this.tableSetting.tagName);
    //set the table settings columns
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
  if (event.type === 'eui-dialog:cancel') {
    // call cancel on the table settings component...
    this.tableSetting.cancel();
    this._showSettings = false;
  }
  
  if (event.type === 'eui-table:row-select'){
       if(event.detail.length > 0){
        this._rowActionButton = true;
       }
       else{
        this._rowActionButton = false
       }
  }

}


  /**
   * Render the <e-um-users-table> component. This function is called each time a
   * prop changes.
   */
  render() {
    return html`
    <div class="um-users-container">
    <!--um-users-table start -->
        <eui-multi-panel-tile class="multi-panel" tile-title="Users" 
           subtitle="${this.table_row.length} Items | Filters applied - Clear | Last refreshed right now">

          <!-- main panel content -->
          <div slot="content">
            <eui-table id="users-table" .columns=${this.table_columns} .data=${this.table_row} multi-select sortable
            @eui-table:row-select=${this}>
            </eui-table>
          </div>
        
          <!--table settings right panel  -->
          <!--row slection buttons-->
          <div class="row-action-buttons ${this._rowActionButton ? 'show':'hide'}" slot="action">
             <eui-button id="edit">Edit</eui-button>
             <eui-button id="Change-password">Change password</eui-button>
             <eui-button id="disable">Disable</eui-button>
             <eui-button id="delete">Delete</eui-button>
          </div>
          <!--table settings icon main panel action  -->
          <eui-tooltip action slot="action" message="settings">
              <eui-icon id='settings' @click=${this} name='settings'>
              </eui-icon>
          </eui-tooltip>
          

          <!-- Filter panel -->
          <eui-tile-panel tile-title="Filter" slot="left" icon-name="filter"  resizable>
            
            <!-- Filter panel content -->
            <div slot="content">
              I am content in the Filter panel.
            </div>
            
            <!-- Filter panel action-->
            <eui-tooltip class="hide" action slot="action" message="Clear filter">
              <eui-icon name="filter-clear"></eui-icon>
            </eui-tooltip>
          </eui-tile-panel>
        
          <!-- Settings panel -->
          <eui-tile-panel tile-title="User details" slot="right" icon-name="info" width=300 resizable>
        
            <!-- Settings panel content -->
            <div slot="content">
              I am content in the User details panel.
            </div>
          </eui-tile-panel>
        </eui-multi-panel-tile>
        <!--um-users-table end -->

        <!--  table settings dialog-->
        <div class="table-settings-dialog">
          <!--  table settings-->
          <eui-dialog label='Table settings'
              ?show=${this._showSettings}
              @eui-dialog:cancel=${this}>
            
              <eui-table-setting @eui-table-setting:apply=${this} slot='content'
               pin-action-tooltip="pin / unpin column" pinned >
              </eui-table-setting>
              <eui-button id='reset-settings' slot='bottom'  @click=${this}>
              Reset
              </eui-button>
              <eui-button id='apply-settings' slot='bottom' primary @click=${this}>
                Apply
              </eui-button>
             
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
    _rowActionButton : { type: Boolean },
  },
})(UmUsersTable);
