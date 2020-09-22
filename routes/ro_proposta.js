const express = require('express');

const propostaController = require('../controllers/co_proposta')

const md_auth = require('../util/autenticacao')

const router = express.Router()

// router.get('/propostas', propostaController.getpropostas)
router.get('/proposta/:id', propostaController.getPropostaById)
// router.get('/proposta/nome/:nome', propostaController.getpropostaByNome)
// router.post('/proposta', md_auth.auth, propostaController.addproposta)
// router.put('/proposta/:id', md_auth.auth, propostaController.updproposta)
// router.delete('/proposta/:id', md_auth.auth, propostaController.delproposta)


module.exports = router
