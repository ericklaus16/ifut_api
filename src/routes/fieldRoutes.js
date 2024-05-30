const express = require('express');
const router = express.Router();
const fieldController = require('../controllers/fieldController');

router.get('/', fieldController.getFields);

module.exports = router;
