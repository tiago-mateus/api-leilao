const connection = require('../database/connection');
const bidSpecificController = require('./bidSpecificController');

module.exports = {

    //Tela User
    async salegift(request, response) {
                    let gifts = await connection('gifts').where('leiloando', 1).whereNull('arrematado').select('*');
                    let histor = await connection.select('b.apelido','a.valor', 'a.idGift')
                    .from('bids AS a')
                        .join('users AS b', 'a.idUser', '=', 'b.id')
                        .join('gifts AS c', 'a.idGift', '=', 'c.id')
                    .where('c.leiloando', 1).whereNull('c.arrematado').orderBy('a.valor', 'desc');


        let data = [{"gift": gifts, hist: histor}];
        return response.json(data);
    },  

     async bidsGiftLive(request, response) {
        let gifts = await connection('gifts').where('leiloando', 1).whereNull('arrematado').select('*');

        let histor = await connection.select('b.apelido','a.valor', 'a.idGift')
        .from('bids AS a')
            .join('users AS b', 'a.idUser', '=', 'b.id')
            .join('gifts AS c', 'a.idGift', '=', 'c.id')
        .where('c.leiloando', 1).whereNull('c.arrematado').orderBy('a.valor', 'desc');



let data = [{"gift": gifts, hist: histor}];
return response.json(data);
},  
    async salegiftadm(request, response) {
        let gifts = await connection('gifts').select('*');
        let histor = await connection.select('b.apelido','a.valor', 'a.idGift')
        .from('bids AS a')
            .join('users AS b', 'a.idUser', '=', 'b.id')
            .join('gifts AS c', 'a.idGift', '=', 'c.id').orderBy('a.valor', 'desc');


    let data = [{"gift": gifts, hist: histor}];
    return response.json(data);
    },  
    //Tela ADM
    async leiloar(request, response) {
        const {id} = request.params;
        const {leiloando} = request.body;
        console.log(leiloando)
        await connection('gifts')
        .where('id', id)
        .update({leiloando: leiloando });

        return response.status(204).send();
    },

    async editarPrenda(request, response) {
        const {id} = request.params;
        const {nome, valor}  = request.body;

        if(request.file == null){
            await connection('gifts')
            .where('id', id)
            .update({nome: nome, valorInicial: valor});
        }else{

            const { location: url = ''} =  request.file;
            await connection('gifts')
            .where('id', id)
            .update({nome: nome, valorInicial: valor, caminhoImg: url});
        }


  

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
