let http =require("http");
let collection="";
let server=http.createServer(function(req,res)
{
    if(req.method=="POST")

    {
        req.on("data",function(chunk)
        {
             // console.log(chunk);
            collection+=chunk;
            
        });
    }
    
     req.on('end', function () { 
        res.writeHead(200,{"Content-type":"text/plain"});
         res.write(collection.toUpperCase());
    });

   
});
server.listen(process.argv[2])