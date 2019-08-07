 $(function(){
 	console.log("Window loading over");
 	 $("#start").click(start_onclick);
 	 let z = $(".item4")[0];
 	 $(z).width("100%");
 	  
 });
var timer = null;
var max_width;
function start_onclick(){
		
		let z = $(".item4")[0];
 	 	$(z).width("100%");
 	 	max_width = $(z).width();

 		let x = $("#init_width").val();
 		$("#circle").show();
 		$("#circle").width(x+"px");
 		$("#circle").height(x+"px");
 		if (timer === null) {
			timer = setInterval(animation_circle, $("#growRate").val());
		}
		console.log("Initialization complited. width : "+ x );
}

function animation_circle(){
	console.log("Animation : "+$("#circle").width());
	let x = $("#circle").width();
	let y = $(".item4")[0];
	if (x>max_width-150) {
		clearInterval(timer);
		timer = null;
	}else{
		console.log("X= "+x);
		console.log("#growthAmount= "+$("#growthAmount").val());
		let z = new Number(x)+ new Number($("#growthAmount").val());
		$("#circle").width(z);
		$("#circle").height(z);
	}
}







