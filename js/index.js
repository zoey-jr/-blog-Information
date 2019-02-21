 // 用户点击不同的内容，切换到不同的页面
$(function(){
  $('ul.nav').on({
  	click:function(){
  		if($(this).find('.words').text() == "首页"){
        $('.contentbody').load('pages/homepage.html'); 
        return;
  		}
  		if($(this).find('.words').text() == '添加栏目'){
  			$('.contentbody').load('pages/column.html');
  			return;
  		}
  		if($(this).find('.words').text() == '发布文章'){
  			$('.contentbody').load('pages/info.html');
  			return;
  		}
  		if($(this).find('.words').text() == '用户管理'){
  			$('.contentbody').load('pages/user.html');
  		}
  	}
  },'li');
});