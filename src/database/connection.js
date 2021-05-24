const knex = require('knex');
const config = require('../../knexfile');

const connection = knex(process.env.NODE_ENV);

module.exports = connection;