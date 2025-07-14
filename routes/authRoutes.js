const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');

router.post('/register', register);
router.post('/login', login); 
router.get('/profile', authMiddleware, getProfile); 

module.exports = router;