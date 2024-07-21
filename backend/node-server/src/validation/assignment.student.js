const Joi = require('joi');

const assignmentSubmition = Joi.object({
    assignmentId: Joi.number().required(),
    studentId:Joi.number().required(),
    attachment: Joi.string().required(),
    comment: Joi.string()
});

module.exports = { assignmentSubmition }