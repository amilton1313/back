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

exports.getPropostaParcelasById = (req, res, next) => {
  const id = req.params.id
  Proposta.sequelize.query(`
      select 
      pt.descricao as DescricaoTipo,
      ptr.descricao as DescricaoReforco,
      pp.*
      from propostas_proposto pp
      
      left join propostas_tipos pt
      on pt.id_tipo = pp.id_tipo
      
      left join propostas_tipos_reforco ptr
      on ptr.id_tiporef = pp.reforco_tipo
      
      where pp.id_proposta = :id
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


exports.getPropostaParcelaById = (req, res, next) => {
  const id = req.params.id
  Proposta.sequelize.query(`
      select 
      pt.descricao as DescricaoTipo,
      ptr.descricao as DescricaoReforco,
      pp.*
      from propostas_proposto pp
      
      left join propostas_tipos pt
      on pt.id_tipo = pp.id_tipo
      
      left join propostas_tipos_reforco ptr
      on ptr.id_tiporef = pp.reforco_tipo
      
      where pp.id_parcela = :id
    `,
    { replacements: { id } })
    .then(parcela => {
      res.status(200).json(parcela[0])
    })
    .catch(err => {
      console.log(err)
      res.status(500).json('Parcela não encontrada.')
    })
}

