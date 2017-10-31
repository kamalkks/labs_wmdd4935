var fs = require("fs");
var file = process.argv[2]
fs.readFile(file,function(err,content)
{
 if(err)
 {
  console.log(err);
 }
 else
 {
  let data=content.tostring();
  console.log(data);
  console.log(data.split('\n').length - 1);
 }
});
