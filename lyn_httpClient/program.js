let http=require("http");
//get has first argument as url and then callbackfunction with response from server
http.get(process.argv[2],function(res)
{
   res.setEncoding("UTF-8");
   //convert the data to text
   //res (parameter) is a node stream object that emits events "data","error","end"
   res.on("data",function(chunk)
   {
      console.log(chunk); 
   });
//   res.on("end",function()
//   {
//     //   Sconsole.log("response over"); 
//   });
 
});


// var https=require("https");
// var fs=require("fs");

// var options={
// 	hostname: "en.wikipedia.org",
// 	port: 443,
// 	path: "/wiki/George_Washington",
// 	method: "GET"
// };

// var req=https.request(options,function(res)
// {
// 	var responseBody="";

// 	console.log("Response from server started");
// 	console.log(`Server Status: ${res.statusCode}`);
// 	console.log("Response headers: %j",res.headers);
// 	res.setEncoding("UTF-8");
// 	res.once("data",function(chunk)
// 	{
// 		console.log(chunk);
// 	});
// 	res.on("end",function(){
// 		fs.writeFile("george.html",responseBody, function(err){
// 			if(err)
// 			{
// 				throw err;
// 			}
// 			console.log("File downloaded");
// 		});
// 	});
// });