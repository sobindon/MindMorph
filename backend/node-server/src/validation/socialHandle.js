const Joi = require('joi')

const socialHandleSchema = Joi.object({
    userId: Joi.number().required(),
    website: Joi.string().allow('').pattern(new RegExp("^(https?:\\/\\/)?.+$")),
    twitter: Joi.string().allow('').pattern(new RegExp("^https:\\/\\/twitter\\.com\\/([a-zA-Z0-9_]+)\\/?(\\?.*)?$")),
    youtube: Joi.string().allow('').pattern(new RegExp("^https:\\/\\/www\\.youtube\\.com\\/user\\/([a-zA-Z0-9_-]+)\\/?(\\?.*)?$")),
    linkedin: Joi.string().allow('').pattern(new RegExp("^https:\\/\\/www\\.linkedin\\.com\\/in\\/([a-zA-Z0-9-]+)\\/?(\\?.*)?$")),
    facebook: Joi.string().allow('').pattern(new RegExp("^https:\\/\\/www\\.facebook\\.com\\/([a-zA-Z0-9.]+)\\/?(\\?.*)?$"))
}).min(1).max(6);

module.exports = { socialHandleSchema }


