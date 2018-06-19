module.exports = (app) => {
    const orders = require('../controllers/orderController.js');

    // Create an order
    app.post('/orders', orders.create);

    // Retrieve all orders
    app.get('/orders', orders.read);

    // Update a Note with noteId
    app.put('/orders/:order_Id', orders.update);



}