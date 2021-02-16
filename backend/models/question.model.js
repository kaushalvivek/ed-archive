const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const optionSchema = new Schema({
  text: {type: String},
  imageUrl : { type: String }, 
  isCorrect: {
    type: Boolean,
  },
  tags: [String]
})

const questionSchema = new Schema({
  text: { type: String },
  imageUrl: { type: String },
  options: [optionSchema],
  hint: String,
  tags: [String],
  subject : String,
  chapter: String,
  difficulty: mongoose.Decimal128,
  screenshotUrl : {type: String},
  solutionText: {type: String},
  solutionImageUrl : {type: String},
  author : {type: String}
}, {
  timestamps: true,
});

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;
