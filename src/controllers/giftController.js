const connection = require('../database/connection');

module.exports = {

    async index(request, response) {
        const gifts = await connection('gifts').select('*');
        return response.json(gifts);
    },

    async create(request, response) {
        const { nome, valor: valorInicial } = request.body;
        const { location: caminhoImg = ''} =  request.file;
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
        console.log(id);
        await connection('gifts').where('id', id).delete();

        return response.status(204).send();
    }
};
