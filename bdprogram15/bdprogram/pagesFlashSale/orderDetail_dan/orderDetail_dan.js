(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pagesFlashSale/orderDetail_dan/orderDetail_dan"],{"0e54":function(t,a,e){"use strict";(function(t){function s(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=e("88e4"),o={data:function(){var t;return{$imgurl:this.$imgurl,baseinfo:"",tabbar:"",orderid:"",state:1,showmask:0,datas:(t={jsondata:[{baseinfo:[]}],yhInfo_yhq:[],yhInfo_score:[]},s(t,"yhInfo_yhq",[]),s(t,"yhInfo_mj",[]),s(t,"store_info",[]),t),orderFormDisable:!0,isChange:"",formchangeBtn:2,kuaidi:["选择快递","圆通","中通","申通","顺丰","韵达","天天","EMS","百世","本人到店","其他"],index:"",showhx:0,hxmm:"",hxmm_list:[{val:"",fs:!0},{val:"",fs:!1},{val:"",fs:!1},{val:"",fs:!1},{val:"",fs:!1},{val:"",fs:!1}],hx_choose:0,hx_ewm:"",showPay:0,choosepayf:0,mymoney:0,mymoney_pay:1,is_submit:1,order_id:0,h5_wxpay:0,h5_alipay:0,pay_type:1,pay_money:0,paytype:""}},onLoad:function(t){var a=this;this._baseMin(this),this.orderid=t.orderid;var e=0;t.fxsid&&(e=t.fxsid),this.fxsid=e,i.bdLogin(e,function(){a.getOrder()})},methods:{makePhoneCallC:function(a){t.makePhoneCall({phoneNumber:a.currentTarget.dataset.tel})},getOrder:function(){var a=this,e=a.orderid;t.request({url:a.$baseurl+"doPagegetOrderDetail",data:{uniacid:a.$uniacid,order_id:e,suid:t.getStorageSync("suid")},success:function(t){a.datas=t.data.data.detail;var e=t.data.data.detail.paytype;null==e?a.paytype="余额支付":1==e?a.paytype="微信支付":2==e?a.paytype="支付宝支付":3==e?a.paytype="百度支付":4==e&&(a.paytype="QQ支付"),a.mymoney=t.data.data.mymoney}})},makephonecall:function(){var a=this;a.datas.seller_tel&&t.makePhoneCall({phoneNumber:a.datas.seller_tel})},copy:function(a){var e=a.currentTarget.dataset.id;t.setClipboardData({data:e,success:function(a){t.showToast({title:"复制成功"})}})},hxshow:function(){this.showhx=1},hxhide:function(){this.showhx=0,this.hxmm=""},hxmmInput:function(t){for(var a=t.target.value.length,e=0;e<this.hxmm_list.length;e++)this.hxmm_list[e].fs=!1,this.hxmm_list[e].val=t.target.value[e];a&&(this.hxmm_list[a-1].fs=!0),this.hxmm=t.target.value},hxmmpass:function(){var a=this,e=a.hxmm,s=a.datas;e?t.request({url:a.$baseurl+"hxmm",data:{hxmm:e,order_id:s.order_id,uniacid:a.$uniacid,is_more:0,suid:t.getStorageSync("suid")},success:function(e){var s=e.data.data;if(0==s){t.showModal({title:"提示",content:"核销密码不正确！",showCancel:!1}),a.hxmm="";for(var i=0;i<a.hxmm_list.length;i++)a.hxmm_list[i].fs=!1,a.hxmm_list[i].val=""}else t.showToast({title:"消费成功",icon:"success",duration:2e3,success:function(t){a.showhx=0,a.hxmm="";var e=a.order;a.getOrder(e)}})}}):t.showModal({title:"提示",content:"请输入核销密码！",showCancel:!1})},tuikuan:function(a){var e=this,s=a.detail.formId,i=a.currentTarget.dataset.order;t.showModal({title:"提醒",content:"确定要退款吗？",success:function(a){a.confirm&&t.request({url:e.$baseurl+"doPagemiaoshatk",data:{uniacid:e.$uniacid,formId:s,order_id:i},success:function(a){0==a.data.data.flag?t.showModal({title:"提示",content:a.data.data.message,showCancel:!1,success:function(a){t.redirectTo({url:"/pagesFlashSale/orderDetail_dan/orderDetail_dan?orderid="+i})}}):t.showModal({title:"很抱歉",content:a.data.data.message,confirmText:"联系客服",success:function(e){e.confirm&&t.makePhoneCall({phoneNumber:a.data.data.mobile})}})}})}})},gethxmima:function(){this.hx_choose=1},gethxImg:function(){var a=this;t.request({url:this.$baseurl+"doPageHxEwm",data:{uniacid:this.$uniacid,suid:t.getStorageSync("suid"),pageUrl:"showPro",orderid:this.orderid},success:function(t){a.hx_ewm=t.data.data,a.hx_choose=2}})},hxhide1:function(){this.hx_choose=0,this.hxmm="";for(var t=0;t<this.hxmm_list.length;t++)this.hxmm_list[t].fs=!1,this.hxmm_list[t].val=""},paybox:function(t){this.orderinfo;var a=this.datas.order_id;this.order_id=a;var e=this.datas.true_price;this.pay_money=e;var s=this.mymoney;e>s&&(this.mymoney_pay=2,this.pay_type=2,this.choosepayf=4),0==this.showPay&&(this.showPay=1)},payboxclose:function(){1==this.showPay&&(this.showPay=0)},choosepay:function(t){this.pay_type=t.currentTarget.dataset.pay_type,this.choosepayf=t.currentTarget.dataset.type},pay:function(t){var a=this.is_submit;if(2==a)return!1;this.is_submit=2;this.$uniacid,this.suid,this.source;var e=this.pay_type,s=this.pay_money,i=this.order_id;t.detail.formId;1==e?this.pay1(i):this._baidupay(this,s,"miaosha",i,"/pagesFlashSale/orderlist_dan/orderlist_dan?type=9")},pay1:function(a){var e=this;t.showModal({title:"请注意",content:"您将使用余额支付"+e.pay_money+"元",success:function(s){s.confirm?(e.payover_do(a),t.showLoading({title:"下单中...",mask:!0})):t.redirectTo({url:"/pagesFlashSale/orderlist_dan/orderlist_dan"})}})},payover_do:function(a){var e=this,s=e.pay_money,i=(e.mymoney,t.getStorageSync("suid")),o=t.getStorageSync("openid");t.request({url:e.$baseurl+"doPagepaynotify",data:{out_trade_no:a,suid:i,payprice:s,types:"miaosha",flag:0,formId:e.formId,uniacid:e.$uniacid,openid:o,source:t.getStorageSync("source")},success:function(a){"失败"==a.data.data.message?t.showToast({title:"付款失败, 请刷新后重新付款！",icon:"none",mask:!0,success:function(){t.navigateTo({url:"/pagesFlashSale/orderlist_dan/orderlist_dan?type=9"}),t.hideLoading()}}):t.showToast({title:"购买成功！",icon:"success",mask:!0,success:function(){t.navigateTo({url:"/pagesFlashSale/orderlist_dan/orderlist_dan?type=9"}),t.hideLoading()}})}})}}};a.default=o}).call(this,e("5486")["default"])},"0faf":function(t,a,e){"use strict";var s=e("6f13"),i=e.n(s);i.a},5556:function(t,a,e){"use strict";var s,i=function(){var t=this,a=t.$createElement;t._self._c},o=[];e.d(a,"b",function(){return i}),e.d(a,"c",function(){return o}),e.d(a,"a",function(){return s})},"6f13":function(t,a,e){},"7e30":function(t,a,e){"use strict";e.r(a);var s=e("5556"),i=e("d9a7");for(var o in i)"default"!==o&&function(t){e.d(a,t,function(){return i[t]})}(o);e("0faf");var n,r=e("f0c5"),d=Object(r["a"])(i["default"],s["b"],s["c"],!1,null,null,null,!1,s["a"],n);a["default"]=d.exports},d90d:function(t,a,e){"use strict";(function(t){e("d28f");s(e("66fd"));var a=s(e("7e30"));function s(t){return t&&t.__esModule?t:{default:t}}t(a.default)}).call(this,e("5486")["createPage"])},d9a7:function(t,a,e){"use strict";e.r(a);var s=e("0e54"),i=e.n(s);for(var o in s)"default"!==o&&function(t){e.d(a,t,function(){return s[t]})}(o);a["default"]=i.a}},[["d90d","common/runtime","common/vendor"]]]);