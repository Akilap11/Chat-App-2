const express = require('express');
const registerUser = require('../controller/registerUser');
const checkEmail = require('../controller/checkEmail');
const checkPassword = require('../controller/checkPassword');

const router = express.Router();

//create user API
router.post('/register', registerUser);
//check user Email
router.post('/email',checkEmail);
//check user pw
router.post('/password', checkPassword);

module.exports = router;