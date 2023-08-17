const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: String,
  email: String,
  destination: String,
  travelers: Number,
  budget: Number
});

const UserModel = mongoose.model('User', userSchema);

module.exports = {UserModel};
