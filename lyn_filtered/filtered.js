let fs = require('fs');
let path = require('path');

// console.log(process.argv);
// console.log("*******************");
// console.log(process.argv[0]);
// console.log("*******************");
// console.log(process.argv[1]);
// console.log("*******************");
// console.log(process.argv[2])
// console.log("*******************++++++++++++");
// console.log(process.argv[3]);
let extension=`.`+process.argv[3];

fs.readdir(process.argv[2], (err, list) => {
	if(err)
	{
		console.log(err);
	}
	
// console.log(list);
	//extname() returns the extension of passed file path
	//foreach 
	
  list.forEach(function(data)
  {
  	if(path.extname(data)===extension)
  	{
  		console.log(data);
  	}
  });
  });