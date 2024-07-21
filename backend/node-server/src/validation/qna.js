const Joi = require('joi');

const qna = Joi.object({
    userId: Joi.number().required(),
    courseId: Joi.number().required(),
    title: Joi.string().required(),
    description: Joi.string().required(),
    responseCount: Joi.number(),
})

const qnaReply = Joi.object({
    userId: Joi.number().required(),
    description: Joi.string().required(),
    idQnA: Joi.number().required()
})
module.exports = { qna, qnaReply }