const connection = require('../database/connection');

module.exports = {

    async create(request, response) {
        const { cpf, senha } = request.body;
       const user =  await connection('users')
            .where('cpf', cpf).andWhere('senha', senha)
            .first();


        if(!user){
            return response.status(400);
        }

        return response.status(200).json({'id': user.id});
    }
};
