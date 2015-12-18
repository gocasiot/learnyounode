//Gustavo Ocasio
//learnyounode MY FIRST I/O Exercise

var fs = require("fs");
var fileContents = fs.readFileSync(process.argv[2]).toString(); //Converted buffered object (i.e. file output) to string
var numOfNewLines = fileContents.split('\n').length-1; //Number of newlines. Subtracted 1 because last line doesn't have "/n" character

console.log(numOfNewLines);