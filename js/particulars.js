//放大镜
$(function(){
	
  var $box = $('#box');
  var $fan = $('#fan');
  var $oarea = $('#area');
  var $maxp= $oarea.find('img');
  $fan.hide();
  $oarea.hide();
  $box.on('mousemove',function(evt){
	  $fan.show();
      $oarea.show();
	  var nleft = $box.offset().left;
	  var ntop = $box.offset().top;
	   
		   var nx = evt.clientX-nleft+$(window).scrollLeft()-100;
			var ny= evt.clientY-ntop+$(window).scrollTop()-100;
			console.log(nx,ny,evt.clientX,evt.clientY);
	        
		   //不出边框处理
		   if(nx>$box.width()-$fan.width()){
			   nx=$box.width()-$fan.width();
			 }
		   if(ny>$box.height()-$fan.height()){
			   ny=$box.height()-$fan.height();
			   }
		   if(nx<0){
			   nx=0;
			   }
		   if(ny<0){
			   ny=0;
			   }
		   $fan.css({left:nx,top:ny});
		 //放大框图片处理
		  $maxp.css({left:-nx*2,top:-ny*2});
		 
		 }).on('mouseout',function(){
			$fan.hide();
			$oarea.hide();
			
		});
	  
	 
	 



});
//放大镜选项卡
/*$(function(){
            // 初始化状态
            // 隐藏除第一个以外的所有
            $('#box1').show();
             $('#box2').hide()

            // 把选项卡1设为高亮
            $('.pxq_left_bot1').addClass('active');


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
            
});*/