const knexfile = require('../../knexfile');
//const knex = require('knex')(knexfile.development);
const knex = require('knex')(knexfile.production);
//const connection = knex(process.env.NODE_ENV);
module.exports = knex;