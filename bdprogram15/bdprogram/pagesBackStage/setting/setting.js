(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pagesBackStage/setting/setting"],{"10dc":function(t,a,e){"use strict";var i={bsfooter:()=>e.e("components/bsfooter/bsfooter").then(e.bind(null,"3084"))},s=function(){var t=this,a=t.$createElement;t._self._c},n=[];e.d(a,"b",function(){return s}),e.d(a,"c",function(){return n}),e.d(a,"a",function(){return i})},4197:function(t,a,e){"use strict";e.r(a);var i=e("97c8"),s=e.n(i);for(var n in i)"default"!==n&&function(t){e.d(a,t,function(){return i[t]})}(n);a["default"]=s.a},"42c9":function(t,a,e){},"830b":function(t,a,e){"use strict";var i=e("42c9"),s=e.n(i);s.a},"97c8":function(t,a,e){"use strict";(function(t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;e("88e4");var i={data:function(){return{$imgurl:this.$imgurl,ismsg:!1,receiving:0,support_time:0,byou:0,isself:!1,isComment:!1,isCommentSh:!1,arrForm:[],index:0,formlist:"",formid:0,formtitle:"",show:1,showStore:0,store_all:[],store_item:[]}},onLoad:function(){var a=this,e=t.getStorageSync("manager_rule");if(-1==e.indexOf(4))return t.showModal({title:"提示",content:"您暂无权限管理该栏目！",showCancel:!1,success:function(a){a.confirm&&t.navigateBack({delta:1})}}),!1;a.getSetting()},onPullDownRefresh:function(){this.getSetting(),t.stopPullDownRefresh()},methods:{getSetting:function(){var a=this;t.request({url:this.$host+"/api/Managewxapp/set",data:{uniacid:this.$uniacid},success:function(t){var e=t.data.data.sms;1==e?a.ismsg=!0:2==e&&(a.ismsg=!1),a.receiving=t.data.data.receiving,a.support_time=t.data.data.support_time,a.byou=t.data.data.byou,a.isself=t.data.data.take_self,a.isComment=t.data.data.pinlun,a.isCommentSh=t.data.data.pinlunShen;for(var i=[],s=0,n=0;n<t.data.data.formlist.length;n++)a.arrFormitem=t.data.data.formlist[n].formtitle,i.push(a.arrFormitem),a.arrFormitem==t.data.data.formtitle&&(a.index=s),s++;a.arrForm=i,a.formlist=t.data.data.formlist,a.formid=t.data.data.formset,a.formtitle=t.data.data.formtitle,a.store_all=t.data.data.stores_arr,a.store_item=t.data.data.stores,""==a.store_item&&(a.store_item=[])}})},changeMsg:function(){var a=this;0==a.ismsg?t.request({url:this.$host+"/api/Managewxapp/setMake",data:{uniacid:this.$uniacid,type:1},success:function(e){var i=e.data.data.err;1==i?t.showModal({title:"提示",content:e.data.data.errmsg,showCancel:!1,success:function(){a.ismsg=!1,a.getSetting()}}):a.ismsg=!0}}):a.ismsg=!1},getAutoDay:function(t){var a=this;a.receiving=t.detail.value,a.getSetting4()},getSetting4:function(){var a=this;t.request({url:this.$host+"/api/Managewxapp/setMake",data:{uniacid:this.$uniacid,type:4,receiving:a.receiving},success:function(a){var e=a.data.data.err;1==e&&t.showModal({title:"提示",content:a.data.data.errmsg,showCancel:!1,success:function(){}})}})},getSaleDay:function(t){var a=this;a.support_time=t.detail.value,a.getSetting5()},getSetting5:function(){var a=this;t.request({url:this.$host+"/api/Managewxapp/setMake",data:{uniacid:this.$uniacid,type:5,support_time:a.support_time},success:function(a){if(a.data.data)var e=a.data.data.err;1==e&&t.showModal({title:"提示",content:a.data.data.errmsg,showCancel:!1,success:function(){}})}})},getFreeShipping:function(t){var a=this;a.byou=t.detail.value,a.getSetting6()},getSetting6:function(){var a=this;t.request({url:this.$host+"/api/Managewxapp/setMake",data:{uniacid:this.$uniacid,type:6,byou:a.byou},success:function(a){if(a.data.data)var e=a.data.data.err;1==e&&t.showModal({title:"提示",content:a.data.data.errmsg,showCancel:!1,success:function(){}})}})},chooseForm:function(t){var a=this;a.show=0,a.index=t.target.value,console.log(a.index),a.formid=a.formlist[a.index].id,a.getSetting7()},getSetting7:function(){var a=this;t.request({url:this.$host+"/api/Managewxapp/setMake",data:{uniacid:this.$uniacid,type:7,formset:a.formid},success:function(a){if(a.data.data)var e=a.data.data.err;1==e&&t.showModal({title:"提示",content:a.data.data.errmsg,showCancel:!1,success:function(){}})}})},changeSelf:function(){var t=this;0==t.isself?t.isself=!0:t.isself=!1,t.getSetting8()},getSetting8:function(){var a=this;if(0==a.isself)var e=1;else e=2;t.request({url:this.$host+"/api/Managewxapp/setMake",data:{uniacid:this.$uniacid,type:8,take_self:e},success:function(a){if(a.data.data)var e=a.data.data.err;1==e&&t.showModal({title:"提示",content:a.data.data.errmsg,showCancel:!1,success:function(){}})}})},chooseStores:function(){var t=this;t.showStore=1,t.changeCate()},closeStoreBox:function(){var t=this;t.showStore=0},changeCate:function(){var t=this;console.log(t.store_item),console.log(t.store_all);for(var a=0;a<t.store_all.length;a++)t.store_item.indexOf(t.store_all[a].id)>=0?t.store_all[a].choose=!0:t.store_all[a].choose=!1,console.log(t.store_item.indexOf(t.store_all[a].id))},storeChoose:function(t){var a=t.currentTarget.dataset.id,e=t.currentTarget.dataset.isch;if(e){var i=this.store_item.indexOf(a);this.store_item.splice(i,1)}else this.store_item.push(a);this.changeCate()},sureStore:function(){var a=this;t.request({url:this.$host+"/api/Managewxapp/setMake",data:{uniacid:this.$uniacid,type:9,stores:a.store_item},success:function(e){if(e.data.data)var i=e.data.data.err;0==i?(a.showStore=0,a.getSetting()):1==i&&t.showModal({title:"提示",content:e.data.data.errmsg,showCancel:!1,success:function(){}})}})},changeComment:function(){var t=this;0==t.isComment?t.isComment=!0:t.isComment=!1,t.getSetting10()},getSetting10:function(){var a=this;if(0==a.isComment)var e=2;else e=1;t.request({url:this.$host+"/api/Managewxapp/setMake",data:{uniacid:this.$uniacid,type:10,pinlun:e},success:function(a){if(a.data.data)var e=a.data.data.err;1==e&&t.showModal({title:"提示",content:a.data.data.errmsg,showCancel:!1,success:function(){}})}})},changeCommentSh:function(){var t=this;0==t.isCommentSh?t.isCommentSh=!0:t.isCommentSh=!1,t.getSetting11()},getSetting11:function(){var a=this;if(0==a.isCommentSh)var e=2;else e=1;t.request({url:this.$host+"/api/Managewxapp/setMake",data:{uniacid:this.$uniacid,type:11,shenhe:e},success:function(a){if(a.data.data)var e=a.data.data.err;1==e&&t.showModal({title:"提示",content:a.data.data.errmsg,showCancel:!1,success:function(){}})}})}}};a.default=i}).call(this,e("5486")["default"])},defb:function(t,a,e){"use strict";(function(t){e("d28f");i(e("66fd"));var a=i(e("e73b"));function i(t){return t&&t.__esModule?t:{default:t}}t(a.default)}).call(this,e("5486")["createPage"])},e73b:function(t,a,e){"use strict";e.r(a);var i=e("10dc"),s=e("4197");for(var n in s)"default"!==n&&function(t){e.d(a,t,function(){return s[t]})}(n);e("830b");var o,r=e("f0c5"),c=Object(r["a"])(s["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],o);a["default"]=c.exports}},[["defb","common/runtime","common/vendor"]]]);