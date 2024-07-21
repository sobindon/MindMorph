const Joi = require('joi');

const mcqValidationSchema = Joi.object({
  lectureId: Joi.string().required(),
  time: Joi.string().length(8).required(), // Ensuring time is a string with a length of 8
  question: Joi.string().required(),
  option1: Joi.string().required(),
  option2: Joi.string().required(),
  option3: Joi.string().required(),
  option4: Joi.string().required(),
  answer: Joi.number().integer().min(1).max(4).required() // Ensuring answer is an integer between 1 and 4
});

const mcqUpdateValidationSchema = Joi.object({
  mcqId:Joi.string().required(),
  lectureId: Joi.string(),
  time: Joi.string().length(8), // Ensuring time is a string with a length of 8
  question: Joi.string(),
  option1: Joi.string(),
  option2: Joi.string(),
  option3: Joi.string(),
  option4: Joi.string(),
  answer: Joi.number().integer().min(1).max(4) // Ensuring answer is an integer between 1 and 4
});

module.exports = {mcqValidationSchema,mcqUpdateValidationSchema};
