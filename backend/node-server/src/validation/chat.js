const Joi = require("joi");
const { user } = require("../validation/auth");

// const messageSchema = Joi.object({
//   message: Joi.string().required(),
//   // senderId: Joi.number().integer().positive().required(),
//   receiverId: Joi.number().integer().positive().required(),
//   // conversationId: Joi.number().integer().positive().optional(),
// });

const conversationSchema = Joi.object({
  // participants: Joi.array().items(user).required(),
  // messages: Joi.array().items(messageSchema).required(),
  message: Joi.string().required(),
  // senderId: Joi.number().integer().positive().required(),
  receiverId: Joi.number().integer().positive().required(),
  // conversationId: Joi.number().integer().positive().optional(),
});

module.exports = {  conversationSchema };
