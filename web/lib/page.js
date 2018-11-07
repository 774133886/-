
var host = 'http://132.232.61.218/admin';

//头部效果
$(function(){
	setTimeout(function(){
		// var left = $('.curHeader a.active').offset().left;
		// var hdLeft = $('.curHeader').offset().left;
		// $('.curHeader').prepend('<i></i>');
		// $('.curHeader i').css('left',left-hdLeft).show();
		// $('.curHeader a').hover(function(){
		// 	var l = $(this).offset().left;
		// 	var hdl = $('.curHeader').offset().left;
		// 	$('.curHeader i').css('left',l-hdl);
		// },function(){
		// 	var l = $('.curHeader a.active').offset().left;
		// 	var hdl = $('.curHeader').offset().left;
		// 	$('.curHeader i').css('left',l-hdl);
		// });
		
		//底部二维码
		// $.ajax({
		// 	type:"get",
		// 	url: host+"/api/l/getUs",
		// 	success: function(res){
		// 		res = JSON.parse(res);
		// 		if(res.success){
		// 			$('#footTel').text('TEL：+86 '+res.data.tel);
		// 			$('#footMail').text('TEL：+86 '+res.data.email);
		// 			$('.footCode img').attr('src',res.data.wx_qr);
		// 			if($('#aboutCtt').length){
		// 				$('#aboutCtt').html(res.data.description);
		// 			}
		// 			fixbox(res.data.tel,res.data.wx_qr,'123456789');
		// 		}else{
		// 			console.log(res.message);
		// 		}
		// 	}
		// });
		
		//获取日志分类
		$.ajax({
			type:"get",
			url: host+"/api/l/getDecorateType",
			success: function(res){
				res = JSON.parse(res);
				if(res.success){
					//app.DecorateType = res.data;
					var html = '';
					html += '<div class="headMenu">'
					html += '<img class="menuLogo" src="../images/foot-logo.png" alt="logo">'
					html += '<ul class="">';
					html += '<li onclick="location.href=\'index.html\'" class="font14 only_line">首页</li>';
					html += '<li onclick="location.href=\'recommendDesigner.html\'" class="font14 only_line">设计师</li>';
					html += '<li onclick="location.href=\'case.html\'" class="font14 only_line">案例</li>';
					html += '<li onclick="location.href=\'inspiration.html\'" class="font14 only_line">灵感</li>';
					res.data.forEach(function(item){
						html +=		'<li onclick="location.href=\'decoratedairy.html?id='+item.id+'\'" class="font14 only_line">'+item.type+'</li>'
					})
					html += '<li onclick="location.href=\'question&answer.html\'" class="font14 only_line">常见问题</li>';
					html += '<li onclick="location.href=\'aboutus.html\'" class="font14 only_line">关于我们</li>';
					html += '</ul>'
					html += '<img class="menuClose" src="../images/menuClose.png" alt="closeBtn">'
					html += '</img>'
					// var html2 = '';
					// res.data.forEach(function(item){
					// 	html2 +=		'<a href="decoratedairy.html?id=+'+item.id+'" class="font14 only_line">'+item.type+'</a>'
					// })
					// $('.footTab').append(html2);
					$('body').append(html);
					// $('.headDairy').hover(function(){
					// 	$(this).find('ul').fadeIn(300);
					// },function(){
					// 	$(this).find('ul').fadeOut(300);
					// })
					var lHref = location.href;
					$('.headMenu li').each(function(){
						if(lHref.indexOf($(this).attr('onclick').split("'")[1])>-1){
							$(this).addClass('active');
						}else{
							$(this).removeClass('active');
						}
					})
				}else{
					console.log(res.message);
				}
			}
		});
	},0);
});

