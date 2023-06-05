const express = require('express');
const { getDrama, addDrama, editDrama, deleteDrama } = require('../controllers/dramaControllers');

// create router
const router = express.Router();

// get and post requests
router.route('/').get(getDrama).post(addDrama);

// put and delete requests
router.route('/:id').put(editDrama).delete(deleteDrama);

module.exports = router;