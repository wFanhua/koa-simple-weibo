const options = {
  define: {
    timestamps: true,
    underscored: true,
  },
};

module.exports = {
  development: {
    username: 'wfh',
    password: '123456',
    database: 'weibo_dev',
    host: '127.0.0.1',
    dialect: 'mysql',
    operatorsAliases: false,
    options,
  },
  test: {
    username: 'wfh',
    password: null,
    database: 'weibo_test',
    host: '127.0.0.1',
    dialect: 'mysql',
    operatorsAliases: false,
    options,
  },
  production: {
    username: process.env.DB_USER_NAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST || '127.0.0.1',
    port: process.env.DB_PORT || '3306',
    dialect: 'mysql',
    operatorsAliases: false,
    options: {
      ...options,
      pool: {
        max: process.env.DB_POOL_MAX || 5,
        min: process.env.DB_POOL_MIN || 0,
      },
    },
  },
};
