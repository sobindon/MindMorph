const { OAuthProvider } = require('@prisma/client');
const Joi = require('joi');

const user = Joi.object({
  fullName: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
  role: Joi.string().valid('STUDENT', 'INSTRUCTOR', 'ADMIN').required(),
  avatar: Joi.string().uri(),
  birthdate: Joi.date().iso(),
  oauthId: Joi.string(),
  OAuthProvider: Joi.string()
});

const loginCredential = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
});

const oauth2 = Joi.object({
  googleId: Joi.string(),
  displayName: Joi.string(),
  firstName: Joi.string(),
  lastName: Joi.string(),
  image: Joi.string().uri(),
  email: Joi.string().email()
})

module.exports = { user, loginCredential, oauth2 };
