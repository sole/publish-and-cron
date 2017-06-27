let fs = require('fs');
let path = require('path');
let moment = require('moment');

let outputDir = path.join(__dirname, 'output');
let outputFile = path.join(outputDir, 'index.html');

if(!fs.existsSync(outputDir)) {
	console.log('created', outputDir);
	fs.mkdirSync(outputDir);
}

let formattedDate = moment().format("hh:mm:ss on Do MMMM YYYY (dddd)");
let contents = `<h1>File created at ${formattedDate}</h1>`;


fs.writeFileSync(outputFile, contents);

