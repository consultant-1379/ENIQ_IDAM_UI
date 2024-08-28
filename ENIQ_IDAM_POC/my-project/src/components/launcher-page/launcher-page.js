/**
 * Component LauncherPage is defined as
 * `<e-launcher-page>`
 *
 * @extends {LitComponent}
 */
import { LitComponent, html, definition } from '@eui/lit-component';
import style from './launcher-page.css';
import { TextField } from '@eui/base/text-field';
import { Icon } from '@eui/theme/icon';
import { Tile } from '@eui/layout/tile';
import { Link } from '@eui/base/link';
import { Tooltip } from '@eui/base/tooltip';
import img from '../../../public/assets/network.png';

export default class LauncherPage extends LitComponent {
  // Uncomment this block to add initialization code
   constructor() {
     super();
     // initialize
     this.component_path='';
     this.products=[];
     this.recent_apps=[];
     this.favorite_apps=[];
   }

  static get components() { 
    return {
      // register components here
	'eui-text-field': TextField,
	'eui-icon':Icon,
	'eui-tile':Tile,
	'eui-link':Link,
  'eui-tooltip': Tooltip 
    };
  }

  //didConnect
didConnect(){
  //initisaling values to products, recent and favorite apps array
  this.products=["ENIQ"];
  this.recent_apps=[{app:'Alarm Monitor',favorite:true},{app:'NetAn',favorite:false},
                    {app:'Network Health Monitor',favorite:true},{app:'Payment',favorite:false}];
  this.favorite_apps=[{app:'Alarm Monitor',favorite:false},{app:'Alarm Supervision Status',favorite:true},
            {app:'Network Health Monitor',favorite:true},{app:'PM Collection and Initiation',favorite:false}];

 //calling startup function
setTimeout(()=>this.startup_fun(), 200);
}
//didRender
didRender(){
  //store launcher-page component path
  // this.component_path=document.querySelector("eui-container").shadowRoot.querySelector("e-todo-app")
  //       .shadowRoot.querySelector("e-launcher-page");
    this.component_path= this;
  setTimeout(()=>{
    this.products_list(this.products);
    this.Recent_favorite_apps(this.recent_apps,this.favorite_apps)
  },500);      
}
//startup function
startup_fun=()=>{
  
 }
// rendering products list to html
 products_list=(products)=>{
   const list_path = this.component_path.shadowRoot.querySelector(".products > .products_list > .list");
   let  product_items;
   if(products.length > 0 ) {
      product_items = products.map(product=>{
        return `
        <div class="list-item">
          <eui-icon class="icon" name="node-network"></eui-icon>
          <eui-link class="product-name">${product}</eui-link>	
        </div>`
      });
      list_path.innerHTML = product_items.join('');  
   }
                   
  }
  // Recent and favorite apps list
  apps_list=(apps,list_path)=>{
    let  apps_items;
    if(apps.length > 0 ){
      apps_items = apps.map(app=>{
        return `
          <div class="list-item" >
             <eui-link href="#" class="link"> ${app.app}</eui-link>
             <div class="icons">
                  <eui-tooltip action="" delay="0" message="${app.app}" position="bottom">
                   <eui-icon name="info"></eui-icon>
                  </eui-tooltip>
                  <eui-icon name="${app.favorite ? 'favorite-solid' : 'favorite'}"></eui-icon>
              </div>                  
          </div>`
      });
      list_path.innerHTML = apps_items.join('');
    }  
  }

  // Recent and favorite apps
  Recent_favorite_apps =(recent_apps,favorite_apps)=>{
    //Recent apps
    const recent_apps_path = this.component_path.shadowRoot.querySelector(".apps-block >.recent-app >.apps-list");
    this.apps_list(recent_apps,recent_apps_path);
    //Favorite apps
    const favorite_apps_path = this.component_path.shadowRoot.querySelector(".apps-block >.favorite-app >.apps-list");
    this.apps_list(favorite_apps,favorite_apps_path);
  }
  /**
   * Render the <e-launcher-page> component. This function is called each time a
   * prop changes.
   */
  render() {
    return html`<div class=" launcher-page">
 	<!--launcher-page start -->
           <!--search_bar -->
        <div class="search container">
	     <div class="search_bar">
		<eui-text-field placeholder="Search all products and applications" name="item">
  		   <eui-icon slot="icon" name="search"></eui-icon>
		</eui-text-field>	
	     </div>
	</div>
          <!--search_bar end-->
         <!--products-->
	 <div class="products container">
	     <div class="title">Products (${this.products.length})</div>
	     <div class="products_list">
		      <div class="list layout__dashboard ">
            
            <!--  <div class="list-item">
                  <eui-icon class="icon" name="node-network"></eui-icon>
                  <eui-link class="product-name">ENIQ</eui-link>	
              </div>
              <div class="list-item">
                    <eui-icon class="icon" name="node-network"></eui-icon>
                    <eui-link class="product-name">Ericsson Adaptive Inventory</eui-link>
              </div>-->

		      </div>
	     </div>
            <div class="expand">Expand</div>
	 </div>
	 <!--products end--> 
   <!--Recent and Favorite Apps -->
    <div class="apps-block container">
    <!--Recent App -->
       <div class="recent-app apps">
           <div class="block-header">
               <div class="title">Recent App</div>
               <div class="view-all d-none"> View all</div>
           </div>
           <div class="apps-list">
          <!--<div class="list-item" >
                <eui-link href="#" class="link"> Alarm Monitor</eui-link>
                    <div class="icons">
                        <eui-icon name="info"></eui-icon>
                        <eui-icon name="favorite"></eui-icon>
                    </div>                  
              </div>
              <div class="list-item">
                <eui-link href="#" class="link"> Alarm Supervision Status</eui-link>
                    <div class="icons">
                        <eui-icon name="info"></eui-icon>
                        <eui-icon name="favorite-solid"></eui-icon>
                    </div>                  
              </div>-->
           </div>
       </div>
    <!--Favorite App -->
       <div class="favorite-app apps">
           <div class="block-header">
               <div class="title">Favorite App</div>
               <div class="view-all"> View all</div>
           </div>
           <div class="apps-list">
          <!--<div class="list-item" >
                 <eui-link href="#" class="link"> Alarm Monitor</eui-link>
                    <div class="icons">
                        <eui-icon name="info"></eui-icon>
                        <eui-icon name="favorite"></eui-icon>
                    </div>                  
              </div>
              <div class="list-item" >
                <eui-link href="#" class="link"> Alarm Supervision Status</eui-link>
                    <div class="icons">
                        <eui-icon name="info"></eui-icon>
                        <eui-icon name="favorite-solid"></eui-icon>
                    </div>                  
              </div>-->
           </div> 
       </div>
    </div>
   <!--Recent and Favorite Apps end -->
       <!--launcher-page end -->
</div>`;
  }
}

/**
 * @property {Boolean} propOne - show active/inactive state.
 * @property {String} propTwo - shows the "Hello World" string.
 */
definition('e-launcher-page', {
  style,
  props: {
    propOne: { attribute: true, type: Boolean },
    propTwo: { attribute: true, type: String, default: 'Hello World' },
  },
})(LauncherPage);
