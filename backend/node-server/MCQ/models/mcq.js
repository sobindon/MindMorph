const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mcqSchema = new Schema({
  lectureId: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true,
    maxlength: 8
  },
  question: {
    type: String,
    required: true
  },
  option1: {
    type: String,
    required: true
  },
  option2: {
    type: String,
    required: true
  },
  option3: {
    type: String,
    required: true
  },
  option4: {
    type: String,
    required: true
  },
  answer: {
    type: Number,
    required: true,
    min: 1,
    max: 4,
    validate: {
      validator: Number.isInteger,
      message: '{VALUE} is not an integer value'
    }
  }
});

module.exports = mongoose.model('MCQ', mcqSchema);
