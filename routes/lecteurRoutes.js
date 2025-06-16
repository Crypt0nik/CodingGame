const express = require('express');
const router = express.Router();
const lecteurController = require('../controllers/lecteurController');

router.get('/', lecteurController.getAll);
router.get('/:id', lecteurController.getById);
router.post('/', lecteurController.create);
router.put('/:id', lecteurController.update);
router.delete('/:id', lecteurController.remove);

router.post('/:id/evenements', lecteurController.inscrire);
router.get('/:id/evenements', lecteurController.getEvenements);

module.exports = router;