//通用弹出层
// function swiperMark(list,name,index){
// 	if(typeof(list) == 'string'){
// 		list = list.split(',');
// 	}
// 	var html = '';
// 	html += '<div class="con_swiper">';
// 	html += '	<div class="closeSwiper"></div>';
// 	html += '	<div class="cen_swiper">';
// 	html += '		<div class="swiper-container">';
// 	html += '			<div class="swiper-wrapper">';
// 	for(var i = 0;i < list.length;i++){
// 		html += '				<div class="swiper-slide">';
// 		html += '					<div class="con_swiper_img">';
// 		html += '						<img src="'+list[i]+'" alt="">';
// 		html += '						<p>'+name+'</p>';
// 		html += '					</div>';
// 		html += '				</div>';
// 	}
// 	html += '			</div>';
// 	html += '			<div class="swiper-button-prev"></div>';
// 	html += '			<div class="swiper-button-next"></div>';
// 	html += '		</div>';
// 	html += '	</div>';
// 	html += '</div>';
// 	$('body').append(html);
// 	var cen_swiper = new Swiper('.cen_swiper .swiper-container', {
// 		//autoplay: 5000,//可选选项，自动滑动
// 		loop : false,
// 		initialSlide: index ? index : 0,
// 		paginationClickable :true,
// 		prevButton:'.cen_swiper .swiper-button-prev',
// 		nextButton:'.cen_swiper .swiper-button-next',
// 	});
// 	$('.con_swiper .closeSwiper').click(function(e){
// 		$('.con_swiper').remove();
// 		return false;
// 	})
// }

// function fixbox(phone,wechat,qq){
// var html = '<a class="fix-box font15 color-6f6e77" href="javascript:;">'+
// 		'<div><div class="font32 fw_600 color-fff wid100 hgt65 l-h-65 order-btn">立即预约&nbsp;&nbsp;></div></div>'+
// 		'<p class="font38 color-2d2e35 text-center fw_600">'+phone+'</p>'+
// 		'<div class="flex_dom flex_item_mid flex_item_between m-t-5">'+
// 			'<div>'+
// 				'<div class="wx flex_dom flex_item_mid foot-weChat relative">'+
// 					'<i class="wx-logo"></i>'+
// 					'WeChat'+
// 					'<div class="footCode"><img src="'+wechat+'"></div>'+
// 				'</div>'+
// 				'<div class="qq flex_dom flex_item_mid m-t-10" onclick="window.open(\'http://wpa.qq.com/msgrd?v=3&uin='+qq+'\',\'_blank\')">'+
// 					'<i class="qq-logo"></i>'+
// 					'QQ客服'+
// 				'</div>'+
// 			'</div>'+
// 			'<div class="m-r-40">'+
// 				'<img style="width: 56px;" src="../images/icon_msg.png" alt="">'+
// 				'<p>在线客服</p>'+
// 			'</div>'+
// 		'</div>'+
// 	'</a>'
// 	$('body').append(html);
// }

//获取url参数
function GetRequest() {
    var url = location.search; //获取url中"?"符后的字串
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for(var i = 0; i < strs.length; i ++) {
            theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
        }
    }
    return theRequest;
}


//分享
// function share(dom,url,title,desc,image){
	
// 	//一键分享相关配置
//  	var $config = {
//       	url                 : url ? url : window.location.href,// 网址，默认使用 window.location.href
//       	source              : url ? url : window.location.href, // 来源（QQ空间会用到）, 默认读取head标签：<meta name="site" content="http://overtrue" />
//       	title               : title, // 标题，默认读取 document.title 或者 <meta name="title" content="share.js" />
//       	description         : desc, // 描述, 默认读取head标签：<meta name="description" content="PHP弱类型的实现原理分析" />
//       	image               : image, // 图片, 默认取网页中第一个img标签
//       	sites               : ['qzone', 'qq', 'weibo','wechat'], // 启用的站点
//       	disabled            : ['google', 'facebook', 'twitter'], // 禁用的站点
//       	wechatQrcodeTitle   : '微信扫一扫：分享', // 微信二维码提示文字
//       	wechatQrcodeHelper  : '<p>微信里点“发现”，扫一下</p><p>二维码便可将本文分享至朋友圈。</p>',
//       	target : '_blank' //打开方式
// 	};
// 	$(dom).find('p').fadeIn(300);
// 	if(!$(dom).find('p').hasClass('social-share')){
// 		$(dom).find('p').share($config);
// 	}
// }
// function unShare(dom){
// 	$(dom).find('p').fadeOut(300);
// }
