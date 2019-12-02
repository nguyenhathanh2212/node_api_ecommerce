var itemRoute = require('./item');
var shopRoute = require('./shop');
var serviceRoute = require('./service');

module.exports = function(app) {
    itemRoute(app);
    shopRoute(app);
    serviceRoute(app);
}
