const Sequelize = require('sequelize');
const sequelize = require('../services/database');

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
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,

    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,

    },
    peopleId: {
        type: Sequelize.STRING,
        allowNull: false,

    },

    // role: {
    //     type: Sequelize.ENUM('admin', 'manager', 'shipper'),
    //     allowNull: false,
    // }

}, {
    sequelize,
    modelName: 'users',
    timestamps: false
});


Users.sync();


module.exports = Users;
