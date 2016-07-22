//登录验证
$(function(){
	$('.ljzc').on('click',function(){
	fnLogin();		
	function fnLogin(){
		var oPname = $('.reg_txt_0');
		var oUname = $('.reg_txt_name');
		var oUpass = $('.reg_txt_password');
		
		var oError1 = $('.min_bto_p1');
		var oError2 = $('.min_bto_p2');
		var oError3 = $('.min_bto_p3');
		var oError4 = $('.min_bto_p4');
		var sPname = oPname.val().replace(/ /g, "");
		var sUname = oUname.val();
		var sUpass = oUpass.val();
		oPname.value = sPname;
		oUname.value = sUname;
		var regName = /^(13[0-9]|14[0-9]|15[0-9]|18[0-9])[0-9]{8}$/;//13*/14*/15*/18*    11位		
		var regPass = /^[\w]{6,20}$/;//密码只能包含数字、字母和下划线
		//验证手机
		if(sPname.length==0){
			oError1.html("手机号不能为空！");
		}else if(!regName.test(sPname)){
			 oError1.html("手机号格式有误！");
		}else {
			oError1.html("");
		}
		//用键盘事件验证用户名
		if(sUname.charCodeAt(0)>=48 && sUname.charCodeAt(0)<=57){
		oError2.html("不能以数字开头") ;
		}else if(sUname.length==0){
		oError2.html ("用户名不能为空");
		}else if(sUname.length<6 || sUname.length>20){
		oError2.html("用户名不能少于6位，不能多余20位");
	
		}else{
		oError2.html("");
		}
		//匹配输入的验证码是否与随机生成的验证码一致
		if($('.reg_txt_1').val()==$('.code').html()){
			oError4.html("");
		}else{
			 oError4.html("验证码输入有误！");
		}
		//设置密码
		if(sUpass.length==0){
			oError3.html("密码不能为空！");
		}else if(!regPass.test(sUpass)){
			oError3.html("密码长度为6-20位,只能包含数字、字母和下划线");
		}else {
			oError3.html("");
		}
		//匹配两次输入的密码是否一致
		/*if($('#upassagain').val()==$('#upass').val()){
			oError5.html("");
		}else{
			 oError5.html("两次输入的密码不一致！");
		}*/
	}	
})


	////登录验证随机生成验证码
	fnLoginSwitch();
	////登录验证点击换一张
	$('.change_code').on('click',function(){
		fnLoginSwitch();
	})		
	function fnLoginSwitch(){		
		var oBox1=$('.code');
		var aColor=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];
		var sColor="#";
		for(var i=0;i<6;i++){
			var nRandom1=Math.floor(Math.random()*aColor.length);
			sColor+=aColor[nRandom1];	
		}
		oBox1.css({background:sColor});	
		//随机生成验证码
		var aNum=["0","1","2","3","4","5","6","7","8","9",
		"a","b","c","d","e","f","g",
		"h","i","j","k","l","m","n",
		"o","p","q","r","s","t",
		"u","v","w","x","y","z",
		"A","B","C","D","E","F","G",
		"H","I","J","K","L","M","N",
		"O","P","Q","R","S","T",
		"U","V","W","X","Y","Z"]
		var sNum="";
		for(var i=0;i<4;i++){
			var nRandom2=Math.floor(Math.random()*aNum.length);
			sNum+=aNum[nRandom2];	
		}
		oBox1.html(sNum);
	};
				
})
