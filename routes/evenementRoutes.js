const express = require('express');
const router = express.Router();
const evenementController = require('../controllers/evenementController');

router.get('/', evenementController.getAll);
router.get('/:id', evenementController.getById);
router.post('/', evenementController.create);
router.put('/:id', evenementController.update);
router.delete('/:id', evenementController.remove);

module.exports = router;
