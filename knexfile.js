// Update with your config settings.
require('dotenv/config');
module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/db.sqlite'
    },
    migrations:{
      directory: './src/database/migrations'
    },
    useNullAsDefault: true,
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'pg',
    connection: 'postgres://odngshrbafsvkc:a7f6e42295d12aae1499bdae7eabf42073c7d356b2bc02c345685425ef45e6a5@ec2-34-202-54-225.compute-1.amazonaws.com:5432/dc5t5sbcon2a98',
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './src/database/migrations',
      tableName: 'knex_migrations'
    }
  }

};
