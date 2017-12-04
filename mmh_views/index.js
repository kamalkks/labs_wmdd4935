const path = require('path');
const hapi = require('hapi');
const vision = require('vision');
const langara = new hapi.Server();

langara.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});

langara.register(vision, (err) => {
    if (err) throw err;
});

langara.views({
    engines: {
        html: require('handlebars')
    },
    path: path.join(__dirname, 'templates')
});

langara.route({
    method: 'GET',
    path: '/',
    handler: {
        view: 'lotus.html'
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
