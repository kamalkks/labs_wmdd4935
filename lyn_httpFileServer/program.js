  let http = require("http")
  let fs=require("fs");
     let server = http.createServer(function (req, res) {
         //res is what we will give back to the request we receive from the client and we write the res
       // request handling logic...
       res.writeHead(200,{"Content-Type":"text/plain"})
       let readStream=fs.createReadStream(process.argv[3]);
       readStream.pipe(res);
          
     })
     server.listen(process.argv[2])