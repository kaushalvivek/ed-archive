const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const interactionSchema = new Schema({
  userId: {
    type: String,
    required: true,
  },
  questionId: {
    type: String,
    required: true,
  },
  selectedOptionIds: [String],
  entryTimeStamp: { type: Date },
  exitTimeStamp: { type: Date }
}, {
  timestamps: true,
});

const Interaction = mongoose.model('Interaction', interactionSchema);

module.exports = Interaction;