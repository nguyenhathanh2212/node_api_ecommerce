var connection = require('../database/connectDB.js');
var ServiceShopModel = require('./service_shop.js');
var ItemShopModel = require('./item_shop.js');

const TB_NAME = 'items';
const TB_ITEM_SHOP_NAME = 'item_shop';

function Item(data) {
    this.name = data.name;
}

Item.search = async (query) => {
    var params = [];
    var whereString = [];
    var queryString = `SELECT * FROM ${TB_NAME}`;

    if (Number.isInteger(parseInt(query.service_id)) && query.service_id > 0) {
        whereString.push('WHERE id IN (?)');
        let itemIds = null;
        let shopIds = await ServiceShopModel.search({ service_id: query.service_id }, ['shop_id']);
        shopIds = shopIds.length ? shopIds.map(({ shop_id }) => shop_id) : [];

        if (shopIds.length) {
            itemIds = await ItemShopModel.search({ shop_id: shopIds }, ['item_id']);
            itemIds = itemIds.length ? itemIds.map(({ item_id }) => item_id) : null;
        }

        params.push(itemIds);
    }

    queryString += ' ' + whereString.join(' AND ') + ' ';

    return new Promise((resolve, reject) => {
        connection.query(queryString, params, function(err, result) {
            if (err) reject(err);
            else resolve(result);
        });
    });

}

Item.findById = (id) => {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM ${TB_NAME} WHERE id = ?`, [id], function(err, result) {
            if (err) reject(err);
            else resolve(result);
        });
    });
}

Item.create = (data) => {
    return new Promise((resolve, reject) => {
        connection.query(`INSERT INTO ${TB_NAME} SET ?`, data, function(err, result) {
            if (err) reject(err);
            else resolve(result);
        });
    });
}

module.exports = Item;
