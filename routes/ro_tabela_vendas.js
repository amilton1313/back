const express = require('express');

const tabelaVendasController = require('../controllers/co_tabelas_vendas_parametros')

const md_auth = require('../util/autenticacao')

const router = express.Router()

router.get('/tabelasvendas/:id', tabelaVendasController.getTabelaVendasByEmpreend)
router.get('/unidsdisponiveis/:id', tabelaVendasController.getUnidadesDisponiveisByEmpreend)



module.exports = router
