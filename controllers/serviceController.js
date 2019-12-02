var ShopModel = require('../models/service.js');

const getAll = (req, res) => {
    ShopModel.getAll(req).then((data) => {
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
