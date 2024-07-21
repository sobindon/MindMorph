const Joi = require('joi')
const x = require('../../validation/course/courseCategory')

const courseDomain = Joi.object({
    name: Joi.string().required()
});

module.exports = { courseDomain }