const Joi = require('joi');

const cart = Joi.object({
    courseId:Joi.number().required(),
    userId:Joi.number().required(),
    isCheckout:Joi.boolean().default(false)
})

module.exports = { cart }