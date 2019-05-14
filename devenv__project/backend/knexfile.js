const credentials = require('./mysql_config/mysql-credentials-local.js');

module.exports = {

  development: {
    client: 'mysql2',
    connection: {
      host : credentials.host,
      user : credentials.user,
      password : credentials.password,
      database : credentials.database
    }
  },

  staging: {
  },

  production: {
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      database: 'toxic_tracker'
    },
    pool: {
      min: 2,
      max: 10
    }
  }
};
