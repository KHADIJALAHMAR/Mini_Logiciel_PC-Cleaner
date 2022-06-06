const express = require('express');
const router = express.Router();
const UserController = require('../controller/UserController');

// Créate Route Login

router.route('/login')
.post(UserController.Login);


// Créate Route Register

router.route('/register')
.post(UserController.Register);


module.exports = router;