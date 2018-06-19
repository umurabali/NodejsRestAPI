const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    orderId: String,
    companyName: String,
    customerAddress: String,
    orderedItem: String,
    orderCost: String,
    orderDate: String

}, {
    timestamps: true // mongoDB creates createdAt and updatedAt auto
});

module.exports = mongoose.model('Order', orderSchema);
