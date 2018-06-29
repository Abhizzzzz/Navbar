$(document).ready(() =>{
	//to change the colour when mouse over
	$(".c1").mouseover(() =>{
		$(".c1").css("background","navy");
	});
	//to resume back the original colour when mouse out
	$(".c1").mouseout(() =>{
		$(".c1").css("background","purple");
	});
	//to change the colour when mouse over
	$(".c2").mouseover(() =>{
		$(".c2").css("background","navy");
	});
	//to resume back the original colour when mouse out
	$(".c2").mouseout(() =>{
		$(".c2").css("background","purple");
	});
	//to change the colour when mouse over
	$(".c3").mouseover(() =>{
		$(".c3").css("background","navy");
	});
	//to resume back the original colour when mouse out
	$(".c3").mouseout(() =>{
		$(".c3").css("background","purple");
	});
	//to change the colour when mouse over
	$(".c4").mouseover(() =>{
		$(".c4").css("background","navy");
	});
	//to resume back the original colour when mouse out
	$(".c4").mouseout(() =>{
		$(".c4").css("background","purple");
	});
	//declaring counter as even number
	let count = 2;
	$(".button").click(() =>{
		//Incrementing the counter
		count++;
		//Applied even odd logic,if counter is odd  p is shown,for even its hidden
		if(count % 2 != 0){
			 $(".col").show();
		}
		else{
			 $(".c1,.c2,.c3,.c4").hide();
		}

	});
})