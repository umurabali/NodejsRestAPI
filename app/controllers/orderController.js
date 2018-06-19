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
exports.read = (req, res) => {
    Order.find()
        .then(orders => {
            res.send(orders);
        }).catch(err => {
        res.status(500).send({
            message: err.message || "Error occurred while retrieving the order."
        });
    });
};

// Update a note identified by the noteId in the request
exports.update = (req, res) => {
    // Validate Request

    // Find note and update it with the request body
    Order.findByIdAndUpdate(req.params.order_Id, {
        orderId: req.body.orderId,
        companyName: req.body.companyName,
        customerAddress: req.body.customerAddress,
        orderedItem: req.body.orderedItem,
        orderCost: req.body.orderCost,
        orderDate: req.body.orderDate
    }, {new: true})   // (new: true) means use the modified version
        .then(order => {
            if(!order) {
                return res.status(404).send({
                    message: "Order not found with id " + req.params.order_Id
                });
            }
            res.send(order);
        }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Order not found with id " + req.params.order_Id
            });
        }
    });
};

// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {
    Order.findByIdAndRemove(req.params.order_Id)
        .then(order => {
            if(!order) {
                return res.status(404).send({
                    message: "Order not found with id " + req.params.order_Id
                });
            }
            res.send({message: "Order deleted successfully!"});
        }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Order not found with id " + req.params.order_Id
            });
        }
    });
};






