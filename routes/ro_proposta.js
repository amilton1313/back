const express = require('express');

const propostaController = require('../controllers/co_proposta')

const md_auth = require('../util/autenticacao')

const router = express.Router()

// router.get('/propostas', propostaController.getpropostas)
router.get('/proposta/:id', propostaController.getPropostaById)
router.get('/propostaunds/:id', propostaController.getUndsProposta)
router.put('/proposta/:id', propostaController.updProposta)
router.post('/propostaunidade', propostaController.addPropostaUnidade)
router.delete('/propostaunidade/:id_proposta/:id_unidade', propostaController.delPropostaUnidade)
// router.get('/proposta/nome/:nome', propostaController.getpropostaByNome)
// router.post('/proposta', md_auth.auth, propostaController.addproposta)
// router.put('/proposta/:id', md_auth.auth, propostaController.updproposta)
router.get('/firstindice/:tabela/:field', propostaController.firstIndice)
router.get('/previndice/:tabela/:field/:atual', propostaController.prevIndice)
router.get('/nextindice/:tabela/:field/:atual', propostaController.nextIndice)
router.get('/lastindice/:tabela/:field', propostaController.lastIndice)


module.exports = router
