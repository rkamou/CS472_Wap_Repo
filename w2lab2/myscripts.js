window.onload = function () {

    const rev =  document.getElementById("reverse");
    rev.onclick = reverse;

	const rev2 =  document.getElementById("reverse2");
    rev2.onclick = reverse2;    


	const listArray =  document.getElementById("arrayToList");
    listArray.onclick = arrayToList;

    const multA =  document.getElementById("multiplyArrayBy");
    multA.onclick = multiplyArrayBy; 
};


function reverse(){
	console.log("Call function : reverse");
	let t = document.getElementById("text").value;
	let a =  t.split(",").map(Number);
	let s = [];
	console.log("Value of the initial string : "+a); 
	if(a.length>0){
		for(let i of a){
			s.unshift(i);
		}
		console.log("Value of the string Reversed : "+s);
		return s;
	} else return "";
}

function reverse2(){
	console.log("Call function : reverse");
	let t = document.getElementById("text").value;
	let a =  t.split(",").map(Number);
	let s = 0;
	console.log("Value of the initial string : "+a); 
	if(a.length>0){
		for(let i = 0; i < a.length/2; i++){
			s = a[i];
			a[i] = a[a.length-1-i];
			a[a.length-1-i] = s;
		}
		console.log("Value of the string Reversed : "+a);
		return a;
	} else return "";
}

let listA = (function(){
	let item = null;
	let nextI = null;
	const getNext = function(){return nextI;}
	const setNext = function(next){nextI = next;}
	return {
		add(num){
			if (item==null) item = num;
			else{
				let newI = {item: num, nextI:null, getNext:getNext, setNext:setNext};
				if(nextI==null) nextI = newI;
				else{
					let n = nextI
					while(n.getNext() != null) n = n.getNext();
					n.setNext(newI)
				}
			}
		}
	}
})();
function arrayToList(){
	console.log("Call function : arrayToList");
	let t = document.getElementById("text").value;
	let a =  t.split(",").map(Number);
	let s = 0;
	console.log("Value of the initial string : "+a); 
	if(a.length>0){
		for(let i = 0; i < a.length; i++){
			listA.add(a[i]);
		}
		alert(listA);
		console.log("Value of the list : "+listA);
		return listA;
	} else return "";
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







