const express = require('express');
const router= express.Router();

const controller = require('../controller/userController');

router.route('/').post(controller.registerUser);

module.exports = router;