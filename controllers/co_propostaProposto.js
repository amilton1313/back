const Proposta = require('../models/mo_proposta')
const PropostaProposto = require('../models/mo_propostaProposto')

exports.addPropostaProposto = (req, res, next) => {
  const propostaProposto = req.body
  PropostaProposto.create(propostaProposto)
  .then(parcela => {
    res.status(200).json(parcela)
  })
  .catch(err => {
    console.log(err)
    res.status(500).json('Proposta não encontrada.')
  })
}

exports.updPropostaProposto = (req, res, next) => {
  const id_parcela = req.params.id_parcela
  const body = req.body
  PropostaProposto.findByPk(id_parcela)
    .then(parcela => {
      PropostaProposto.update(req.body, {
        where: { id_parcela: id_parcela }
      })
    })
    .then(parcela => {
      res.status(200).json(body)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json('Proposta não encontrada.')
    })
}

exports.delPropostaProposto = (req, res, next) => {
  const {id_parcela} = req.params
  console.log('parms',req.params)

  PropostaProposto.sequelize.query(`
      delete
      from propostas_proposto 
      where id_parcela = :id_parcela
    `,
    { replacements: { id_parcela } })
    .then(id => {
      res.status(200).json(id)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json('Parcela não encontrada.')
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

  PropostaProposto.sequelize.query(`
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

