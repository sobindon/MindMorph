const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authSchema = require('../../validation/auth');
const prisma = require('../../../prisma/prisma');
require('dotenv').config();

const login = async(req,res) => {
  const { error, value } = authSchema.loginCredential.validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });

  try {
    // Check if a user with the email exists
    const user = await prisma.user.findFirst({
      where: {
        email: value.email,
      },
    });

    if (!user) return res.status(400).json({ message: "Email doesn't exist" });

    // Now user with email exists, so match password
    const passwordMatch = await bcrypt.compare(value.password, user.password);
    if (!passwordMatch) return res.status(400).json({ message: 'Wrong Password' });

    // Generate JWT token
    jwt.sign(
      { userId: user.id },
      process.env.JWT_SECRET_KEY,
      { expiresIn: process.env.JWT_EXPIRES_IN },
      (err, token) => {
        if (err) {
          console.error('Error generating token:', err);
          return res.status(500).json({ message: 'Failed to generate token' });
        }

        const userData = {
          fullName: user.fullName,
          email: user.email,
          userId: user.id,
          avatar: user.avatar,
          role: user.role,
        };

        console.log("Token: ",token);
        res.status(200).json({message:"Login Success"})
        return res.render('index',{userinfo:userData.fullName})
        // return res.send("logged in")
      }
    );
  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};
module.exports = login