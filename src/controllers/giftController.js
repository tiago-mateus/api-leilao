const connection = require('../database/connection');

module.exports = {

    async index(request, response) {
        const gifts = await connection('gifts').select('*');
        return response.json(gifts);
    },

    async create(request, response) {
        const { nome, valorInicial, caminhoImg} = request.body;
        const leiloando = false;
        await connection('gifts').insert({
            nome,
            valorInicial,
            caminhoImg,
            leiloando,
    });

        return response.json();
    },
    
    async delete(request, response) {
        const { id } = request.params;

        await connection('gifts').where('id', id).delete();

        return response.status(204).send();
    }
};
