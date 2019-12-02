var connection = require('../database/connectDB.js');
const TB_NAME = 'services';

function Service(data) {
    this.name = data.name;
    this.icon_url = data.icon_url;
}

Service.getAll = (req) => {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM ${TB_NAME}`, function(err, result) {
            if (err) reject(err);
            else resolve(result);
        });
    });
}

Service.create = (data) => {
    return new Promise((resolve, reject) => {
        connection.query(`INSERT INTO ${TB_NAME} SET ?`, data, function(err, result) {
            if (err) reject(err);
            else resolve(result);
        });
    });
}

module.exports = Service;
