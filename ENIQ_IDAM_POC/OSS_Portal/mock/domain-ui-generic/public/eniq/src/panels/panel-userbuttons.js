import { TemplateComponent, definition } from '@eui/component';
import { Button } from '@eui/base/button';;


export default class PanelUserButtons extends TemplateComponent{
      // Uncomment this block to add initialization code
      // constructor() {
      //   super();
     //   // initialize
     // }

    static get components() {
        return {
             'eui-button': Button,
        };
    }
    
    handleEvent(event) {} 

}

const style = `
:host {
    display:block;
}
.panel-buttons{
    display: flex;
    flex-direction: column;
    margin-top: 1.3em;
}
.user-buttons,.sign-out{
    display: flex;
    flex-direction: column;    
} 
.user-buttons{
    gap: 11px;
}
.sign-out{
    margin-top: 10em;
}
.panel-buttons eui-button{
    --btn-secondary-text:var(--gray-95);
    --btn-secondary-background:var(--gray-23);
    --btn-secondary-border:var(--gray-95);
}
`;


const template=`
 <div class="panel-buttons">
    <div class="user-buttons">
        <eui-button >Change password</eui-button>
        <eui-button >Change details</eui-button>
        <eui-button >Setup passwordless</eui-button>
    </div>
    <div class="sign-out">
        <eui-button >Sign out</eui-button>
    </div>
 </div>
`;

definition('settings-panel', {
    style,
    template,
  })(PanelUserButtons);