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
        minlength: 10,
        maxlength: [10,'Contact must be 10 digits'],
    },
    // // DateOfBirth: {
    //     type: Date,
    // },
    // age:{
    //     type: Number,
    // },
//     gender: {
//         type: String,
//     },
//     marriedStatus: {
//         type: String,
//     }
})

module.exports = mongoose.models.Member || mongoose.model('Member',MemberSchema) 