var mongoose = require('mongoose');

// Define our beer schema
var UserSchema   = new mongoose.Schema({
  name: String,
  mobile: Number,
  email: String
});

// Export the Mongoose model
module.exports = mongoose.model('user', UserSchema);