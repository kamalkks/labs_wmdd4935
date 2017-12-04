const hapi = require('hapi');
const joi = require('joi');


const langara = new hapi.Server();

langara.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});

langara.route({
    method: 'GET',
    path: '/chickens/{breed}',
    config: {
        handler: function(request, reply) {
        },
        validate: {
            params: {
               breed: joi.string().min(3).max(10).required()
            }
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
