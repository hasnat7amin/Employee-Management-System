const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    name: { type: String, required: true, max: [127, "Max Length is 127 characters"] },
    age: { type: Number, required: true },
    cnic: { type: Number, required: true },
    email: { type: String, required: true },
    picture: { type: String },
    salary: { type: Number },
    designation: { type: String, required: true },
    token: { type: String, required: true }
})

const Employee = mongoose.model("employee", EmployeeSchema)

module.exports = Employee