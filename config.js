const path = require('path');

module.exports = {
    mysql: {
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'root',
        database: 'back_inter_shop'
    },

    "config": path.resolve('./config', 'config.json'),
    "models-path": path.resolve('./models'),
    "seeders-path": path.resolve('./seeders'),
    "migrations-path": path.resolve('./migrations')

};


module.exports = {

};