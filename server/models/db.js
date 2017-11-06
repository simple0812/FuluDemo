var Sequelize = require('sequelize');
var config = require('../config');

//可配置多个数据库
var db = new Sequelize(config.DB.database, config.DB.user, config.DB.password, {
  host: config.DB.host,
  dialect: 'sqlite',
  logging: process.env.NODE_ENV === 'development' ,
  pool: {
    max: 50,
    min: 0
  },
  // SQLite only
  storage: 'database.sqlite',
});

module.exports = db;