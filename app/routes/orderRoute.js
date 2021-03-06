module.exports = (app) => {
    const orders = require('../controllers/orderController.js');

    // Create an order
    app.post('/orders', orders.create);

    // Retrieve all orders
    app.get('/orders', orders.read);

    // Update an order with id generated by Mongo
    app.put('/orders/:order_Id', orders.update);

    // Delete an order
    app.delete('/orders/:order_Id', orders.delete);





}