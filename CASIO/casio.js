$(function(){

  $(".flashContral").click(function(){

  		currIndex=$(this).attr("picIndex");
  		showFlashImage();

  });
  $("#guanggao").hover(function(){
  	clearInterval(timeHandle);
  }, function(){
  	 timeHandle= setInterval("showFlashImage()",1000);
  });
  timeHandle= setInterval("showFlashImage()",1000);


  $(".cate1").click(function(){
    $(".cateinner").show();
  });
  $(document).click(function(){
    $(".cateinner").css("dispay","none");
  });



  $(".menuLi").hover(function(){
    $(this).find(".watch").next().show();
  },function(){
    $(this).find(".watch").next().hide();
  });


});


var timeHandle;
var currIndex=2;
function showFlashImage(){
	$("#guanggao").css("background-image",'url("images/' + currIndex +'.jpg")');
	$(".flashContral").removeClass("currentSpan");
	$("#contralSpan"+ currIndex ).addClass("currentSpan");
	currIndex++;
	if(currIndex==4){
		currIndex=1;
	}
	 
	
}