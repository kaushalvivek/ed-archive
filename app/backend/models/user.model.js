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
    required: true
  },
  name: { type: String },
  gender: { type: String },
  city: { type: String },
  school: { type: String },
  coaching: { type: String },
  schoolClass: { type: String },
  coachingBatch: { type: String },
  targetExam: { type: [String] },
  weeklyHoursCommitted: { type: Number }
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;