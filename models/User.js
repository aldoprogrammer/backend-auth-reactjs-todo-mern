const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: String,
    password: String,
});

const UsersModel = mongoose.model("User", UserSchema); // Adjusted the model name here
module.exports = UsersModel;
