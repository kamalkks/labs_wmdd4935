const hapi = require("hapi");

const diamond = new hapi.Server();
diamond.connection({
	host: "localhost",
	port: Number(process.argv[2] || 8080)
});
diamond.register(require("inert"),function(err)
{
    if (err) throw err;
	diamond.route(
{
   method:"GET",
   path:"/",
   handler:function(request,reply)
   {
reply.file("index.html");
}

});

});

diamond.start(function(err)
{
	if(err)
	{
		console.log(err);
	}
});
