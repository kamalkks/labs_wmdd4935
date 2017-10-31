let http=require("http");
let bl=require("bl");
let one=[];
    
let path=[process.argv[2],process.argv[3],process.argv[4]];
for(let i=2;i<=4;i++)
{
	result(i);
}
function result(x)
{
http.get(process.argv[x],function(res)
{
     res.pipe(bl(function(err,chunk)
     {
         if(err)
         {
            console.log(err);
        }
        chunk=chunk.toString();
////chunck is concatenation of the res 
        // console.log(chunk.length);
       
         one[x]=chunk;

          if(x==4)
          {
          	printout();
          }

    }))
});
}
function printout()
{
	for(let i=2;i<=4;i++)
	{
	console.log(one[i]);
    }
}
