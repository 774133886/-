
  $(document).ready(function(){



   //引入公共头
  
   if(location.href.indexOf("首页")<0)
   {
   	 $(".header,.footer").empty();
   	$(".header").html('<div class="headerconwrap"><div class="logoimg"><img src="../images/slice/logo_head.png"></div><div class="pub_head_nav"><ul><li><a class="current" href="">              首页</a></li><li><a href="">              赛事</a></li><li><a href="">              新闻</a></li><li><a href="">              商城</a></li><li><a href="">              游戏中心</a></li><li><a href="">              活动中心</a></li><li><a href="">              家长监控</a></li><li><a href="">              移动端</a></li></ul></div><div class="pub_person_wrap"><div class="pub_pers"><img src="../images/slice/headshort.png"><p><span> 炸鸡啤酒炸鸡啤</span><img src="../images/slice/botarrmore.png"></p><div class="popmenu"><ul><li><a href="">                   充值</a></li><li><a href="">                   个人中心</a></li><li><a href="">                   参与赛事</a></li><li><a href="">                   登出</a></li></ul></div></div></div></div>')
   	$(".footer").html('<div class="footerconwrap"><div class="bt_leftwrap"><img src="../images/slice/logo_bottom.png"></div><div class="bot_righwrap"><div class="bot_nav1"><a href="">关于我们</a><a href="">媒体报道</a><a href="">工作机会</a><a href="">我们的公众号</a></div><div class="bot_nav1"><a href="">网站条款</a><a href="">新手指南</a><a href="">投资方&顾问</a></div><p>健康游戏忠告: 抵制不良游戏 拒绝盗版游戏 注意自我保护 谨防受骗上当 适度游戏益脑 沉迷游戏伤身 合理安排时间 享受健康生活</p><p>指尖上行（北京）互动娱乐科技有限公司</p><p>公司地址：北京市顺义区望京绿地中心</p><p>Copyright@2018 e-sports.cn</p></div></div>')
   }
   
    $('.pub_person_wrap').hover(function() {
      $(".popmenu").show();
    }, function() {
      $(".popmenu").hide();
    });


    
    
    
  });
