const mongoose = require('mongoose');

const MemberSchema = new mongoose.Schema({
    Firstname: {
        type: String,
        required: [true,'Firstname is required'],
    },
    Middlename: {
        type: String,
        required: [true,'Middlename is required'],
    },
    Lastname: {
        type: String,
        required: [true,'Lastname is required'],
    },
    Address: {
        type: String,
    },
    Contact: {
        type: Number,
        required: [true,'Contact is required'],
        unique: [true,'Contact is already taken'],
        min: 1000000000,
        max: 9999999999
    },
    DoB: {
        type: Date,
    },
    // age:{
    //     type: Number,
    // },
    Gender: {
        type: String,
    },
    Mstat: {
        type: String,
    },
    Avatar: {
        type : String,
    }
})

module.exports = mongoose.models.Member || mongoose.model('Member',MemberSchema) 