const Joi = require('joi')

const courseCategorySchema = Joi.object({
    name: Joi.string().min(5).max(100).required(),
    courseDomainId: Joi.number().required()
});

module.exports = courseCategorySchema;