let fs = require('fs');
let path = require('path');
let moment = require('moment');

let outputDir = path.join(__dirname, 'output');
let outputFile = path.join(outputDir, 'index.html');

if(!fs.existsSync(outputDir)) {
	console.log('created', outputDir);
	fs.mkdirSync(outputDir);
}

let contents = 'File created at ' + moment().toISOString();

fs.writeFileSync(outputFile, contents);

