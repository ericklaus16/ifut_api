const express = require('express');
const router = express.Router();
const allocationController = require('../controllers/allocationController');

router.get('/user/:id', allocationController.getAllocationsByUserId);
router.post('/book', allocationController.addAllocation);
router.delete('/unbook/:id', allocationController.deleteAllocation);

module.exports = router;
