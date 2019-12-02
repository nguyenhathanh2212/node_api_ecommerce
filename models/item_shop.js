var connection = require('../database/connectDB.js');
const TB_NAME = 'item_shop';

function ItemShop(data) {
    this.shop_id = data.shop_id;
    this.item_id = data.item_id;
    this.quantity = data.quantity;
    this.price = data.price;
}

ItemShop.search = (query, select = []) => {
    var queryString = select.length ? `SELECT ${select.join()} FROM ${TB_NAME}` : `SELECT * FROM ${TB_NAME}`;
    var params = [];
    var whereString = [];

    if (query.shop_id.length) {
        whereString.push('WHERE shop_id IN (?)');
        params.push(query.shop_id.join());
    }

    queryString += ' ' + whereString.join(' AND ') + ' ';

    return new Promise((resolve, reject) => {
        connection.query(queryString, params, function(err, result) {
            if (err) reject(err);
            else resolve(result);
        });
    });
}

ItemShop.create = (data) => {
    return new Promise((resolve, reject) => {
        connection.query(`INSERT INTO ${TB_NAME} SET ?`, data, function(err, result) {
            if (err) reject(err);
            else resolve(result);
        });
    });
}

module.exports = ItemShop;
