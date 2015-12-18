//Gustavo Ocasio
//learnyounode BABY STEPS Exercise

//My solution using closures

var numArray = process.argv.slice(2);
var adderFunction = add();

function add(){
	var total = 0;
	var timesRun = 0;
	function myFunc (number) {
		total += +number;
		timesRun++;
		if (timesRun === numArray.length){
			console.log(total);
		}
	}
	return myFunc;
}

numArray.forEach(adderFunction);


//My solution w/o closures

/*
function add(process){
	var total = 0;
	for (var i = 2; i < process.argv.length; i++) {
		total += +process.argv[i];
	}
	return total;
}
console.log(add(process));
//*/