 $(function(){
 	console.log("Window loading over");
 	 $("#start").click(start_onclick);
 });
var timer = null;
var max_width;
function start_onclick(){
	let nbCir = $("#nbCir").val(); 
	
		let z = $(".item4")[0];
		$(z).empty();
 	 	$(z).width("100%");
 	 	max_width = $(z).width();
 	 	let x = $("#init_width").val();

 	 	for (let i = 1; i <= nbCir; i++) {
			elemt = element(x,i*10); 
			$(z).append(elemt);
			setInterval(animation_circle, $("#growRate").val(),elemt,new Number($("#growthAmount").val()));
		};	

		console.log("Initialization complited. width : "+ x );
}

function animation_circle(elemt, GrA){
	let x = $(elemt).width();
	let y = $(".item4")[0];
	if (x>max_width-150) {
		clearInterval(timer);
		timer = null;
		console.log("End Animation");
	}else{
		let z = new Number(x)+ GrA;
		$(elemt).width(z);
		$(elemt).height(z);
	}
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function element(x,i){
	let elemt = $("<div>");
	elemt.addClass("circle");
	elemt.width(x); elemt.height(x);
	elemt.css({"background-color":getRandomColor()});
	elemt.css({"z-index":i});
	elemt.css({"right":(i-1)*4});
	elemt.show();
	return elemt;
} 





