const Proposta = require('../models/mo_proposta')

// exports.addIndice = (req, res, next) => {
//   const indice = req.body
//   Indice.create(indice)
//     .then(indice => {
//       res.status(200).json(indice)
//     })
//     .catch(err => {
//       console.log(err)
//       res.status(500).json('Usuário não encontrado.')
//     })
// }

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




// exports.addIndice = (req, res, next) => {
//   const indice = req.body
//   Indice.create(indice)
//     .then(indice => {
//       res.status(200).json(indice)
//     })
//     .catch(err => {
//       console.log(err)
//       res.status(500).json('Usuário não encontrado.')
//     })
// }

// exports.updIndice = (req, res, next) => {
//   const id = req.params.id
//   const body = req.body

//   Indice.findByPk(id)
//     .then(indice => {
//       indice.update(body)
//     })
//     .then(indice => {
//       res.status(200).json(body)
//     })
//     .catch(err => {
//       console.log(err)
//       res.status(500).json('Usuário não encontrado.')
//     })
// }

// exports.delIndice = (req, res, next) => {
//   const id = req.params.id

//   Indice.findByPk(id)
//     .then(indice => {
//       indice.destroy(indice)
//     })
//     .then(id => {
//       res.status(200).json(id)
//     })
//     .catch(err => {
//       console.log(err)
//       res.status(500).json('Usuário não encontrado.')
//     })
// }

// exports.getIndiceById = (req, res, next) => {
//   const id = req.params.id
//   Indice.findByPk(id)
//     .then(indice => {
//       res.status(200).json(indice)
//     })
//     .catch(err => {
//       console.log(err)
//       res.status(500).json('Usuário não encontrado.')
//     })
// }

// exports.getIndiceByNome = (req, res, next) => {
//   const { nome } = req.params
//   const busca = '%' + nome.toLowerCase() + '%'

//   Indice.sequelize.query(`select id_indice, nome
//   from indices
//   where lower(nome) like :busca`,
//   { replacements: { busca } })
//     .then(indice => {
//       res.status(200).json(indice[0])
//     })
//     .catch(err => {
//       res.status(500).send({ message: "Ocorreu um erro ao buscar os registros" });
//     });
// }


// exports.getIndices = (req, res, next) => {
//   Indice.sequelize.query(`
//   select id_indice, indice_descricao
//   from indices
//   order by indice_descricao`)
//     .then(indices => {
//       res.status(200).json(indices[0])
//     })
//     .catch(err => {
//       console.log(err)
//       res.status(500).json('Índice não encontrado.')
//     })
// }




