const connection = require('../database/connection');

module.exports = {

    async historicBidsPerGift(request, response) {
        const { idGift } = request.params;
        const historic = await connection.select('b.apelido','a.valor')
        .from('bids AS a')
            .join('users AS b', 'a.idUser', '=', 'b.id')
            .join('gifts AS c', 'a.idGift', '=', 'c.id')
        .where('c.id', idGift).orderBy('a.valor', 'desc');
        return response.json(historic);
    },

};
