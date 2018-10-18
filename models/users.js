var mongoose = require('mongoose');

// Define our beer schema
var UserSchema   = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    validate: {
      validator: function(v) {
        return /^[a-zA-Z]*$/.test(v);
      },
      message: props => `${props.value} is not valid name!`
    }
  },
  mobile: {
    type: Number,
    required: true,
    validate: {
      validator: function(v) {
        return /^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$/.test(v);
      },
      message: props => `${props.value} is not a valid mobile number!`
    },
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function(v) {
        return /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(v);
      },
      message: props => `${props.value} is not valid email!`
    }
  }
});

// Export the Mongoose model
module.exports = mongoose.model('user', UserSchema);