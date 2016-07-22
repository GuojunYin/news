//登录表单正则验证
$(function(){
	$('.denglu1').on('click',function(){
	fnLogin();		
	function fnLogin(){
		var oUname = $('.inp1');
		var oUpass = $('.inp2');
		var oError1 = $('.tishi1');
		var oError2 = $('.tishi2');
		
		var sUname = oUname.val().replace(/ /g, "");
		var sUpass = oUpass.val();
		oUname.value = sUname;
		
		var regPass = /^[\w]{6,20}$/;//密码只能包含数字、字母和下划线
		//用键盘时间验证用户名
		if(sUname.charCodeAt(0)>=48 && sUname.charCodeAt(0)<=57){
		oError1.html("不能以数字开头") ;
	}else if(sUname.length==0){
		oError1.html ("用户名不能为空");
	}else if(sUname.length<6 || sUname.length>20){
		oError1.html("用户名不能少于6位，不能多余20位");
	
	}else{
		oError1.html("");
	}
		
		//验证密码
		if(sUpass.length==0){
			oError2.html("密码不能为空！");
		}else if(!regPass.test(sUpass)){
			oError2.html("密码长度为6-20位,只能包含数字、字母和下划线");
		}else {
			oError2.html("");
		}
		
	}	
})
})