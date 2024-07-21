const bcrypt = require('bcrypt');
const authSchema = require('../../validation/auth');
const serverError = require('../../handler/auth');
const prisma = require('../../../prisma/prisma');
const deleteFile = require('../../middleware/deleteFile');

// Express route for signup
const signup = async (req, res) => {
  const { error, value } = authSchema.user.validate(req.body);

  // If Joi validation fails, send an error response
  if (error) return res.status(400).json({ message: error.details[0].message });

  // Check if a user with the same email already exists
  const user = await prisma.user.findUnique({
    where: {
      email: value.email,
    },
  });
  if (user) {
    deleteFile(req.file.path);
    return res.status(409).json({ message: 'Email already exists' });
  }

  const hash = await bcrypt.hash(value.password, 10);

  try {
    // Insert a new user in the database using Prisma ORM
    const avatarPath = req.file.path.replaceAll('\\', '/'); // For windwos device
    await prisma.user.create({
      data: { ...value, password: hash, avatar: avatarPath },
    });
    // Send a success response with the created user object
    res.status(201).json({
      message: 'User Created',
      data: { ...value, avatar: req.file.path },
    });
  } catch (e) {
    // console.error(e);
    const { status, message } = serverError.signupHandler(e);
    return res.status(status).json({ message: message });
  }
};
module.exports = signup
