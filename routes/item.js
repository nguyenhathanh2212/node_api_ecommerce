var ItemController = require('../controllers/itemController');

module.exports = function(app) {
    app.get('/items', function(req, res) {
        ItemController.search(req, res);
    });
    app.get('/items/:id', function(req, res) {
        ItemController.findById(req, res);
    });
}
