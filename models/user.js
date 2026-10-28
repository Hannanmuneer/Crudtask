const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true }, 
    age: { type: Number, required: true }   
});

module.exports = mongoose.model("cruduser", itemSchema);