window.onload = function () {
    const fil = document.getElementById("filter");
    fil.onclick = onClickfilter;

    const bubbleC = document.getElementById("bubble");
    bubbleC.onclick = bubbleSortClick;

    const sim =  document.getElementById("simulation");
    sim.onclick = simulation;

	 
};

String.prototype.filter = function(args) {
	// body...
	let v = this;
	for(let i of args){ 
		if(this.includes(i)) 
			v = v.replace(i,'');
	} 
	return v;
};

Array.prototype.bubbleSort = function(){
	let v = this;

	for(let i=0; i<v.length; i++){
		let temp = i;

		for(let j=i; j<v.length; j++){
			if(v[temp]<v[j]) temp = j;
		}
		if (temp!=i){
			let sh = v[temp];
			v[temp] = v[i];
			v[i] = sh;
		}
	}
	return v;
}
 
function onClickfilter() {
	console.log("Call function : filter");
	text = document.getElementById("text").value;
	tab = (document.getElementById("text2").value).split(",");
	
	let v = text.filter(tab);

	console.log("return of the filter : "+v); 
	
	alert("return of the filter : "+v);
} 

function bubbleSortClick(){
	tab = (document.getElementById("text").value).split(",");
	
	let v = tab.bubbleSort();

	console.log("return of the filter : "+v); 
	
	alert("return of the filter : "+v);
}

function Person(name, age){
	this.pName = name;
	this.pAge = age;
	console.log("New Person "+this.pName);
}

function Teacher(){
	this.subject="";
	this.teach = function (){
		console.log(this.pName+" is now teaching "+this.subject);
	}
	this.setSuject = function(sub){
		this.subject = sub;
		console.log(this);
	}
}

function simulation(){
	let p = new Person("Pogo",29);

	let t = new Teacher();
	t.setSuject("Algorithm");
	t.teach.call(p);
	console.log(t);
	//v("Algorithm");
	//v("Algorithm");
}






