const Joi = require('joi');

const course = Joi.object({
  title: Joi.string().min(10).max(100).required(),
  courseCategoryId: Joi.number().required(),
  description: Joi.string().min(10).max(1000).required(),
  objective: Joi.string().min(10).max(1000).required(),
  requirement: Joi.string().min(10).max(1000).required(),
  syllabus: Joi.string().min(20).max(10000).required(),
  language: Joi.string().valid('English', 'Nepali', 'Hindi').required(),
  price: Joi.number().min(0).max(50000).required(),
  discountPercent: Joi.number().min(0).max(100),
  authorId: Joi.number().min(1).required(),
  thumbnail: Joi.string().uri().required(),
  subtitle: Joi.string().required(),
  titleVideo: Joi.string().uri(),
});

const updateCourse = Joi.object({
  id: Joi.number().required(),
  title: Joi.string().min(10).max(100),
  courseCategoryId: Joi.number(),
  description: Joi.string().min(10).max(1000),
  objective: Joi.string().min(10).max(1000),
  requirement: Joi.string().min(10).max(1000),
  syllabus: Joi.string().min(20).max(10000),
  language: Joi.string().valid('English', 'Nepali', 'Hindi'),
  price: Joi.number().min(0).max(50000),
  discountPercent: Joi.number().min(0).max(100),
  thumbnail: Joi.string().uri(),
  subtitle: Joi.string(),
  titleVideo: Joi.string().uri(),
}).min(2);

const deleteCourse = Joi.object({
  id: Joi.number().required(),
});

module.exports = { course, updateCourse, deleteCourse };
