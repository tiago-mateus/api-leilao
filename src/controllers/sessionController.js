const connection = require('../database/connection');

module.exports = {

    async create(request, response) {

        const { cpf, senha } = request.body;
        const user =  await connection('users')
            .where('cpf', cpf).andWhere('senha', senha)
            .first();


        if(!user){
            console.log("teste");
            return response.json("erro");
        }

        return response.json({'id': user.id});
    }
};
