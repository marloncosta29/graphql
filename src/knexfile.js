// Update with your config settings.

module.exports = {
  client: 'mysql',
  connection: {
      database: 'postgres',
      user:     'postgres',
      password: '123456'
    },
  pool: {
      min: 2,
      max: 10
    },
  migrations: {
      tableName: 'knex_migrations'
    }
};
