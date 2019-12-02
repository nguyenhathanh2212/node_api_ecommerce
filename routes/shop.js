var ShopController = require('../controllers/shopController');

module.exports = function(app) {
    app.get('/shops', function(req, res) {
        ShopController.getAll(req, res);
    });
}
