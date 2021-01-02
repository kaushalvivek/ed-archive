const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  school: {
    type: String,
    required: true,
  },
  coaching: {
    type: String,
    required: true,
  },
  schoolClass: {
    type: String,
    required: true,
  },
  coachingBatch: {
    type: String,
    required: true,
  },
  targetExam: {
    type: [String],
    required: true,
  },
  weeklyHoursCommitted: {
    type: Number,
    required: true,
  }
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;