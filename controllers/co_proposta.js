const Proposta = require('../models/mo_proposta')
const PropostaUnidade = require('../models/mo_propostaUnidade')

exports.addPropostaUnidade = (req, res, next) => {
  const propostaUnidade = req.body.prop
  console.log('dentro do add ', propostaUnidade)
  PropostaUnidade.create(propostaUnidade)
    .then(unidade => {
      res.status(200).json(unidade)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json('Unidade não encontrada.')
    })
}

exports.delPropostaUnidade = (req, res, next) => {
  const {id_proposta, id_unidade} = req.params
  console.log('parms',req.params)

  PropostaUnidade.sequelize.query(`
      delete
      from propostas_unidades 
      where id_proposta = :id_proposta
      and id_unidade = :id_unidade
    `,
    { replacements: { id_proposta, id_unidade } })
    .then(id => {
      res.status(200).json(id)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json('Usuário não encontrado.')
    })
}

exports.updProposta = (req, res, next) => {
  const id = req.params.id
  const body = req.body
  const observacoes = body.observacoes
  console.log('chegou na proposta  ', id)

  Proposta.findByPk(id)
    .then(proposta => {
      Proposta.update(req.body, {
        where: { id: id }
      })
    })
    .then(proposta => {
      res.status(200).json(body)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json('Proposta não encontrada.')
    })
}

exports.getPropostaById = (req, res, next) => {
  const id = req.params.id
  Proposta.sequelize.query(`
      select main.id_proposta, main.data,
      main.id_imobiliaria, imob.nome as nomeimobiliaria,
      main.id_corretor, cor.nome as nomecorretor,
      main.id_proponente, prop.nome as nomeproponente,
      main.id_interveniente, inter.nome as nomeinterveniente,
      main.id_empreendimento, empreend.nome as nomeempreendimento,
      main.id_tabela_vendas,
      main.observacoes
        
      
      from propostas main
          
      left join pessoas imob
      on imob.id_pessoa = main.id_imobiliaria
          
      left join pessoas cor
      on cor.id_pessoa = main.id_corretor
          
      left join pessoas prop
      on prop.id_pessoa = main.id_proponente
        
      left join pessoas inter
      on inter.id_pessoa = main.id_interveniente
      
      left join empreendimentos empreend
      on empreend.id_empreendimento = main.id_empreendimento
          
      where id_proposta = :id
    `,
    { replacements: { id } })
    .then(proposta => {
      res.status(200).json(proposta[0])
    })
    .catch(err => {
      console.log(err)
      res.status(500).json('Proposta não encontrada.')
    })
}

exports.getUndsProposta = (req, res, next) => {
  const id = req.params.id
  Proposta.sequelize.query(`
      select *
      from propostas_unidades   
      where id_proposta = :id
    `,
    { replacements: { id } })
    .then(proposta => {
      res.status(200).json(proposta[0])
    })
    .catch(err => {
      console.log(err)
      res.status(500).json('Proposta não encontrada.')
    })
}



// ******************************************




exports.firstIndice = (req, res, next) => {
  const {tabela, field} = req.params
  console.log(req.params)

  PropostaUnidade.sequelize.query(`
      select min(${field})
      from ${tabela}
    `,
    { replacements: { tabela, field } })
    .then(id => {
      res.status(200).json(id[0])
    })
    .catch(err => {
      console.log(err)
      res.status(500).json('Id não encontrado.')
    })
}

exports.prevIndice = (req, res, next) => {
  const {tabela, field, atual} = req.params
  console.log(req.params)

  PropostaUnidade.sequelize.query(`
      select ${field}
      from ${tabela} 
      where ${field} < :atual
      order by ${field} desc limit 1
    `,
    { replacements: { tabela, field, atual } })
    .then(id => {
      res.status(200).json(id[0])
    })
    .catch(err => {
      console.log(err)
      res.status(500).json('Id não encontrado.')
    })
}

exports.nextIndice = (req, res, next) => {
  const {tabela, field, atual} = req.params
  console.log(req.params)


  PropostaUnidade.sequelize.query(`
      select ${field}
      from ${tabela} 
      where ${field} > :atual
      order by ${field} asc limit 1
    `,
    { replacements: { tabela, field, atual } })
    .then(id => {
      res.status(200).json(id[0])
    })
    .catch(err => {
      console.log(err)
      res.status(500).json('Id não encontrado.')
    })
}

exports.lastIndice = (req, res, next) => {
  const {tabela, field} = req.params
  console.log(req.params)

  PropostaUnidade.sequelize.query(`
      select max(${field})
      from ${tabela}
    `,
    { replacements: { tabela, field } })
    .then(id => {
      res.status(200).json(id[0])
    })
    .catch(err => {
      console.log(err)
      res.status(500).json('Id não encontrado.')
    })
}

