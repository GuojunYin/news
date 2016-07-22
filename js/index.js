

//banner
$(function(){
	$(".bannerlun").arSlide({
			autoPlay:true,
			showButton:false,
			smallstyle:'round',
			time:3000,
			type:'fade'
			})
})
//限时抢购轮播
$(function(){
	$(".prosilder_more").find(".prev").show().css("display","block");
	$(".prosilder_more").find(".next").show().css("display","block");
	$(".prosilder_more").arSlide({
			autoPlay:true,
			showButton:true,
			smallstyle:false,
			time:3000,
			type:'moveX'
	});;
	$(".prosilder_more").find(".prev").show().css("display","block");
	$(".prosilder_more").find(".next").show().css("display","block");
})
//---------倒计时
function GetRTime(){
	var EndTime= new Date("2016/08/20 00:00:00");
	var NowTime=new Date();
	var t=EndTime.getTime()-NowTime.getTime();
	var d=0;
	var h=0;
	var m=0;
	var s=0;
	if(t>=0){
		d=Math.floor(t/1000/60/60/24);
		h=Math.floor(t/1000/60/60%24);
		m=Math.floor(t/1000/60%60);
		s=Math.floor(t/1000%60);
		
	}
	document.getElementById("hour").innerHTML=h;
	document.getElementById("mintue").innerHTML=m;
	document.getElementById("second").innerHTML=s;
}
setInterval(GetRTime,0)


