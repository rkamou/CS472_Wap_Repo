 function max(a,b){
 	console.log("Call function : max");
 	var c = a;
 	if (b>a) {
 		c = b;
 	}

	console.log("Value of the first parameter : "+a);

	console.log("Value of the second parameter : "+b);

	console.log("Value of the max : "+c);
 	return c;
 }

function maxOfThree(a, b, c) {
	console.log("Call function : maxOfThree");
	console.log("Value of the first parameter : "+a);

	console.log("Value of the second parameter : "+b);

	console.log("Value of the third parameter : "+c);

	console.log("Value of the max : "+max(max(a, b), c));
  return max(max(a, b), c);
}

function isVowel(a){
	console.log("Call function : isVowel");
	console.log("Value of the character : "+a); 
	var regex = RegExp('[e,u,i,o,a]{1}');
	console.log("Value of the test : "+regex.test(a)); 
	return regex.test(a);
}
 
function sum(t) {
	console.log("Call function : sum");

	var a =  t.split(",").map(Number); // split the string and convert into and array of number

	console.log("Value of the Array : "+a); 
	var s = 0;
	if(a.length>0){
		for(let i = 0; i < a.length; i++)
			s+=a[i];
	console.log("Value of the sum of the Array element : "+s); 	
		return s;
	}else return "error";
} 

function multiply(t){
	console.log("Call function : multiply");

	var a =  t.split(",").map(Number);

	console.log("Value of the Array : "+a); 

	var s = 0;
	if(a.length>1){
		s = a[0];
		for(let i = 1; i < a.length; i++)
			s=s*a[i];
		console.log("Value of the product of the Array element : "+s); 	
		return s;
	} else return "error";
}

function reverse(a){
	console.log("Call function : reverse");

	var s = "";
	console.log("Value of the initial string : "+a); 
	if(a.length>1){
		s = a[0];
		for(let i = 1; i < a.length; i++)
			s=a[i]+s;
		console.log("Value of the string Reversed : "+s);
		return s;
	} else return "";
}

function findLongestWord(s){
	console.log("Call function : findLongestWord");

	var a =  s.split(",");
	console.log("Value of the Array : "+a);
	if(a.length>1){
		s = a[0].length;
		for(let i = 1; i < a.length; i++)
			if(s < a[i].length) s = a[i].length;
		console.log("Value of the length of the longuest element : "+s); 	
		return s;
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







