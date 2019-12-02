var ItemModel = require('../models/item.js');

const search = (req, res) => {
    ItemModel.search(req.query).then((data) => {
        res.send({
            count_result: data.length,
            results: data
        });
    }).catch((err) => {
        res.send(err);
    });
}

const findById = (req, res) => {
    ItemModel.findById(req.params.id).then((data) => {
        res.send({
            count_result: data.length,
            results: data
        });
    }).catch((err) => {
        res.send(err);
    });
}

module.exports = {
    search,
    findById,
}