//炸弹轮播
$(function(){
	$(".banner_rightSlide").arSlide({
			autoPlay:true,
			showButton:false,
			smallstyle:'round',
			time:3000,
			type:'moveX'
			})
})
//热卖商品轮播
$(function(){
	
	$(".tabc").arSlide({
			autoPlay:true,
			showButton:false,
			smallstyle:false,
			time:4000,
			type:'moveX'
			})
})
//换一批
$(function(){
	var index=0;
	var $Li=$(".tabcul").children('li');
    var len = $Li.length;
	$(".hot_a").on("click",function(){
		index++;
		if(index==len){
            index=0;
        }else if(index < 0){
            index = len - 1;
        }
        $(".tabcul").stop().animate({left:-index*$Li.width()},800);
            
	})
	
})
//手风琴---改变left值
/*$(function(){
	var index=0;
	var idx=0;
	
	var $li=$(".sfqul").children("li");
	idx=$li.index();
	$li.eq(0).css("left",0).css("z-index",100);
	//.nextAll().eq(index).css("left",index*175)
	$li.eq(1).css("left",675).css("z-index",200);
	$li.eq(2).css("left",850).css("z-index",300);
	$li.eq(3).css("left",1025).css("z-index",400);
	$li.on("mouseover",function(){
		 index = $(this).index();
		 $li.eq(index).css("left",index*175).nextAll().css("left",index*175+675);
		
		  $li.eq(index).nextAll().eq(idx).css("left",idx*175+675)
		 //idx=$li.eq(index).nextAll().index();
		 $li.eq(index).prevAll().eq(idx).css("left",idx*175)
	})
})*/
$(function(){
	var $li=$(".sfqul").children("li");
	$li.eq(0).css("left",0).css("z-index",100);	
	$li.eq(1).css("left",675).css("z-index",200);
	$li.eq(2).css("left",850).css("z-index",300);
	$li.eq(3).css("left",1025).css("z-index",400);
	
	$li.eq(0).on("mouseenter",function(){
		$li.eq(0).stop().animate({left:0},500).css("z-index",100);	
		$li.eq(1).stop().animate({left:675},500).css("z-index",200);
		$li.eq(2).stop().animate({left:850},500).css("z-index",300);
		$li.eq(3).stop().animate({left:1025},500).css("z-index",400);
	});
	$li.eq(1).on("mouseenter",function(){
		$li.eq(0).stop().animate({left:0},500).css("z-index",100);	
		$li.eq(1).stop().animate({left:175},500).css("z-index",200);
		$li.eq(2).stop().animate({left:850},500).css("z-index",300);
		$li.eq(3).stop().animate({left:1025},500).css("z-index",400);
	});
	$li.eq(2).on("mouseenter",function(){
		$li.eq(0).stop().animate({left:0},500).css("z-index",100);	
		$li.eq(1).stop().animate({left:175},500).css("z-index",200);
		$li.eq(2).stop().animate({left:350},500).css("z-index",300);
		$li.eq(3).stop().animate({left:1025},500).css("z-index",400);
	});
	$li.eq(3).on("mouseenter",function(){
		$li.eq(0).stop().animate({left:0},500).css("z-index",100);	
		$li.eq(1).stop().animate({left:175},500).css("z-index",200);
		$li.eq(2).stop().animate({left:350},500).css("z-index",300);
		$li.eq(3).stop().animate({left:525},500).css("z-index",400);
	});
	
})
//inter
$(function(){
            // 初始化状态
            // 隐藏除第一个以外的所有
            $('.inter_box').hide().eq(0).show();

            // 把选项卡1设为高亮
            $('.inter_left li').eq(0).addClass('active');


            // 有length属性，但不能使用数组方法的称之为类数组
            $('.inter_left li').on("mouseenter",function(){
                var index = $(this).index();
                // console.log(this.jquery)
                // 原生对象与jquery对象的转换

                $('.inter_left li').removeClass('active').eq(index).addClass('active');


                // 先隐藏所有，然后显示当前
                $('.inter_box').hide().eq(index).show();
            });

            // $('#output')[0].innerHTML = 'aaa';
            
});
//inter_right轮播
$(function(){
	$(".inter_right").arSlide({
			autoPlay:true,
			showButton:false,
			smallstyle:'round',
			time:3000,
			type:'moveX'
			})
})
//common--min轮播
$(function(){
	$(".min_banner").arSlide({
			autoPlay:true,
			showButton:false,
			smallstyle:'round',
			time:3000,
			type:'moveX'
			})
})
//min----right
$(function(){
            // 初始化状态
            // 隐藏除第一个以外的所有
           $(".min").find('.min_rightbox').hide().eq(0).show();
          

            // 把选项卡1设为高亮
             $(".min").find('.min_right').find("li") .eq(0).addClass('active');
          


            // 有length属性，但不能使用数组方法的称之为类数组
             $(".min").find('.min_right').find("li").on("mouseenter",function(){
                var index = $(this).index();console.log(index)
                // console.log(this.jquery)
                // 原生对象与jquery对象的转换

                  $(".min").find('.min_right').find("li").removeClass('active').eq(index).addClass('active');


                // 先隐藏所有，然后显示当前
               $(".min").find('.min_rightbox').hide().eq(index).show();
            });
          

            // $('#output')[0].innerHTML = 'aaa';
            
});
$(function(){
            // 初始化状态
            // 隐藏除第一个以外的所有
           $(".min2").find('.min_rightbox').hide().eq(0).show();
          

            // 把选项卡1设为高亮
             $(".min2").find('.min_right').find("li") .eq(0).addClass('active');
          


            // 有length属性，但不能使用数组方法的称之为类数组
             $(".min2").find('.min_right').find("li").on("mouseenter",function(){
                var index = $(this).index();console.log(index)
                // console.log(this.jquery)
                // 原生对象与jquery对象的转换

                  $(".min2").find('.min_right').find("li").removeClass('active').eq(index).addClass('active');


                // 先隐藏所有，然后显示当前
               $(".min2").find('.min_rightbox').hide().eq(index).show();
            });
          

            // $('#output')[0].innerHTML = 'aaa';
            
});
$(function(){
            // 初始化状态
            // 隐藏除第一个以外的所有
           $(".min3").find('.min_rightbox').hide().eq(0).show();
          

            // 把选项卡1设为高亮
             $(".min3").find('.min_right').find("li") .eq(0).addClass('active');
          


            // 有length属性，但不能使用数组方法的称之为类数组
             $(".min3").find('.min_right').find("li").on("mouseenter",function(){
                var index = $(this).index();console.log(index)
                // console.log(this.jquery)
                // 原生对象与jquery对象的转换

                  $(".min3").find('.min_right').find("li").removeClass('active').eq(index).addClass('active');


                // 先隐藏所有，然后显示当前
               $(".min3").find('.min_rightbox').hide().eq(index).show();
            });
          

            // $('#output')[0].innerHTML = 'aaa';
            
});
//大清仓滚动显示
$(function(){
	$(".qingc").hide();
	$(window).on("scroll",function(){
		if($(window).scrollTop()<400){
			$(".qingc").hide();
		}else{
			$(".qingc").show();	
		}
		
	})
})
