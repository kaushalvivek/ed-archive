const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const metaSchema = new Schema({
  attr: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  }
})

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  metadata: [metaSchema]
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;