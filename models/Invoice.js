const mongoose = require('mongoose');

const InvoiceSchema = new mongoose.Schema({
    
    Name: {
        type: String,
        required: [true,'Firstname is required'],
    },
    Facility: {
        type: String,
    },
    Gender: {
        type: String,
    },
    paidDate: {
        type: String,
    },
    paidOn:{
        type: String,
    },
    dueDate: {
        type: String,
    },
    fees: {
        type: Number,
    },
    admFee: {
        type: Number,
    },
    invoiceNumber: {
        type: Number,
        unique: [true,'Contact is already taken'],
    }
    
})

module.exports = mongoose.models.Invoice || mongoose.model('Invoice',InvoiceSchema) 