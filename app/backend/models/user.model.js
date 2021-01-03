const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    trim : true,
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

userSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
})

const User = mongoose.model('User', userSchema);

module.exports = User;