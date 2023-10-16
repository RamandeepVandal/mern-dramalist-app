const express = require('express');
const { getDrama, addDrama, deleteDrama } = require('../controllers/dramaControllers');
const { registerUser, userLogin } = require('../controllers/userController');

// create router
const router = express.Router();

// DRAMA ROUTES

// get and post requests
router.route('/').get(getDrama).post(addDrama);
// put and delete requests
router.route('/:id').delete(deleteDrama);


// USER ROUTES
router.post('/register').post(registerUser);
router.post('/login').post(userLogin);

module.exports = router;