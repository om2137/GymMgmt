const mongoose = require('mongoose');

const InvoiceSchema = new mongoose.Schema({
    
    // Contact: {
    //     type: Number,
    //     required: [true,'Contact is required'],
    //     unique: [true,'Contact is already taken'],
    //     min: 1000000000,
    //     max: 9999999999
    // },
    Name: {
        type: String,
        required: [true,'Firstname is required'],
    },
    paidDate: {
        type: String,
    },
    dueDate: {
        type: String,
    },
    fees: {
        type: Number,
    },
    invoiceNumber: {
        type: Number,
        unique: [true,'Contact is already taken'],
    }
    
})

module.exports = mongoose.models.Invoice || mongoose.model('Invoice',InvoiceSchema) 