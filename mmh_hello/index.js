const hapi = require("hapi");

const server = new hapi.Server();
server.connection({
	host: "localhost",
	port: Number(process.argv[2] || 8000)
});
server.route(
{
   method:"GET",
   path:"/",
   handler:function(request,reply)
   {
reply("Hello hapi");
}

});
server.start(function(err)
{
	if(err)
	{
		console.log(err);
	}
});
