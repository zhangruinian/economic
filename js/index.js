$(function() {
	// 二级页面左侧导航栏高亮
	$(".sec-left-content .sec-nav li").click(function(e) {
		$(this).addClass("sec-active").siblings().removeClass("sec-active");
	});
	// 焦点轮播图设置
	myFocus.set({
		//ID
		id: 'picBox',
		//风格
		pattern: 'mF_YSlider'
	});

	//列表右边内容的li的超过的部分添加省略号……
	var centerli = $(".centerNews ul li a");
	centerli.each(function(index, element) {
		var text = centerli.eq(index).text();
		var strText = text.substr(0, 20) + "...";
		$(this).text(strText);
	});
	
	var informli = $(".inform ul li a");
	informli.each(function(index, element) {
		var text = informli.eq(index).text();
		var strText = text.substr(0, 13) + "...";
		$(this).text(strText);
	});
		//公告信息上下滚动
	var scrtime;
	$(".inform").hover(function() {
		clearInterval(scrtime); //停止滚动   
	}, function() {
		scrtime = setInterval(function() {
			var ul = $(".inform ul");
			var liHeight = ul.find("li:last").height(); //计算最后一个li元素的高度   
			ul.animate({
				marginTop: liHeight + 20 + "px"
			}, 2000, function() {
				ul.find("li:last").prependTo(ul);
				ul.find("li:first").hide();
				ul.css({
					marginTop: 0
				});
				ul.find("li:first").fadeIn(2000);
			});
		}, 3000);
	}).trigger("mouseleave");
	//实验室信息上下滚动
	var labtime;
	$(".subLab").hover(function() {
		clearInterval(labtime); //停止滚动   
	}, function() {
		labtime = setInterval(function() {
			var ul = $(".subLab ul");
			var liHeight = ul.find("li:last").height(); //计算最后一个li元素的高度   
			ul.animate({
				marginTop: liHeight + 0 + "px"
			}, 2000, function() {
				ul.find("li:last").prependTo(ul);
				ul.find("li:first").hide();
				ul.css({
					marginTop: 0
				});
				ul.find("li:first").fadeIn(2000);
			});
		}, 3000);
	}).trigger("mouseleave");
	//头部导航颜色高亮
	$(".header .nav li").click(function(e) {
       $(this).addClass("active").siblings().removeClass("active");
    });
	//图片横向滚动
	$("#scroller_roll1").scroller_roll({
		title_show: 'enable', //enable  disable
		time_interval: '30',
		window_background_color: "#fff",
		window_padding: '1',
		border_size: '1',
		// border_color: '#0099CC',
		border_color: '#000',
		images_width: '123',
		images_height: '101',
		images_margin: '5',
		title_size: '12',
		title_color: '#4c4c4c',
		show_count: '3'
	});
	//教师学生单选按钮变色
	$(".login-title label").click(function() {
		$(this).css("color", "#7F3D48").siblings().css("color", "#4c4c4c");
	});
});