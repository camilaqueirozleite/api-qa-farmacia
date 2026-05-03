/*
const express = require('express');
const router = express.Router();
const medicamentosController = require('../controllers/medicamentosController');
const autenticar = require('../middlewares/authMiddleware');

router.get('/', autenticar, medicamentosController.listar);
router.get('/:id', autenticar, medicamentosController.obter);
router.post('/', autenticar, medicamentosController.criar);
router.put('/:id', autenticar, medicamentosController.atualizar);
router.delete('/:id', autenticar, medicamentosController.deletar);

module.exports = router;
*/
const express = require('express');
const router = express.Router();

module.exports = router;
