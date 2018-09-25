
var host = 'http://jssj.crecohe.com/admin';

//头部效果
$(function(){
	var left = $('.curHeader a.active').offset().left;
	var hdLeft = $('.curHeader').offset().left;
	$('.curHeader').prepend('<i></i>');
	$('.curHeader i').css('left',left-hdLeft).show();
	$('.curHeader a').hover(function(){
		var l = $(this).offset().left;
		var hdl = $('.curHeader').offset().left;
		$('.curHeader i').css('left',l-hdl);
	},function(){
		var l = $('.curHeader a.active').offset().left;
		var hdl = $('.curHeader').offset().left;
		$('.curHeader i').css('left',l-hdl);
	});
	
	//底部二维码
	$.ajax({
		type:"get",
		url: host+"/api/l/getUs",
		success: function(res){
			res = JSON.parse(res);
			if(res.success){
				$('#footTel').text('TEL：+86 '+res.data.tel);
				$('#footMail').text('TEL：+86 '+res.data.email);
				$('.footCode img').attr('src',res.data.wx_qr);
			}else{
				console.log(res.message);
			}
		}
	});
});




//分享
function share(dom,url,title,desc,image){
	console.log(213);
	//一键分享相关配置
 	var $config = {
      	url                 : url ? url : window.location.href,// 网址，默认使用 window.location.href
      	source              : 'http://jssj.crecohe.com', // 来源（QQ空间会用到）, 默认读取head标签：<meta name="site" content="http://overtrue" />
      	title               : title, // 标题，默认读取 document.title 或者 <meta name="title" content="share.js" />
      	description         : desc, // 描述, 默认读取head标签：<meta name="description" content="PHP弱类型的实现原理分析" />
      	image               : image, // 图片, 默认取网页中第一个img标签
      	sites               : ['qzone', 'qq', 'weibo','wechat'], // 启用的站点
      	disabled            : ['google', 'facebook', 'twitter'], // 禁用的站点
      	wechatQrcodeTitle   : '微信扫一扫：分享', // 微信二维码提示文字
      	wechatQrcodeHelper  : '<p>微信里点“发现”，扫一下</p><p>二维码便可将本文分享至朋友圈。</p>',
      	target : '_blank' //打开方式
	};
	$(dom).find('p').fadeIn(300);
	if(!$(dom).find('p').hasClass('social-share')){
		$(dom).find('p').share($config);
	}
}
function unShare(dom){
	console.log(dom);
	$(dom).find('p').fadeOut(300);
}
