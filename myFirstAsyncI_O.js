//Gustavo Ocasio
//learnyounode MY FIRST ASYNC I/O Exercise

var fs = require("fs");
var file = process.argv[2];
fs.readFile(file, "utf8", function(error, contents){
	if(error) {
		throw error;
	}
	console.log(contents.split('\n').length-1); //Log number of newlines to console
});