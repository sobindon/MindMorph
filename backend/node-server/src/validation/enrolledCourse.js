const Joi = require('joi');

const enrolledCourse = Joi.object({
    courseId: Joi.number().required(),
    userId: Joi.number().required(),
})

module.exports = { enrolledCourse }