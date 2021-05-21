const connection = require('../database/connection');

module.exports = {

    //Tela ADM
    async leiloar(request, response) {
        const {id} = request.params;

        await connection('gifts')
        .where('id', id)
        .update({leiloando:1});

        return response.status(204).send();
    },

    //Tela ADM
    async arrematar(request, response) {

        const {idGift} = request.params;

            const {idUser, valor} = await connection('bids').select('idUser', 'valor').where('idGift', idGift).orderBy('valor', 'desc').first();
            console.log(idUser, valor);
            await connection('gifts')
            .where('id', idGift)
            .update({arrematado: idUser, valorFinal: valor});
            
            return response.json({status: 'Arrematado'});


    },

};
