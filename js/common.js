$(function(){
// topbar鼠标划过显示	
	$(".innerbox").hide();
	$(".mybuy2").on("mouseover",function(){
		$(".innerbox").show();
	}).on("mouseout",function(){
		$(".innerbox").hide();
	});
		
	$(".innerbox2").hide();
	$(".mybuy4").on("mouseenter",function(){
		$(".innerbox2").show();
	}).on("mouseleave",function(){
		$(".innerbox2").hide();
	});
//nav鼠标划过渐变色	
	var index=0;	
	var $overli=$(".overnavbox").children("li");
	$overli.on("mouseover",function(){
		 index = $(this).index();		
		$overli.eq(index).find("a").stop().animate({opacity:1},600);		
	}).on("mouseleave",function(){
		index = $(this).index();
		$overli.eq(index).find("a").stop().animate({opacity:0},500,function(){
			$overli.eq(index).find("a").stop();
		});		
	});
	
	
});
//menu
$(function(){
	
	var index=0;
	$(".now_dd").hide();

	$(".menulist").children("li").on("mouseover",function(){
		index=$(this).index();
		$(".menulist").children("li").eq(index).find("dd").show();
	}).on("mouseout",function(){
		$(".now_dd").hide();
	});
});

$(function(){
	
	var index=0;
	

	$(".menulist").children("li").on("mouseover",function(){
		index=$(this).index();
		$(".menulist").children("li").eq(index).css("box-shadow"," 2px 2px 5px rgba(0,0,0,.2)").css("background","#fff").siblings().css("background","#f7f7f7");
	}).on("mouseout",function(){
		$(".menulist").children("li").eq(index).css("box-shadow","none").css("background","#f7f7f7");
	});
	$(".menulist").on("mouseout",function(){
		$(".menulist").children("li").css("background","#fff")
	})
});

//menu阴影
$(function(){
	var index=0;
	$(".menudt_bot").hide();
	$(".menulist").children("li").on("mouseover",function(){
		index=$(this).index();
		$(".menulist").children("li").eq(index).find(".menudt_bot").show();
	}).on("mouseout",function(){
		$(".menulist").children("li").eq(index).find(".menudt_bot").hide();
	})
});
//首页购物收藏menu划过显示
$(function(){
	$(".gouwubox").hide();
	$(".utilityleft").on("mouseover",function(){
		$(".gouwubox").show();
		$(".gouwu").css("color","#666")
	}).on("mouseout",function(){
		$(".gouwubox").hide();
		$(".gouwu").css("color","#fff")
	});
$(".gouwubox2").hide();
	$(".utilityright").on("mouseover",function(){
		$(".gouwubox2").show();
		$(".shoucang").css("color","#666")
	}).on("mouseout",function(){
		$(".gouwubox2").hide();
		$(".shoucang").css("color","#fff")
	});
})
