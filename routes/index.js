const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const addressController = require('../controllers/addressController');

// Route for registering a user
router.post('/register', userController.registerUser);

module.exports = router;
