const Sequelize = require('sequelize');
const config = require('./config.js');

const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    {
        host: config.host,
        dialect: config.dialect,
        // Additional Sequelize options if needed
    }
);

module.exports = sequelize;