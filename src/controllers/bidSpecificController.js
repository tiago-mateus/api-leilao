const connection = require('../database/connection');

module.exports = {


    async historics(id){
        const histor = await connection.select('b.apelido','a.valor', 'a.idGift')
        .from('bids AS a')
            .join('users AS b', 'a.idUser', '=', 'b.id')
            .join('gifts AS c', 'a.idGift', '=', 'c.id')
        .where('c.id', id).orderBy('a.valor', 'desc');
        return histor;
    },

    async historicBidsPerGift(request, response) {
        const { idGift } = request.params;

        const historic = await connection.select('b.apelido','a.valor', 'a.idGift')
        .from('bids AS a')
            .join('users AS b', 'a.idUser', '=', 'b.id')
            .join('gifts AS c', 'a.idGift', '=', 'c.id')
        .where('c.id', idGift).orderBy('a.valor', 'desc');

        const data = {id: 1, historic: historic}
        return response.json(data);
    },
    async maxBid(request, response) {
        const { idGift } = request.params;
        try{
        const {valor}  = await connection('bids').select('valor').where('idGift', idGift).orderBy('valor', 'desc').first();
        return response.json(valor);

        }catch{
            return response.json();
        }

    },

};
