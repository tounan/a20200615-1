(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/open1/open1"],{"0e8e":function(e,t,a){"use strict";a.r(t);var n=a("4ad5"),i=a.n(n);for(var s in n)"default"!==s&&function(e){a.d(t,e,function(){return n[e]})}(s);t["default"]=i.a},"1ff4":function(e,t,a){},"4ad5":function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a("88e4"),i={data:function(){return{$imgurl:this.$imgurl,state:0,currentTab:0,processData:[],grade:0,vipid:"",baseinfo:[],needAuth:!1,needBind:!1,pay_type:1,show_pay_type:0,alipay:1,wxpay:1,zf_money:0,is_ios:0,ids:"",vids:""}},onPullDownRefresh:function(){this.getvipgrade(),e.stopPullDownRefresh()},onLoad:function(t){var a=this;e.setNavigationBarTitle({title:"会员权益"});var i=0;t.fxsid&&(this.fxsid=t.fxsid),this._baseMin(this),n.bdLogin(i,function(){a.getvipgrade()});var s=e.getStorageSync("systemInfo")["system"];s.indexOf("iOS")>=0&&(this.is_ios=1)},methods:{swichNav:function(e){var t=this;if(this.currentTab===e.currentTarget.dataset.current)return!1;console.log(e),t.currentTab=e.currentTarget.dataset.current},swiperChange:function(e){this.currentTab=e.detail.current},getvipgrade:function(){var t=this,a=e.getStorageSync("openid");e.request({url:t.$baseurl+"doPagegetvipgrade",data:{uniacid:t.$uniacid,openid:a,suid:e.getStorageSync("suid")},success:function(e){for(var a=e.data.data.vip,n=e.data.data.userinfo["grade"],i=0,s=0;s<a.length;s++)n==a[s]["grade"]&&(i=s,t.ids=i);t.currentTab=i,t.processData=a,t.vids="v"+t.ids,t.grade=n,t.vipid=e.data.data.userinfo["vipid"],t.usermoney=e.data.data.userinfo["money"]?e.data.data.userinfo["money"]:0}})},open_grade:function(t){var a=this,n=this.baseinfo.ios,i=this.is_ios;if(1==i&&0==n)e.showModal({title:"提示",content:"iOS系统不支持虚拟支付",showCancel:!1,success:function(t){e.redirectTo({url:"/pages/index/index"})}});else{var s=t.currentTarget.dataset.grade,o=t.currentTarget.dataset.price,r=a.usermoney,u=0,c=0;r>=o?u=o:(u=r,c=o-r),e.request({url:a.$baseurl+"doPagecreateorder",data:{uniacid:a.$uniacid,suid:e.getStorageSync("suid"),source:e.getStorageSync("source"),ordermoeny:o,yuemoney:u,money:c,open_grade:s,types:"vipgrade"},header:{"content-type":"application/json"},success:function(t){var n=t.data.data;n>0?0==c?e.showModal({title:"请注意",content:"您将使用余额支付"+u+"元",success:function(t){t.confirm&&(a.payover_do(n),e.showLoading({title:"下单中...",mask:!0}))}}):a._baidupay(a,c,"vipgrade",n,"/pages/usercenter/usercenter"):e.showModal({title:"提示",content:"生成订单失败",showCancel:!1})}})}},showpay:function(){var t=this;e.request({url:this.$baseurl+"doPageGetH5payshow",data:{uniacid:this.$uniacid,suid:e.getStorageSync("suid")},success:function(a){0==a.data.data.ali&&0==a.data.data.wx?e.showModal({title:"提示",content:"请联系管理员设置支付参数",success:function(t){e.redirectTo({url:"/pages/index/index"})}}):(0==a.data.data.ali?(t.alipay=0,t.pay_type=2):(t.alipay=1,t.pay_type=1),0==a.data.data.wx?t.wxpay=0:t.wxpay=1,t.show_pay_type=1)}})},changealipay:function(){this.pay_type=1},changewxpay:function(){this.pay_type=2},close_pay_type:function(){this.show_pay_type=0},h5topay:function(){var e=this.pay_type;1==e?this._alih5pay(this,this.zf_money,16,this.orderid):2==e&&this._wxh5pay(this,this.zf_money,"vipgrade",this.orderid),this.show_pay_type=0},payover_do:function(t,a){var n=this;e.request({url:n.$baseurl+"dopagepaynotify",data:{uniacid:n.$uniacid,out_trade_no:t,suid:e.getStorageSync("suid"),types:"vipgrade",open_grade:a},success:function(t){"失败"==t.data.data.message?e.showToast({title:"付款失败, 请刷新后重新付款！",icon:"none",mask:!0,success:function(){}}):e.showToast({title:"购买成功！",icon:"success",mask:!0,success:function(){n.getvipgrade()}})}})}}};t.default=i}).call(this,a("5486")["default"])},a933:function(e,t,a){"use strict";(function(e){a("d28f");n(a("66fd"));var t=n(a("faba"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,a("5486")["createPage"])},c259:function(e,t,a){"use strict";var n={copyright:()=>a.e("components/copyright/copyright").then(a.bind(null,"cb0f")),myfooter:()=>a.e("components/myfooter/myfooter").then(a.bind(null,"6bab"))},i=function(){var e=this,t=e.$createElement;e._self._c},s=[];a.d(t,"b",function(){return i}),a.d(t,"c",function(){return s}),a.d(t,"a",function(){return n})},eb2c:function(e,t,a){"use strict";var n=a("1ff4"),i=a.n(n);i.a},faba:function(e,t,a){"use strict";a.r(t);var n=a("c259"),i=a("0e8e");for(var s in i)"default"!==s&&function(e){a.d(t,e,function(){return i[e]})}(s);a("eb2c");var o,r=a("f0c5"),u=Object(r["a"])(i["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],o);t["default"]=u.exports}},[["a933","common/runtime","common/vendor"]]]);