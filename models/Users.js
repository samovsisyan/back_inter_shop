const Sequelize = require('sequelize');
const sequelize = require('../services/database');
const md5 = require('md5');

class Users extends Sequelize.Model {


}

Users.init({
    id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: 'username'
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,

    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: 'email'

    },
    peopleId: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'people_id',
        key: 'people_id',
    },

    role: {
        type: Sequelize.ENUM('admin', 'manager', 'payer'),
        allowNull: false,
    }

}, {
    sequelize,
    modelName: 'users',
    timestamps: false
});


Users.sync();


module.exports = Users;
