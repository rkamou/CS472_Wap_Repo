window.onload = function () {
    const sumL = document.getElementById("sumL");
    sumL.onclick = sum;

    const mulL = document.getElementById("mulL");
    mulL.onclick = multiply;

    const rev =  document.getElementById("reverse");
    rev.onclick = reverse;

	const findL =  document.getElementById("findLongestWord");
    findL.onclick = findLongestWord;    


	const filt =  document.getElementById("filterLongWords");
    filt.onclick = filterLongWords;

    const multA =  document.getElementById("multiplyArrayBy");
    multA.onclick = multiplyArrayBy; 
};
 
function sum() {
	console.log("Call function : sum");
	t = document.getElementById("text").value
	var a =  t.split(",").map(Number); // split the string and convert into and array of number

	console.log("Value of the Array : "+a); 
	
	if(a.length>0){
		var s = a.reduce(function(pre,val){return pre+val});
		console.log("Value of the sum of the Array element : "+s); 	
		return s;
	}else return "error";
} 

function multiply(){
	console.log("Call function : multiply");
	var t = document.getElementById("text").value;
	var a =  t.split(",").map(Number);

	console.log("Value of the Array : "+a); 
 
	if(a.length>1){
		var s = a.reduce(function(pre,val){return pre*val});

		console.log("Value of the product of the Array element : "+s); 	
		return s;
	} else return "error";
}

function reverse(){
	console.log("Call function : reverse");
	var a = document.getElementById("text").value
	var s = "";
	console.log("Value of the initial string : "+a); 
	if(a.length>0){
		var s = a.reduce(function(pre,val){return val+pre});

		console.log("Value of the string Reversed : "+s);
		return s;
	} else return "";
}

function findLongestWord(){
	console.log("Call function : findLongestWord");
	var s = document.getElementById("text").value;
	var a =  s.split(",");
	console.log("Value of the Array : "+a);
	if(a.length>1){
		var t = a.map(function(ele){return ele.length;}).sort(function(a, b){return b - a})[0];
		
		console.log("Value of the length of the longuest element : "+t); 	
		return t;
	} else return "Error";
}

function filterLongWords(){
	console.log("Call function : filterLongWords");
	var s = document.getElementById("text").value;
	var ind = document.getElementById("num1").value;
	var a =  s.split(",");
	console.log("Value of the Array : "+a);
	console.log("Value of the filter Value : "+ind);

	var ret = a.filter(function(elem){return elem.length>ind;});
	console.log("Array filtered : "+ret);
	return ret;
}

function multiplyArrayBy(){
	console.log("Call function : multiplyArrayBy");
	var s = document.getElementById("text").value;
	var b = document.getElementById("num1").value;
	var a =  s.split(",").map(Number);
	console.log("Value of the Array : "+a);
	console.log("Value of the Factor : "+b);

	var ret = a.map(function(elem){return elem*b})

	console.log("Result : "+ret);
	return ret;
}







