(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"1a3c":function(t,e,o){"use strict";(function(t){o("d28f");var e=r(o("66fd")),n=r(o("713d")),a=r(o("777a"));function r(t){return t&&t.__esModule?t:{default:t}}function u(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{},n=Object.keys(o);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(o).filter(function(t){return Object.getOwnPropertyDescriptor(o,t).enumerable}))),n.forEach(function(e){c(t,e,o[e])})}return t}function c(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}var p=function(){return Promise.all([o.e("common/vendor"),o.e("components/auth/auth")]).then(o.bind(null,"a32a"))};e.default.component("auth",p);var l=function(){return Promise.all([o.e("common/vendor"),o.e("components/bindPhone/bindPhone")]).then(o.bind(null,"9bb9"))};e.default.component("bindPhone",l);var d=function(){return o.e("components/myfooter/myfooter").then(o.bind(null,"6bab"))};e.default.component("myfooter",d);var i=function(){return o.e("components/copyright/copyright").then(o.bind(null,"cb0f"))};e.default.component("copyright",i);var f=function(){return o.e("components/bsfooter/bsfooter").then(o.bind(null,"3084"))};e.default.component("bsfooter",f),e.default.config.productionTip=!1,e.default.prototype.$store=a.default;var s=o("a5a7");if("wn"==s.platform)e.default.prototype.$baseurl=s.url,e.default.prototype.$imgurl="https://"+s.url.match(/[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\.?/)[0]+"/image/static/",e.default.prototype.$host="https://"+s.url.match(/[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\.?/)[0],e.default.prototype.$diyHost="https://"+s.url.match(/[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\.?/)[0];else{var y="https://"+s.url.match(/[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\.?/)[0];e.default.prototype.$imgurl=y+"/addons/worldidc_cloud/core/public/image/static/",e.default.prototype.$host=y+"/addons/worldidc_cloud/core/public/index.php",e.default.prototype.$baseurl=y+"/addons/worldidc_cloud/core/public/index.php/api/Wxapps/",e.default.prototype.$diyHost=y+"/addons/worldidc_cloud/core/public/"}e.default.prototype.$platform=s.platform,e.default.prototype.$uniacid=s.uniacid;var h=o("c144");e.default.prototype._baseMin=h.baseMin,e.default.prototype._showwxpay=h.showwxpay,e.default.prototype._showalipay=h.showalipay,e.default.prototype._alih5pay=h.alih5pay,e.default.prototype._wxh5pay=h.wxh5pay,e.default.prototype._baidupay=h.baidupay,e.default.prototype._toutiaopay=h.toutiaopay,e.default.prototype._qqpay=h.qqpay,e.default.prototype._checkBindPhone=h.checkBindPhone,e.default.prototype._redirectto=h.redirectto,e.default.prototype._getSuperUserInfo=h.getSuperUserInfo,e.default.prototype._givepscore=h.givepscore,n.default.mpType="app";var m=new e.default(u({store:a.default},n.default));t(m).$mount()}).call(this,o("5486")["createApp"])},2646:function(t,e,o){},"4ca6":function(t,e,o){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;n(o("66fd"));function n(t){return t&&t.__esModule?t:{default:t}}o("a5a7");var a={onLaunch:function(){var e=t.getUpdateManager();e.onCheckForUpdate(function(o){o.hasUpdate&&(e.onUpdateReady(function(o){t.showModal({title:"更新提示",content:"新版本已经准备好，是否重启应用？",success:function(t){t.confirm&&e.applyUpdate()}})}),e.onUpdateFailed(function(){t.showModal({title:"已经有新版本了哟~",content:"新版本已经上线啦~，请您删除当前小程序，重新搜索打开哟~"})}))}),t.setStorageSync("source",4),t.getSystemInfo({success:function(e){t.setStorageSync("systemInfo",e)}})},onShow:function(){console.log("App Show")},onHide:function(){console.log("App Hide")}};e.default=a}).call(this,o("5486")["default"])},"557f":function(t,e,o){"use strict";var n=o("2646"),a=o.n(n);a.a},"713d":function(t,e,o){"use strict";o.r(e);var n=o("ddcb");for(var a in n)"default"!==a&&function(t){o.d(e,t,function(){return n[t]})}(a);o("557f");var r,u,c,p,l=o("f0c5"),d=Object(l["a"])(n["default"],r,u,!1,null,null,null,!1,c,p);e["default"]=d.exports},ddcb:function(t,e,o){"use strict";o.r(e);var n=o("4ca6"),a=o.n(n);for(var r in n)"default"!==r&&function(t){o.d(e,t,function(){return n[t]})}(r);e["default"]=a.a}},[["1a3c","common/runtime","common/vendor"]]]);