// let http=require("http");
// let collection="";
// http.get(process.argv[2],function(res)
// {
// res.on("data",function(chunk)
// {
// collection=collection+chunk;
// });
// res.on("end",function()
// {
// 	console.log(collection.length);
// 	console.log(collection);
// })

// });

let http =require("http");
let bl=require("bl");

http.get(process.argv[2],function(res)
{
    res.pipe(bl(function(err,chunk)
    {
        if(err)
        {
            console.log(err);
        }
        chunk=chunk.toString();
        console.log(chunk.length);
        console.log(chunk);
    }))
})
