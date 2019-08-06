 $(function(){
 	console.log("Window loading over");
 	 $("#start").click(start_onclick);
 });

 function start_onclick(){
 		message("");
	 	console.log("Maze starts");
	 	$("#end").click(end_onclick);
	 	$(".boundary").each(function(idx, e){
 			$(e).mouseover(crossOverSide).mouseout(crossOut);
		});
	 }

function crossOverSide(){
	$(".boundary").each(function(idx, e){
		$(e).css("background-color", "red");  
 		$(e).unbind("mouseover");
	});
	console.log("Border Crossed");
	message("You Lost : Start Over");
	$("#end").off("click");

}

function crossOut(){
	$(".boundary").each(function(idx, e){
		$(e).css("background-color", "#eeeeee");
	});
}	

function message(mess){
	elemt = $("<span>");
	elemt.css({"color":"red","text-align":"center","animation": "blinker-two 1.4s linear infinite"}).text(mess);
	$("#result").empty();
	$("#result").append(elemt);
	//$("#result").css({"color":"red","text-align":"center","v-align":"middle"}).text(mess);
} 

function end_onclick(){
		console.log("Maze ends");
	 	$(".boundary").each(function(idx, e){ 
 			$(e).unbind("mouseover");
		});
		alert("Bravo: You Win");
		$("#end").off("click");
		message("Bravo : You Win")
}	 			