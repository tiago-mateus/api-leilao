const connection = require('../database/connection');

module.exports = {

    async index(request, response) {
        const bids = await connection('bids').select('*');
        return response.json(bids);
    },

    async create(request, response) {
        const { idGift, value} = request.body;
        const valor = value;
        
        const idUser = request.headers.authorization;
        
            await connection('bids').insert({
                idUser,
                idGift,
                valor,
            });

            return response.json();

    },
    
    async delete(request, response) {

        await connection('bids').delete();

        return response.status(204).send();
    }
};
