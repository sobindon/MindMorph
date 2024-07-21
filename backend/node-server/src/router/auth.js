const express = require('express');
const router = express.Router();

const signup = require('../controller/auth/signup');
const upload = require('../middleware/fileUpload');
const login = require('../controller/auth/login');
const logout = require('../controller/auth/logout')

router.post('/signup', upload('userAvatar', 'avatar'), signup);
router.post('/login', login);
router.get('/logout',logout);

module.exports = router;
