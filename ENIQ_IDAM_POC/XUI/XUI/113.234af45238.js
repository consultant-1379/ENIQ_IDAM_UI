(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{576:function(e,t,a){"use strict";a(84);t.a=function(e){return e.goto&&decodeURIComponent(e.goto).indexOf("oauth2/authorize?")>0&&delete e.goto,e}},646:function(e,t,a){"use strict";a.r(t);var o=a(2),n=a.n(o),s=a(0),r=a(278),i=a(183),g=a(86),u=a(4),c=a(17),d=a(380),p=a(70),l=a(364),f=a(576),m=a(20),h=a(369),b=a(28),w=g.a.extend({template:"openam/LogoutTemplate",baseTemplate:"common/LoginBaseTemplate",data:{},render:function(){var e,t=this,a=function(a){Object(s.has)(a,"goto")?window.location.href=decodeURIComponent(a.goto):e?window.location.href=e:(t.data.loggedOut=!0,t.parentRender())},o=function(a){if(401===a.status){var o=n.a.t("config.messages.CommonMessages.logoutFailedNotLoggedIn");p.a.addMessage({type:p.a.TYPE_INFO,message:o})}else p.a.addMessage({type:p.a.TYPE_DANGER,response:a});e?window.location.href=e:401===a.status?(t.data.loggedOut=!0,t.parentRender()):c.a.sendEvent(u.a.EVENT_CHANGE_VIEW,{route:m.a.configuration.routes.login})},g=Object(f.a)(l.a.getSuccessfulLoginUrlParams());l.a.removeSuccessfulLoginUrlParams(),this.data.params=l.a.filterUrlParams(g),this.data.loggedOut=!1,h.a.stop();var w={suppressSpinner:!0};this.parentRender(function(){var t=Object(i.b)(b.a.getCurrentFragment()).goto||Object(i.b)(b.a.getCurrentQueryString()).goto;t?Object(r.g)(t).then(function(t){e=t,Object(d.a)(w).then(a,o)},function(){Object(d.a)(w).then(a,o)}):Object(d.a)(w).then(a,o)})}});t.default=new w}}]);
//# sourceMappingURL=113.234af45238.js.map