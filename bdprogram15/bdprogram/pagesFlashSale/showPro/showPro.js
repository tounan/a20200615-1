(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pagesFlashSale/showPro/showPro"],{1414:function(t,a,e){"use strict";var i={auth:()=>Promise.all([e.e("common/vendor"),e.e("components/auth/auth")]).then(e.bind(null,"a32a")),bindPhone:()=>Promise.all([e.e("common/vendor"),e.e("components/bindPhone/bindPhone")]).then(e.bind(null,"9bb9"))},o=function(){var t=this,a=t.$createElement;t._self._c},n=[];e.d(a,"b",function(){return o}),e.d(a,"c",function(){return n}),e.d(a,"a",function(){return i})},"1c15":function(t,a,e){"use strict";var i=e("d321"),o=e.n(i);o.a},3761:function(t,a,e){"use strict";(function(t){e("d28f");i(e("66fd"));var a=i(e("d21d"));function i(t){return t&&t.__esModule?t:{default:t}}t(a.default)}).call(this,e("5486")["createPage"])},"91f3":function(t,a,e){"use strict";e.r(a);var i=e("cef7"),o=e.n(i);for(var n in i)"default"!==n&&function(t){e.d(a,t,function(){return i[t]})}(n);a["default"]=o.a},cef7:function(t,a,e){"use strict";(function(t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=o(e("37b1"));function o(t){return t&&t.__esModule?t:{default:t}}var n=e("88e4"),s={data:function(){return{$imgurl:this.$imgurl,baseinfo:"",gid:"",fxsid:"",userid:"",picList:[],infinite:"",start:"",sale_end_time:"",title:"",datas:{detail_evaluate:[]},my_num:"",xg_num:"",commSelf:"",sc:"",imgheights:[],clock_d:"",clock_h:"",clock_m:"",clock_s:"",sto_id:"",a:1,needAuth:!1,needBind:!1,clocktime:"",pic_video:"",isplay:!1,currentSwiper:0,minHeight:220,heighthave:0,autoplay:!0,shareimg:0,share:0,shareimg_url:"",system_w:0,system_h:0,img_w:0,img_h:0,dlength:0,fiexdBoxs:0,buy_person:[{avatar:""},{avatar:""},{avatar:""},{avatar:""},{avatar:""},{avatar:""}]}},onLoad:function(a){var e=this;a.id&&(this.gid=a.id),this._baseMin(this);var i=0;a.fxsid&&(i=a.fxsid,t.setStorageSync("fxsid",i)),this.fxsid=i,console.log("获取分销商"+this.fxsid);var o=t.getStorageSync("suid");a.userid&&(this.userid=a.userid),o?n.bdLogin(i,function(){e.getPro(),e._getSuperUserInfo(e)}):this.getPro();var s=t.getStorageSync("systemInfo");this.img_w=parseInt((.65*s.windowWidth).toFixed(0)),this.img_h=parseInt((1.875*this.img_w).toFixed(0)),this.system_w=parseInt(s.windowWidth),this.system_h=parseInt(s.windowHeight)},onPullDownRefresh:function(){this.getPro(),t.stopPullDownRefresh()},onShareAppMessage:function(){var a=this,e=t.getStorageSync("suid"),i=a.gid,o="";return o=1==a.baseinfo.fxs?"/pagesFlashSale/showPro/showPro?id="+i+"&userid="+e:"/pagesFlashSale/showPro/showPro?id="+i+"&userid="+e+"&fxsid="+e,{title:a.title,path:o,success:function(t){}}},methods:{navback:function(){t.navigateBack()},toTop:function(){t.pageScrollTo({scrollTop:0})},onPageScroll:function(t){t.scrollTop>200?this.fiexdBoxs=1:this.fiexdBoxs=0},tobuy_before:function(){var t=this;if(!this.getSuid())return!1;t.checkvip()},tobuy:function(){var a=this;console.log(6464646464);var e=a.vip_config;return 1==e?(t.showModal({title:"提醒",content:"该商品必须开通会员卡购买！",showCancel:!1,success:function(){t.navigateTo({url:"/pages/register/register?type=miaosha"})}}),!1):-1!=a.datas.pro_kc&&a.datas.pro_kc<1?(t.showModal({title:"提醒",content:"库存不足！",showCancel:!1,success:function(){}}),!1):void t.navigateTo({url:"/pagesFlashSale/order_dan/order_dan?id="+this.datas.id})},checkvip:function(){var a=this;t.getStorageSync("openid");t.request({url:a.$baseurl+"doPagecheckvip",data:{uniacid:a.$uniacid,kwd:"miaosha",suid:t.getStorageSync("suid"),id:a.gid,gz:1},success:function(e){return!0===e.data.data?(a.tobuy(),!1):!1===e.data.data?(a.needvip=!0,t.showModal({title:"进入失败",content:"使用本功能需先开通vip!",showCancel:!1,success:function(a){a.confirm&&t.redirectTo({url:"/pages/register/register"})}}),!1):void(e.data.data.needgrade>0?(a.needvip=!0,e.data.data.grade>0?e.data.data.grade<e.data.data.needgrade?t.showModal({title:"进入失败",content:"使用本功能需成为"+e.data.data.vipname+"("+e.data.data.needgrade+")以上等级会员,请先升级!",showCancel:!1,success:function(a){a.confirm&&t.redirectTo({url:"/pages/open1/open1"})}}):a.tobuy():e.data.data.grade<e.data.data.needgrade?t.showModal({title:"进入失败",content:"使用本功能需成为"+e.data.data.vipname+"("+e.data.data.needgrade+")以上等级会员,请先开通会员后再升级会员等级!",showCancel:!1,success:function(a){a.confirm&&t.redirectTo({url:"/pages/register/register"})}}):a.tobuy()):a.tobuy())},fail:function(t){}})},goevaluate:function(){var a=this,e=a.gid;t.navigateTo({url:"/pagesOther/evaluate_list/evaluate_list?id="+e+"&protype=miaosha"})},getPro:function(a){var e=this,o=t.getStorageSync("suid");t.request({url:e.$baseurl+"doPageshowPro11",data:{types:"flashsale",id:e.gid,suid:o,uniacid:e.$uniacid,source:t.getStorageSync("source")},success:function(a){1==a.data.data.is_saletwo&&t.showModal({title:"提示",content:"该商品已下架",showCancel:!1,success:function(){t.redirectTo({url:"/pages/index/index"})}}),0==a.data.data.is_flag&&t.showModal({title:"提示",content:"该商品已不存在,请选择其他商品",showCancel:!1,success:function(){return t.navigateBack({delta:1}),!1}}),0==a.data.data.timetobegin&&"0"==a.data.data.sale_end_time_copy?e.infinite=!0:0==a.data.data.timetobegin&&0==a.data.data.sale_end_time?e.start=2:a.data.data.timetobegin>0?(e.start=0,e.daojishi(1e3*a.data.data.sale_time)):0==a.data.data.timetobegin&&a.data.data.sale_end_time>0&&(e.start=1,e.daojishi(1e3*a.data.data.sale_end_time_copy)),a.data.data.product_txt&&(a.data.data.product_txt=a.data.data.product_txt.replace(/\<img/gi,'<img style="width:100%;height:auto;display:block" '),a.data.data.product_txt=(0,i.default)(a.data.data.product_txt)),a.data.data.con2&&(a.data.data.con2=a.data.data.con2.replace(/\<img/gi,'<img style="width:100%;height:auto;display:block" '),a.data.data.con2=(0,i.default)(a.data.data.con2)),a.data.data.con3&&(a.data.data.con3=a.data.data.con3.replace(/\<img/gi,'<img style="width:100%;height:auto;display:block" '),a.data.data.con3=(0,i.default)(a.data.data.con3)),e.sale_end_time=a.data.data.sale_end_time_copy,e.picList=a.data.data.text,e.dlength=e.picList.length,e.title=a.data.data.title,e.datas=a.data.data,e.my_num=a.data.data.my_num,e.xg_num=a.data.data.pro_xz,e.sc=a.data.data.collectcount,e.commSelf=a.data.data.comment,e.vip_config=a.data.data.vip_config,e.pic_video=a.data.data.video,e.buy_person=a.data.data.detail_buyuser,t.setStorageSync("isShowLoading",!1),t.hideNavigationBarLoading(),t.stopPullDownRefresh()}}),e._givepscore(e,e.gid,"showPro",e.userid,o)},daojishi:function(t){var a,e,i,o,n=this,s=new Date,d=s.getTime(),r=t,c=r-d;if(c>=0&&(a=Math.floor(c/1e3/60/60/24),e=Math.floor(c/1e3/60/60%24)<10?"0"+Math.floor(c/1e3/60/60%24):Math.floor(c/1e3/60/60%24),i=Math.floor(c/1e3/60%60)<10?"0"+Math.floor(c/1e3/60%60):Math.floor(c/1e3/60%60),o=Math.floor(c/1e3%60)<10?"0"+Math.floor(c/1e3%60):Math.floor(c/1e3%60)),a>0){if(a>9)var u=a;else u="0"+a;var h=e,l=i,g=o}else u="00",h=e,l=i,g=o;n.clock_d=u,n.clock_h=h,n.clock_m=l,n.clock_s=g;setTimeout(function(){n.daojishi(t)},1e3)},countDown:function(t,a){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,i=this;"object"!=typeof a&&(a=[a]);setTimeout(function(){for(var o=0;o<a.length;o++)a[o]-=1e3;i.countDown(t,a,e)},1e3)},imageLoad:function(t){var a=t.detail.width,e=t.detail.height,i=a/e,o=750/i,n=(e=o,this.imgheights);n[t.currentTarget.dataset.id]=e,this.imgheights=n,console.log(this.imgheights)},output:function(t){var a;if(this.sto_id=t.sto_id,a=t.day>0?t.day+"天"+t.hour+"小时"+t.min+"分钟"+t.sec+"秒":t.hour+"小时"+t.min+"分钟"+t.sec+"秒",0==t.day&&0==t.hour&&0==t.min&&0==t.sec)if(0==this.start){this.start=1;var e=(new Date).getTime();that.countDown(this.output,1e3*this.sale_end_time-e)}else 1==this.start&&(this.start=2);else this.clock=a},change:function(t){var a=t.currentTarget.dataset.id;this.a=a},makePhoneCall:function(a){var e=this.baseinfo.tel;t.makePhoneCall({phoneNumber:e})},collect:function(a){if(!this.getSuid())return!1;var e=this,i=(a.currentTarget.dataset.name,t.getStorageSync("suid"));t.request({url:e.$baseurl+"doPageCollect",data:{suid:i,types:"flashsale",id:e.gid,uniacid:e.$uniacid},success:function(a){var i=a.data.data;e.sc="收藏成功"==i?1:0,t.showToast({title:i,icon:"succes",duration:1e3,mask:!0})}})},cell:function(){this.needAuth=!1},closeAuth:function(){this.needAuth=!1,this.needBind=!0},closeBind:function(){this.needBind=!1},getSuid:function(){var a=t.getStorageSync("suid");if(a)return!0;var e="";return e=t.getStorageSync("baidu_userinfo"),e?this.needBind=!0:this.needAuth=!0,!1},swiperLoad:function(a){var e=this;t.getSystemInfo({success:function(t){var i=a.detail.width,o=a.detail.height,n=i/o,s=t.windowWidth/n;e.heighthave||(e.minHeight=s,e.heighthave=1)}})},swiperChange:function(t){this.autoplay=!0,this.currentSwiper=t.detail.current,this.isplay=!1,this.autoplay=this.autoplay,this.endvideo()},playvideo:function(){var t=this;t.autoplay=!1,t.isplay=!0,t.autoplay=t.autoplay},endvideo:function(){var t=this;t.autoplay=!0,t.isplay=!1,t.autoplay=t.autoplay},open_share:function(){this.share=1},share_close:function(){this.share=0,this.shareimg=0},h5ShareAppMessage:function(){var a=this,e=t.getStorageSync("suid");t.showModal({title:"长按复制链接后分享",content:this.$host+"/h5/index.html?id="+this.$uniacid+"#/pagesFlashSale/showPro/showPro?id="+this.gid+"&fxsid="+e+"&userid="+e,showCancel:!1,success:function(t){a.share=0}})},getShareImg:function(){t.showToast({title:"暂不支持生成分享海报",icon:"none"})},closeShare:function(){this.shareimg=0},saveImg:function(){var a=this;t.getImageInfo({src:a.shareimg_url,success:function(e){t.saveImageToPhotosAlbum({filePath:e.path,success:function(){t.showToast({title:"保存成功！",icon:"none"}),a.shareimg=0,a.share=0}})}})},aliSaveImg:function(){var a=this;t.getImageInfo({src:a.shareimg_url,success:function(t){my.saveImage({url:t.path,showActionSheet:!0,success:function(){my.alert({title:"保存成功"}),a.shareimg=0,a.share=0}})}})}}};a.default=s}).call(this,e("5486")["default"])},d21d:function(t,a,e){"use strict";e.r(a);var i=e("1414"),o=e("91f3");for(var n in o)"default"!==n&&function(t){e.d(a,t,function(){return o[t]})}(n);e("1c15");var s,d=e("f0c5"),r=Object(d["a"])(o["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],s);a["default"]=r.exports},d321:function(t,a,e){}},[["3761","common/runtime","common/vendor"]]]);