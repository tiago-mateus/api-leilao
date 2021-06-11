const connection = require('../database/connection');

module.exports = {

    async index(request, response) {
        const live = await connection('live').select('url').first();
        return response.json(live.url);
    },


    async update(request, response) {
        const { url } = request.body;
        const live = await connection('live').update({url:url});
        return response.json();
    },

};
