/*window.onload = function () {
    const sumL = document.getElementById("sumL");
    sumL.onclick = okayClick;

    const okButton2 = document.getElementById("ok2");
    okButton2.onclick = function () {
        alert("OK2 clicked");
    };

    document.getElementById("ok3").onclick = function () {
        alert("OK3 clicked");
    };

    function okayClick() {
        alert("OK1 clicked");
    }
};*/
 
function sum(t) {
	console.log("Call function : sum");

	var a =  t.split(",").map(Number); // split the string and convert into and array of number

	console.log("Value of the Array : "+a); 
	
	if(a.length>0){
		var s = a.reduce(function(pre,val){return pre+val});
		console.log("Value of the sum of the Array element : "+s); 	
		return s;
	}else return "error";
} 

function multiply(t){
	console.log("Call function : multiply");

	var a =  t.split(",").map(Number);

	console.log("Value of the Array : "+a); 
 
	if(a.length>1){
		var s = a.reduce(function(pre,val){return pre*val});

		console.log("Value of the product of the Array element : "+s); 	
		return s;
	} else return "error";
}

function reverse(a){
	console.log("Call function : reverse");

	var s = "";
	console.log("Value of the initial string : "+a); 
	if(a.length>0){
		var s = a.reduce(function(pre,val){return val+pre});

		console.log("Value of the string Reversed : "+s);
		return s;
	} else return "";
}

function findLongestWord(s){
	console.log("Call function : findLongestWord");

	var a =  s.split(",");
	console.log("Value of the Array : "+a);
	if(a.length>1){
		var t = a.map(function(ele){return ele.length;}).sort(function(a, b){return b - a})[0];
		
		console.log("Value of the length of the longuest element : "+t); 	
		return t;
	} else return "Error";
}

function filterLongWords(s, ind){
	console.log("Call function : filterLongWords");

	var a =  s.split(",");
	console.log("Value of the Array : "+a);
	console.log("Value of the filter Value : "+ind);

	var ret = a.filter(function(elem){return elem.length>ind;});
	console.log("Array filtered : "+ret);
	return ret;
}

function multiplyArrayBy(s,b){
	console.log("Call function : multiplyArrayBy");

	var a =  s.split(",").map(Number);
	console.log("Value of the Array : "+a);
	console.log("Value of the Factor : "+b);

	var ret = a.map(function(elem){return elem*b})

	console.log("Result : "+ret);
	return ret;
}







