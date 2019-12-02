var ShopModel = require('../models/shop.js');

const getAll = (req, res) => {
    ItemModel.getAll(req).then((data) => {
        res.send({
            count_result: data.length,
            results: data
        });
    }).catch((err) => {
        res.send(err);
    });
}

module.exports = {
    getAll,
}
