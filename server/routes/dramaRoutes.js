const express = require('express');
const { getDrama, addDrama, deleteDrama } = require('../controllers/dramaControllers');

// create router
const router = express.Router();

// get and post requests
router.route('/').get(getDrama).post(addDrama);

// put and delete requests
router.route('/:id').delete(deleteDrama);

module.exports = router;