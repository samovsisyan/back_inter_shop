const Sequelize = require('sequelize');
const sequelize = require('../services/database');
// const Users = require('./Users');

class Peoples extends Sequelize.Model {


}

Peoples.init({
    id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    l_name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    m_name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    phone: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    passport: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: 'passport',
    },
    address: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    deleted: {
        type: Sequelize.ENUM('0', '1'),
        allowNull: false,
        defaultValue: '0',
    },

}, {
    sequelize,
    modelName: 'peoples',
    timestamps: false
});


Peoples.sync();


module.exports = Peoples;
