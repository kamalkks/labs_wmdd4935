const hapi = require('hapi');
const joi = require('joi');

const langara = new hapi.Server();

langara.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});

langara.route({
    method: 'POST',
    path: '/login',
    config: {
        handler: function(request, reply) {
            reply('login successful');
        },
        validate: {
            payload: joi.object({
                isGuest: joi.boolean().required(),
                username: joi.string().when('isGuest', { is: false, then: joi.required() }),
                password: joi.string().alphanum(),
                accessToken: joi.string().alphanum()
            }).options({ allowUnknown: true })
            .without('password', 'accessToken')
        }
    }
});

langara.start((err) => {
    if (err) throw err;
});
