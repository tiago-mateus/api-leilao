const connection = require('../database/connection');

module.exports = {

    async index(request, response) {
        const users = await connection('users').select('*');
        return response.json(users);
    },

    async userInfo(request, response) {
        const {id }= request.params;
        console.log(id);
        const users = await connection('users').where('id', id).select('*');
        console.log(users);
        return response.json(users);
    },

    async create(request, response) {
        const { nome, apelido, telefone1, telefone2, cpf, senha, endereco, bairro, cidade } = request.body;
        console.log(cpf);
        await connection('users').insert({
            nome,
            apelido,
            telefone1,
            telefone2,
            cpf,
            senha,
            endereco,
            bairro,
            cidade,
        });

        return response.json();
    }
};
