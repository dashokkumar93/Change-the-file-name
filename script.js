var testFolder = ".";
var fs = require("fs");
var count = 0;
fs.readdir(testFolder, (err, files) => {
	files.forEach(file => {
		count++;
		var path = require("path")
		var extension = path.extname(testFolder + file);

		fs.rename(file, count + extension, (err) => {
			console.log(err)
		});
	})
})
