const express = require('express');

const propostaPropostoController = require('../controllers/co_propostaProposto')

const md_auth = require('../util/autenticacao')

const router = express.Router()

router.post('/propostaproposto', propostaPropostoController.addPropostaProposto)
router.put('/propostaproposto/:id_parcela', propostaPropostoController.updPropostaProposto)
router.delete('/propostaproposto/:id_parcela', propostaPropostoController.delPropostaProposto)
router.get('/propostaparcelas/:id', propostaPropostoController.getPropostaParcelasById)
router.get('/propostaparcela/:id', propostaPropostoController.getPropostaParcelaById)
// router.get('/proposta/:id', propostaPropostoController.getPropostaById)
// router.get('/propostaunds/:id', propostaPropostoController.getUndsProposta)
// router.put('/proposta/:id', propostaPropostoController.updProposta)
// router.get('/proposta/nome/:nome', propostaPropostoController.getpropostaByNome)
// router.post('/proposta', md_auth.auth, propostaPropostoController.addproposta)
// router.get('/firstindice/:tabela/:field', propostaPropostoController.firstIndice)
// router.get('/previndice/:tabela/:field/:atual', propostaPropostoController.prevIndice)
// router.get('/nextindice/:tabela/:field/:atual', propostaPropostoController.nextIndice)
// router.get('/lastindice/:tabela/:field', propostaPropostoController.lastIndice)


module.exports = router
