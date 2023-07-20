let express = require('express');
const router = express.Router();
let userController = require('../src/userController');

router.route('/user/save').post(userController.saveUserInfoController);

module.exports= router;