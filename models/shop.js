var connection = require('../database/connectDB.js');
const TB_NAME = 'shops';

function Shop(data) {
    this.name = data.name;
    this.address = data.address;
}

Shop.getAll = (req) => {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM ${TB_NAME}`, function(err, result) {
            if (err) reject(err);
            else resolve(result);
        });
    });
}

Shop.create = (data) => {
    return new Promise((resolve, reject) => {
        connection.query(`INSERT INTO ${TB_NAME} SET ?`, data, function(err, result) {
            if (err) reject(err);
            else resolve(result);
        });
    });
}

module.exports = Shop;
