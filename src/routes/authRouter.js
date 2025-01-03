const express = require('express');
const router = express.Router();

//controllers
const authController = require('../controllers/authController');

//middlewares
const authMiddleware = require('../middlewares/authMiddleware');

router.use(authMiddleware.validateUsername);
router.post('/register', authController.registerUser);
router.post('/login', authController.loginUser);
// router.get('/mail', authController.sendMail_check);//not implemented yet so ignore this

module.exports = router;