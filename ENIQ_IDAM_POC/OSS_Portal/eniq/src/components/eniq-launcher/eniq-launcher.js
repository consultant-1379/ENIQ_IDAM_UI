/**
 * Component EniqLauncher is defined as
 * `<e-eniq-launcher>`
 *
 * @extends {LitComponent}
 */
import { LitComponent, html, definition } from '@eui/lit-component';
import style from './eniq-launcher.css';
import { Dropdown } from '@eui/base/dropdown';
import { Tile } from '@eui/layout/tile';
import { Link } from '@eui/base/link';

export default class EniqLauncher extends LitComponent {
  // Uncomment this block to add initialization code
   constructor() {
     super();
     // initialize
     this.component_path='';
     this.all_apps=[];
   }

  static get components() {
    return {
      // register components here
       'eui-dropdown':Dropdown,
       'eui-tile':Tile,
       'eui-link':Link
    };
  }
  didConnect(){
    this.bubble('app:title', { displayName: 'Eniq' });
    this.all_apps =[{name:"User Management",content:"2.6.11",favorite:true},{name:"BI",content:"2.6.11",favorite:false},
              {name:"NetAn",content:"2.6.11",favorite:true},{name:"Application 10",content:"2.6.11",favorite:false},
              {name:"AdminUI",content:"2.6.11",favorite:false},{name:"RHEL",content:"2.6.11",favorite:true},
              {name:"TechPackIDE",content:"2.6.11",favorite:false},{name:"Windows",content:"2.6.11",favorite:true},
              {name:"AdminUI",content:"2.6.11",favorite:true},{name:"RHEL",content:"2.6.11",favorite:false}];
  }
  didRender(){
    //store eniq-launcher component path
    this.component_path=document.querySelector("eui-container").shadowRoot.querySelector("e-eniq-launcher");
    setTimeout(()=>{
      this.all_apps_list(this.all_apps);
      
    },500);
  }
//change favorite apps
change_favorite =(event)=>{
 console.log("change_favorite");
}
// rendering all_apps list to html
  all_apps_list = (apps_list)=>{
    const list_path = this.component_path.shadowRoot.querySelector(".all-apps > .list");
    let apps_items;
    if(apps_list.length > 0){
      apps_items = apps_list.map(app=>{
        return`
        <eui-tile class="list-item" tile-title="${app.name}">
        <div slot="content">${app.content}</div>  
        <div slot="action">
          <eui-icon class="favorite" id="app_favorite" 
             name="${app.favorite ? 'favorite-solid' : 'favorite'}">
          </eui-icon>
          <eui-tooltip action="" delay="0" message="User Management" position="bottom">
              <eui-icon name="info"></eui-icon>
          </eui-tooltip>        
        </div>
      </eui-tile>`
      });
    }
    list_path.innerHTML = apps_items.join('');
  }

  /**
   * Render the <e-eniq-launcher> component. This function is called each time a
   * prop changes.
   */
  render() {
    return html`<div class="eniq-launcher">
    <!--eniq-launcher start -->
    <!--searchbar_appbuttons -->
      <div class="searchbar_filters container d-flex">
          <div class="search_bar">
            <eui-text-field placeholder="Search" name="item">
               <eui-icon slot="icon" name="search"></eui-icon>
            </eui-text-field>	
          </div>
          <div class="filters-buttons d-flex">
               <eui-button class="favorite" icon="favorite-solid">favorite</eui-button>
               <eui-dropdown class="list-type" data-type="single"
                  @eui-dropdown:change="${(event) => console.log(event.detail.menuItems)}">
                  <eui-menu-item value="categories" label="Categories" selected></eui-menu-item>
                  <eui-menu-item value="a-z" label="A-Z"></eui-menu-item>
               </eui-dropdown>
               <eui-dropdown class="layout-type" data-type="single" 
                  @eui-dropdown:change="${(event) => console.log(event.detail.menuItems)}">
                  <eui-menu-item label="Tiles" value="tiles" selected>
                      <eui-icon name="view-tiles" slot="left"></eui-icon>
                  </eui-menu-item>
                  <eui-menu-item label="List" value="list" >
                      <eui-icon name="view-list" slot="left"></eui-icon>
                  </eui-menu-item>
               </eui-dropdown>
          </div>
      </div>
    <!--search_bar end-->
    <!--All-apps-->
      <div class="all-apps container">
           <div class="title">All Apps </div>
           <div class="list d-flex">
                <eui-tile class="list-item" tile-title="User Management">
                  <div slot="content">2.6.11</div>  
                  <div slot="action">
                    <eui-tooltip action="" delay="0" message="User Management" position="bottom">
                        <eui-icon name="info"></eui-icon>
                    </eui-tooltip>
                  <eui-icon name="favorite"      
                      @click=${event => { console.log('Action button clicked'); }} >
                    </eui-icon>
                  </div>
                </eui-tile>

                <eui-tile class="list-item" tile-title="BI">
                  <div slot="content">2.6.11</div>  
                  <div slot="action">
                    <eui-tooltip action="" delay="0" message="BI" position="bottom">
                        <eui-icon name="info"></eui-icon>
                    </eui-tooltip>
                  <eui-icon name="favorite"      
                      @click=${event => { console.log('Action button clicked'); }} >
                    </eui-icon>
                  </div>
                </eui-tile>
           </div>
      </div>
    <!--All-apps end-->

    <!--eniq-launcher end -->
    </div>
    `;
  }
}

/**
 * @property {Boolean} propOne - show active/inactive state.
 * @property {String} propTwo - shows the "Hello World" string.
 */
definition('e-eniq-launcher', {
  style,
  props: {
    propOne: { attribute: true, type: Boolean },
    propTwo: { attribute: true, type: String, default: 'Hello World' },
  },
})(EniqLauncher);
