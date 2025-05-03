const express = require('express');
const registerUser = require('../controller/registerUser');
const checkEmail = require('../controller/checkEmail');
const checkPassword = require('../controller/checkPassword');
const userDetails = require('../controller/userDetails');
const logout = require('../controller/logout');

const router = express.Router();

//create user API
router.post('/register', registerUser);
//check user Email
router.post('/email',checkEmail);
//check user pw
router.post('/password', checkPassword);
//login user details
router.get('/user-details', userDetails);
//logout user
router.get('/logout', logout);


module.exports = router;