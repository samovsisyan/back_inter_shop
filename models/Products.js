const Sequelize = require('sequelize');
const sequelize = require('../services/database');

class Products extends Sequelize.Model {


}

Products.init({
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

    weight: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    
    size: {
        type: Sequelize.STRING,
        allowNull: false,
    },



}, {
    sequelize,
    modelName: 'products',
    timestamps: false
});


Products.sync();


module.exports = Products;
