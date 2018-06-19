const Order = require('../models/order.js');

// POST
exports.create = (req, res) => {

    // Create an order
    const order = new Order({
        orderId: req.body.orderId,
        companyName: req.body.companyName,
        customerAddress: req.body.customerAddress,
        orderedItem: req.body.orderedItem,
        orderCost: req.body.orderCost,
        orderDate: req.body.orderDate

    });

    // Save order in the database
    order.save()
        .then(data => {
            res.send(data);
            console.log("Order saved!")
        }).catch(err => {
        res.status(500).send({
            message: err.message || "Error occurred while creating the order."
        });
    });
};

//Retrieve all orders from database
exports.findAll = (req, res) => {
    Order.find()
        .then(orders => {
            res.send(orders);
        }).catch(err => {
        res.status(500).send({
            message: err.message || "Error occurred while retrieving the order."
        });
    });
};

