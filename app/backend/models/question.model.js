const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const metaSchema = new Schema({
 attr:{
     type:String,
     required:true,
 },
 value:{
     type:String,
     required:true,
 }
})

const optionSchema = new Schema({
    value:{
        type: String,
        required: true,
    },
    correct:{
        type:Boolean,
        required: true,
    },
    metadata:[metaSchema],
})

const questionSchema = new Schema({
  imageUrl: {
    type: String,
    required: false,
  },
  questionText:{
      type: String,
      required: true,
  },
  options:[optionSchema],
  metadata: [metaSchema],
}, {
  timestamps: true,
});

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;
