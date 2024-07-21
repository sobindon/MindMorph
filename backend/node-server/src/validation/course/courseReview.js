const Joi = require('joi')


const courseReview = Joi.object({
    courseId: Joi.number().required(),
    userId: Joi.number().required(),
    description: Joi.string(),
    rating: Joi.number().required(),

})
const courseReviewReply = Joi.object({
    userId: Joi.number().required(),
    description: Joi.string(),


})

module.exports = { courseReview, courseReviewReply }