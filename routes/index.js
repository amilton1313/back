const usuarioRoutes = require('./ro_usuario')
const pessoaRoutes = require('./ro_pessoa')
const pessoaContatoRoutes = require('./ro_pessoaContato')
const empreendimentoRoutes = require('./ro_empreendimento')
const empreendimentoBlocoRoutes = require('./ro_empreendimentoBloco')
const empreendimentoUnidadeRoutes = require('./ro_empreendimentoUnidade')
const indiceRoutes = require('./ro_indice')
const indiceDatasRoutes = require('./ro_indiceData')
const agendaTelefonicaRoutes = require('./ro_agendaTelefonica')
const assisTecSolicitacaoRoutes = require('./ro_assistecsolicitacao')
const portalRoutes = require('./ro_portal')
const propostaRoutes = require('./ro_proposta')
const propostaPropostoRoutes = require('./ro_propostaProposto')
const tabelasVendasRoutes = require('./ro_tabela_vendas')

module.exports = [
    usuarioRoutes,
    pessoaRoutes,
    pessoaContatoRoutes,
    empreendimentoRoutes,
    empreendimentoBlocoRoutes,
    empreendimentoUnidadeRoutes,
    indiceRoutes,
    indiceDatasRoutes,
    agendaTelefonicaRoutes,
    assisTecSolicitacaoRoutes,
    portalRoutes,
    propostaRoutes,
    propostaPropostoRoutes,
    tabelasVendasRoutes
]
