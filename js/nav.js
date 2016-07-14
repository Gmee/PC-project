//logo.change
$(window).load(function(){
	var num=0;
	var rool=135;
	var timer=null;
	var lis = $("#navBar").children();
	var lastPosition=0;
	timer=setInterval(fn, 10);
	function fn(){
		num+=rool;
		if(num>0){num=0}
		if(num<-12690){num=-12690}
		$(".logo").css('backgroundPosition',num+'px 0');
	}
	 $(".logo").hover(function(){
	 	//clearInterval(timer);
		rool=-135;
	},function(){
		rool=135;
	});
	//	nav
	// lis.each (function(index ,el){
	// 	$(el).hover(function(){
	// 		var set=$(this).setoff();
	// 		$("#back").animate({left:set});
	// 	},function(){
	// 		$("#back").animate({left:lastPosition});
	// 	});
	// 	$(el).click(function(){
	// 		lastPosition = $(this).setoff();
	// 	});
	// });

		});
