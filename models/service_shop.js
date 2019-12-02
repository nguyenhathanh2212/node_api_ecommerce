var connection = require('../database/connectDB.js');
const TB_NAME = 'service_shop';

function ServiceShop(data) {
    this.service_id = data.service_id;
    this.shop_id = data.shop_id;
}

ServiceShop.search = (query, select = []) => {
    var queryString = select.length ? `SELECT ${select.join()} FROM ${TB_NAME}` : `SELECT * FROM ${TB_NAME}`;
    var params = [];
    var whereString = [];

    if (Number.isInteger(parseInt(query.service_id))) {
        whereString.push('WHERE service_id = ?');
        params.push(query.service_id);
    }

    queryString += ' ' + whereString.join(' AND ') + ' ';

    return new Promise((resolve, reject) => {
        connection.query(queryString, params, function(err, result) {
            if (err) reject(err);
            else resolve(result);
        });
    });
}

ServiceShop.create = (data) => {
    return new Promise((resolve, reject) => {
        connection.query(`INSERT INTO ${TB_NAME} SET ?`, data, function(err, result) {
            if (err) reject(err);
            else resolve(result);
        });
    });
}

module.exports = ServiceShop;
