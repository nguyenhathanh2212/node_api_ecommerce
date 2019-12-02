var ServiceController = require('../controllers/serviceController');

module.exports = function(app) {
    app.get('/services', function(req, res) {
        ServiceController.getAll(req, res);
    });
}
