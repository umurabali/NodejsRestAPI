module.exports = (app) => {
    const orders = require('../controllers/orderController.js');

    // Create an order
    app.post('/orders', orders.create);

}