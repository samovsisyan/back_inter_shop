const Sequelize = require('sequelize');
const sequelize = require('../services/database');

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
        allowNull: false,
    },
    last_name: {
        type: Sequelize.STRING,
        allowNull: false,
    },




}, {
    sequelize,
    modelName: 'peoples',
    timestamps: false
});


Peoples.sync();


module.exports = Peoples;
