const express = require('express');
const router = express.Router();

//controllers
const authController = require('../controllers/authController');

//middlewares
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/register',authMiddleware.validateRegister, authController.registerUser);
router.post('/login', authMiddleware.validateLogin,authController.loginUser);
// router.get('/mail', authController.sendMail_check);//not implemented yet so ignore this

module.exports = router;