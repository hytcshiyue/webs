$(function(){


	/*好友列表收起与展开*/
	$(".LXRLiA").click(function(){
		var isshow = $(this).parent().find(".LXRLiDes").attr("isshow");

		if(isshow=="no"){
			$(this).parent().find(".LXRLiDes").show();
			$(this).parent().find(".LXRLiDes").attr("isshow","yes");
			$(this).parent().find(".LXRLiPic").css("background-image",'url("css/images/open_arrow_fire.png")');
		}
		else{
			$(this).parent().find(".LXRLiDes").hide();
			$(this).parent().find(".LXRLiDes").attr("isshow","no");
			$(this).parent().find(".LXRLiPic").css("background-image",'url("css/images/open_arrow.png")');
		}
	});


	//好友，群，讨论组的切换
	$(".LXRChatKindLi").click(function(){
		
		var upid=$(this).attr("upid");
		//alert(upid);
		$(".LXRList").addClass("disnone");
		$("#"+upid).removeClass("disnone");
		$(".LXRChatKindLi").removeClass("LXRChatKindSpe");
		$(this).addClass("LXRChatKindSpe");
	});


    //切换QQ下面的栏目
	$(".FAF01").click(function(){
		$(this).find(".FAFPic").addClass("FAFP01");
		$(".FAFPic02").removeClass("FAFP02");
		$(".FAFPic03").removeClass("FAFP03");
		$(".FAFPic04").removeClass("FAFP04");

		$(".FAFLi").removeClass("FAFChangeColor");
		$(this).addClass("FAFChangeColor");

		$(".FriendA").addClass("disnone");
		$("#huihua").removeClass("disnone");
	});
	$(".FAF02").click(function(){
		$(this).find(".FAFPic").addClass("FAFP02");
		$(".FAFPic01").removeClass("FAFP01");
		$(".FAFPic03").removeClass("FAFP03");
		$(".FAFPic04").removeClass("FAFP04");

		$(".FAFLi").removeClass("FAFChangeColor");
		$(this).addClass("FAFChangeColor");

		$(".FriendA").addClass("disnone");
		$("#lianxiren").removeClass("disnone");
	});
	$(".FAF03").click(function(){
		$(this).find(".FAFPic").addClass("FAFP03");
		$(".FAFPic01").removeClass("FAFP01");
		$(".FAFPic02").removeClass("FAFP02");
		$(".FAFPic04").removeClass("FAFP04");

		$(".FAFLi").removeClass("FAFChangeColor");
		$(this).addClass("FAFChangeColor");

		$(".FriendA").addClass("disnone");
		$("#faxian").removeClass("disnone");
	});
	$(".FAF04").click(function(){
		$(this).find(".FAFPic").addClass("FAFP04");
		$(".FAFPic01").removeClass("FAFP01");
		$(".FAFPic03").removeClass("FAFP03");
		$(".FAFPic02").removeClass("FAFP02");

		$(".FAFLi").removeClass("FAFChangeColor");
		$(this).addClass("FAFChangeColor");

		$(".FriendA").addClass("disnone");
		$("#shezhi").removeClass("disnone");
	});


	//在线状态的切换
	


});