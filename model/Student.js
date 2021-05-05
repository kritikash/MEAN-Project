const mongoose = require('mongoose')
const Schema  = mongoose.Schema

const studentSchema = new Schema({

    rollNumber: {
        type: Number
    },
    name: {
        type: String
    },
    age: {
        type: Number
    },
    email: {
        type: String
    }
})

const Student = mongoose.model('Student', studentSchema)
module.exports = Student