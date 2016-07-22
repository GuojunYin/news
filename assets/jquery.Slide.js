;(function($){
	$.fn.arSlide = function(options){
		// 预设默认值
		var defaults = {
			autoPlay:true,
			showButton:true,
			smallstyle:'round',
			time:3000,
			type:'fade' //渐显(fade,默认)，上下滚动(moveY)，左右滚动(moveX)
		}
		var opt = $.extend(defaults,options);

		this.each(function(){
			var $focus = $(this);
			var $bigWrap = $('.big-wrap',$focus);//与find效果相同，一般用于插件编写
	        var $big = $('ul',$focus);
			
			//显示图片索引
	        var index = 0;

	        // 获取图片数量
			var $Li=$big.children('li');
	        var len = $Li.length;
	        // 图片宽高
	        var imgWidth;
	        var imgHeight;
	        // 给大图设置高度
	        // **获取图片的高度必须等待图片加载完成
	        	imgWidth = $Li.outerWidth();
	        	imgHeight = $Li.outerHeight();
	        	$bigWrap.css({
	        		height:imgHeight,
	        		width:imgWidth	
	        	});
	        	$focus.width(imgWidth);
	        	$big.width(imgWidth*len);
	        $big.addClass(opt.type);
	        // 显示小图标
	        if(opt.smallstyle){
	        	var $smallWrap = $('<div/>').addClass(opt.smallstyle);
				
				if(opt.smallstyle=='round'){
					$Li.each(function(idx,obj){
						$('<span>').text(idx+1).appendTo($smallWrap);	
					})
				}else{
					$Li.each(function(idx,obj){
						$('<span>').appendTo($smallWrap);	
					})
				}
		        $focus.append($smallWrap);
		        $smallWrap.on('mouseenter','span',function(){
		            index = $(this).index();
		           	show();
		        });
	        }
	        if(opt.showButton){
	        	// 添加左右按钮
		       // $('<em/>').addClass('prev').html('&lt;').appendTo($focus);
		        //$('<em/>').addClass('next').html('&gt;').appendTo($focus);
		        $('<em/>').addClass('prev').appendTo($focus);
		      	$('<em/>').addClass('next').appendTo($focus);
		        // 上一张
		        $focus.on('click','.prev',function(){
		        	index--;
		        	show();
		        }).on('click','.next',animation);   
	        }
	        // 页面加载时显示第一张图
	        show();
			if(opt.autoPlay){
				var timer;
				// 鼠标移入停止，移除继续
				$focus.on('mouseenter',function(){
					//$focus.find('em').show();
				clearInterval(timer);
				}).on('mouseleave',function(){
					//$focus.find('em').hide();
					timer = setInterval(animation,opt.time);
				}).trigger('mouseleave');
			}
	        // 图片切换
	        function animation(){
	            index++;
	            show();
	        }

	        // 显示图片
	        // 当前大图透明度为1，其他为0
	        // 当前小兔透明度为1，其他为0.5
	        function show(){
	            if(index==len){
	                index=0;
	            }else if(index < 0){
	                index = len - 1;
	            }
	            if(opt.type == 'fade'){
	            	$big.children('li').eq(index).stop().animate({opacity:1}).siblings().stop().animate({opacity:0});
	            }else if(opt.type == 'moveX'){
	            	$big.stop().animate({left:-index*imgWidth},800);
	            }else if(opt.type == 'moveY'){
	            	$big.stop().animate({top:-index*imgHeight},600);
	            }
				if(opt.smallstyle){
					$smallWrap.find('span').removeClass('active').eq(index).addClass('active')
				}
					        }
		});
        return this;
	}
})(jQuery);