const hapi=require("hapi");
const server = new hapi.Server();
server.connection({
	port:Number(process.argv[2]||8080),
	host:"localhost"
})
server.route({
	method:"GET",
	path:"/{diamond}",
	handler:function(request,reply)
	{
reply("Hello"+" " +encodeURIComponent(request.params.diamond));
	}
});
server.start(function(err)
{
	if(err)
	{
		console.log(err);
	}
})
