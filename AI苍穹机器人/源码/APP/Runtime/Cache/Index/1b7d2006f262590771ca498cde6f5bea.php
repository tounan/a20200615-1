<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<!-- saved from url=(0050)https://robot.paif.shop/m/accountbankmodify?type=2 -->
<html class="pixel-ratio-3 retina android android-5 android-5-0 watch-active-state"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, minimal-ui">
	<meta name="apple-mobile-web-app-capable" content="yes">
	<meta name="apple-mobile-web-app-status-bar-style" content="black">
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">

	<title>资料编辑</title>

	<link rel="stylesheet" href="/Public/dianyun/css/framework7.ios.min.css">
	<link rel="stylesheet" href="/Public/dianyun/css/app.css">
	<link rel="stylesheet" href="/Public/dianyun/css/iconfont.css">
	<script src="/public/js/jquery-1.8.3.min.js"></script>
	<script src="/public/js/layer/layer.js"></script>

</head>
<body onload="onload()" class="framework7-root">
<div class="panel-overlay"></div>
<div class="panel panel-left panel-reveal layout-dark">
</div>

<div class="views">
	<div class="view view-main" data-page="bankmodify">
		<div class="pages">
			<link href="/Public/dianyun/css/webuploader.css" rel="stylesheet" type="text/css">
			<style type="text/css">
				.webuploader-pick {background-color: transparent;}
			</style>

			<div data-page="bankmodify" class="page navbar-fixed" isinited="true">
				<div class="navbar theme-white">
					<div class="navbar-inner">
						<div class="left">
							<a href="javascript:history.go(-1);" class="external link"> <i class="icon iconfont icon-angleleft" style="transform: translate3d(0px, 0px, 0px);"></i>返回</a>
						</div>
						<div class="center" data-i18n="member.myinfo" style="left: -24px;">资料修改</div>
						<div class="right"></div>
					</div>
				</div>

				<div class="page-content defaultbg">
					<form action="" method="POST" style="font-size:14px"  id="myform1">

						<div class="list-block">
							<ul>
								<li>
									<div class="item-content">
										<div class="item-inner">
											<div class="item-title label"><span>真实姓名</span>*</div>
											<div class="item-input">
												<input id="truename" name="truename" type="text" maxlength="10" value="<?php echo ($name); ?>">
											</div>
										</div>
									</div>
								</li>

								<?php if($list["name"] ): ?><li>
									<div class="item-content">
										<div class="item-inner">
											<div class="item-title label"><span>银行名称</span>*</div>
											<div class="item-input">
												<input id="name" name="name" type="text" value="<?php echo ($list["name"]); ?>">
											</div>
										</div>
									</div>
								</li>
								<?php else: ?>
								<li>
									<div class="item-content">
										<div class="item-inner">
											<div class="item-title label">银行名称</div>
											<div class="item-input">
												<select id="name" name="name" maxlength="50">
													<option value="" selected="selected">请选择</option>
													<option value="中国工商银行">中国工商银行</option>
													<option value="中国农业银行">中国农业银行</option>
													<option value="中国银行">中国银行</option>
													<option value="中国建设银行">中国建设银行</option>
													<option value="广州市农村信用社">广州市农村信用社</option>
													<option value="南海市农村信用社">南海市农村信用社</option>
													<option value="武汉农商银行">武汉农商银行</option>
													<option value="东莞农商银行">东莞农商银行</option>
													<option value="国家开发银行">国家开发银行</option>
													<option value="中国进出口银行">中国进出口银行</option>
													<option value="中国农业发展银行">中国农业发展银行</option>
													<option value="交通银行">交通银行</option>
													<option value="中信银行">中信银行</option>
													<option value="中国光大银行">中国光大银行</option>
													<option value="华夏银行">华夏银行</option>
													<option value="中国民生银行">中国民生银行</option>
													<option value="广东发展银行">广东发展银行</option>
													<option value="深圳发展银行">深圳发展银行</option>
													<option value="招商银行">招商银行</option>
													<option value="兴业银行">兴业银行</option>
													<option value="上海浦东发展银行">上海浦东发展银行</option>
													<option value="城市商业银行">城市商业银行</option>
													<option value="晋商银行">晋商银行</option>
													<option value="盛京银行">盛京银行</option>
													<option value="江苏银行">江苏银行</option>
													<option value="江苏银行">江苏银行</option>
													<option value="杭州银行">杭州银行</option>
													<option value="浙江泰隆商业银行">浙江泰隆商业银行</option>
													<option value="齐鲁银行">齐鲁银行</option>
													<option value="齐商银行">齐商银行</option>
													<option value="潍坊银行">潍坊银行</option>
													<option value="德州银行">德州银行</option>
													<option value="汉口银行">汉口银行</option>
													<option value="黄石银行">黄石银行</option>
													<option value="广西北部湾银行">广西北部湾银行</option>
													<option value="遂宁银行">遂宁银行</option>
													<option value="南充银行">南充银行</option>
													<option value="农村商业银行(江苏)">农村商业银行(江苏)</option>
													<option value="江苏锡州农村商业银行">江苏锡州农村商业银行</option>
													<option value="江苏江南农村商业银行">江苏江南农村商业银行</option>
													<option value="江苏常熟农村商业银行">江苏常熟农村商业银行</option>
													<option value="恒丰银行">恒丰银行</option>
													<option value="浙商银行">浙商银行</option>
													<option value="农村合作银行">农村合作银行</option>
													<option value="渤海银行">渤海银行</option>
													<option value="徽商银行">徽商银行</option>
													<option value="镇银行有限责任公司">镇银行有限责任公司</option>
													<option value="城市信用社">城市信用社</option>
													<option value="上海银行">上海银行</option>
													<option value="农村信用社(含北京农村商业银行)">农村信用社(含北京农村商业银行)</option>
													<option value="北京农商行">北京农商行</option>
													<option value="尧都农信社">尧都农信社</option>
													<option value="南京市区农村信用社">南京市区农村信用社</option>
													<option value="杭州联合银行">杭州联合银行</option>
													<option value="宁波市农村合作信用联社">宁波市农村合作信用联社</option>
													<option value="合肥科技农村商业银行">合肥科技农村商业银行</option>
													<option value="芜湖扬子农村商业银行">芜湖扬子农村商业银行</option>
													<option value="江西农信社">江西农信社</option>
													<option value="南昌洪都农村商业银行营业部">南昌洪都农村商业银行营业部</option>
													<option value="烟台市芝罘区农村信用社">烟台市芝罘区农村信用社</option>
													<option value="菏泽市牡丹区城区农村信用社">菏泽市牡丹区城区农村信用社</option>
													<option value="武汉农村商业银行">武汉农村商业银行</option>
													<option value="深圳农村商业银行">深圳农村商业银行</option>
													<option value="顺德农村商业银行">顺德农村商业银行</option>
													<option value="佛山市禅城区农村信用社">佛山市禅城区农村信用社</option>
													<option value="重庆农商行">重庆农商行</option>
													<option value="中国邮政储蓄银行">中国邮政储蓄银行</option>
													<option value="北京银行">北京银行</option>
													<option value="广东邮政储蓄银行">广东邮政储蓄银行</option>
													<option value="福州银行">福州银行</option>
													<option value="宁波银行">宁波银行</option>
													<option value="深圳平安银行">深圳平安银行</option>
													<option value="温州银行">温州银行</option>
													<option value="广州银行">广州银行</option>
													<option value="大连银行">大连银行</option>
													<option value="南京银行">南京银行</option>
													<option value="东莞银行">东莞银行</option>
													<option value="成都银行">成都银行</option>
													<option value="哈尔滨银行">哈尔滨银行</option>
													<option value="西安银行">西安银行</option>
													<option value="南昌银行">南昌银行</option>
													<option value="青岛银行">青岛银行</option>
													<option value="日照银行">日照银行</option>
													<option value="长沙银行">长沙银行</option>
													<option value="泉州银行">泉州银行</option>
													<option value="营口银行">营口银行</option>
													<option value="威海商业银行">威海商业银行</option>
													<option value="汇丰银行">汇丰银行</option>
													<option value="东亚银行">东亚银行</option>
													<option value="南洋商业银行">南洋商业银行</option>
													<option value="恒生银行(中国)有限公司">恒生银行(中国)有限公司</option>
													<option value="中国银行(香港)有限公司">中国银行(香港)有限公司</option>
													<option value="集友银行有限公司">集友银行有限公司</option>
													<option value="创兴银行有限公司">创兴银行有限公司</option>
													<option value="星展银行(中国)有限公司">星展银行(中国)有限公司</option>
													<option value="永亨银行(中国)有限公司">永亨银行(中国)有限公司</option>
													<option value="永隆银行">永隆银行</option>
													<option value="花旗银行(中国)有限公司">花旗银行(中国)有限公司</option>
													<option value="美国银行有限公司">美国银行有限公司</option>
													<option value="摩根大通银行(中国)有限公司">摩根大通银行(中国)有限公司</option>
													<option value="三菱东京日联银行(中国)有限公司">三菱东京日联银行(中国)有限公司</option>
													<option value="日本三井住友银行股份有限公司">日本三井住友银行股份有限公司</option>
													<option value="瑞穗实业银行(中国)有限公司">瑞穗实业银行(中国)有限公司</option>
													<option value="日本山口银行股份有限公司">日本山口银行股份有限公司</option>
													<option value="韩国外换银行股份有限公司">韩国外换银行股份有限公司</option>
													<option value="友利银行(中国)有限公司">友利银行(中国)有限公司</option>
													<option value="韩国产业银行">韩国产业银行</option>
													<option value="新韩银行(中国)有限公司">新韩银行(中国)有限公司</option>
													<option value="韩国中小企业银行有限公司">韩国中小企业银行有限公司</option>
													<option value="韩亚银行(中国)有限公司">韩亚银行(中国)有限公司</option>
													<option value="华侨银行(中国)有限公司">华侨银行(中国)有限公司</option>
													<option value="大华银行(中国)有限公司">大华银行(中国)有限公司</option>
													<option value="星展银行(中国)有限公司">星展银行(中国)有限公司</option>
													<option value="泰国盘谷银行(大众有限公司)">泰国盘谷银行(大众有限公司)</option>
													<option value="奥地利中央合作银行股份有限公司">奥地利中央合作银行股份有限公司</option>
													<option value="比利时联合银行股份有限公司">比利时联合银行股份有限公司</option>
													<option value="比利时富通银行有限公司">比利时富通银行有限公司</option>
													<option value="荷兰银行">荷兰银行</option>
													<option value="荷兰安智银行股份有限公司">荷兰安智银行股份有限公司</option>
													<option value="渣打银行">渣打银行</option>
													<option value="英国苏格兰皇家银行公众有限公司">英国苏格兰皇家银行公众有限公司</option>
													<option value="法国兴业银行(中国)有限公司">法国兴业银行(中国)有限公司</option>
													<option value="法国东方汇理银行股份有限公司">法国东方汇理银行股份有限公司</option>
													<option value="法国外贸银行股份有限公司">法国外贸银行股份有限公司</option>
													<option value="德国德累斯登银行股份公司">德国德累斯登银行股份公司</option>
													<option value="德意志银行(中国)有限公司">德意志银行(中国)有限公司</option>
													<option value="德国商业银行股份有限公司">德国商业银行股份有限公司</option>
													<option value="德国西德银行股份有限公司">德国西德银行股份有限公司</option>
													<option value="德国巴伐利亚州银行">德国巴伐利亚州银行</option>
													<option value="德国北德意志州银行">德国北德意志州银行</option>
													<option value="意大利联合圣保罗银行股份有限公司">意大利联合圣保罗银行股份有限公司</option>
													<option value="瑞士信贷银行股份有限公司">瑞士信贷银行股份有限公司</option>
													<option value="瑞士银行">瑞士银行</option>
													<option value="加拿大丰业银行有限公司">加拿大丰业银行有限公司</option>
													<option value="加拿大蒙特利尔银行有限公司">加拿大蒙特利尔银行有限公司</option>
													<option value="澳大利亚和新西兰银行集团有限公司">澳大利亚和新西兰银行集团有限公司</option>
													<option value="摩根士丹利国际银行(中国)有限公司">摩根士丹利国际银行(中国)有限公司</option>
													<option value="联合银行(中国)有限公司">联合银行(中国)有限公司</option>
													<option value="荷兰合作银行有限公司">荷兰合作银行有限公司</option>
													<option value="厦门国际银行">厦门国际银行</option>
													<option value="法国巴黎银行(中国)有限公司">法国巴黎银行(中国)有限公司</option>
													<option value="华商银行">华商银行</option>
													<option value="华一银行">华一银行</option>
													<option value="(澳门地区)银行">(澳门地区)银行</option>
													<option value="(香港地区)银行">(香港地区)银行</option>
												</select>
											</div>
										</div>
									</div>
								</li><?php endif; ?>

								<li>
									<div class="item-content">
										<div class="item-inner">
											<div class="item-title label">开户支行</div>
											<div class="item-input">
												<input id="kaihuhang" name="kaihuhang" type="text" maxlength="50" value="<?php echo ($list["kaihuhang"]); ?>">
											</div>
										</div>
									</div>
								</li>
								<li>
									<div class="item-content">
										<div class="item-inner">
											<div class="item-title label">银行帐号</div>
											<div class="item-input">
												<input id="card" name="card" type="text" maxlength="20" value="<?php echo ($list["card"]); ?>">
											</div>
										</div>
									</div>
								</li>

							</ul>
						</div>
						<div class="center" style="padding: 30px 15px 15px 15px;">

							<a href="javascript:bank_modify_commit()" class="r_but" idtype="myform1">
								<img src="/Public/dianyun/img/button-editbank.png" style="height:55px; width:auto; max-width: 100%;">
							</a>

						</div>
					</form>


				</div>
			</div>


		</div>
	</div>
</div>

<script type="text/javascript">
    $(".r_but").click(function(){
        var idtype=$(this).attr("idtype");
        $.ajax({
            url:'<?php echo U("Index/index/addcardpost");?>',
            type:'POST',
            data:$("#"+idtype).serialize(),
            dataType:'json',
            success:function(json){
                layer.msg(json.info);
                if(json.result ==1){
                    window.location.href=json.url;
                }


            },
            error:function(){

                layer.msg("网络故障");
            }



        })

    })


</script>
</body></html>