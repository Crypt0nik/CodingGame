const express = require('express');
const router = express.Router();
const bibliothecaireController = require('../controllers/bibliothecaireController');

router.get('/', bibliothecaireController.getAll);
router.get('/:id', bibliothecaireController.getById);
router.post('/', bibliothecaireController.create);
router.put('/:id', bibliothecaireController.update);
router.delete('/:id', bibliothecaireController.remove);

module.exports = router;
