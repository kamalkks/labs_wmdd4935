const fs = require('fs');
const path = require('path');
const hapi = require('hapi');
const rot = require('rot13-transform');

const langara = new hapi.Server();

langara.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});

langara.route({
    method: 'GET',
    path: '/',
    config: {
        handler: function(request, reply) {
             
            reply(fs.createReadStream(path.join(__dirname, 'lotus.txt')).pipe(rot()));
        }
    }
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
