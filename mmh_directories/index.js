const path = require('path');
const hapi=require('hapi');
const langara = new hapi.Server();

langara.connection({
    port:Number(process.argv[2] || 8080),
    host:'localhost'
});
langara.register(require('inert'), (err) => {

    if (err) {
        throw err;
    }

    langara.route({
        method: 'GET',
        path: '/foo/bar/baz/{file}',
        handler:{
        directory: {
            path: path.join(__dirname, 'public')
        }
    }
});
  });

langara.start(function(err)
{
if(err)
{
    console.log("Hey we have an error here");

}
else{
     console.log(`Server running at: ${langara.info.uri}`);
    console.log('Hello world :${server.info.uri}');
}
});
