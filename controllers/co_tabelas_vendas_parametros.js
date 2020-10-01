const TabelaVendasParametros = require('../models/mo_tabelas_vendas_parametros')

exports.getTabelaVendasByEmpreend = (req, res, next) => {
  const id = req.params.id
  TabelaVendasParametros.sequelize.query(`
      select id_tabela_vendas, descricao
      from tabelas_vendas_parametros
      where id_empreendimento = :id
    `,
    { replacements: { id } })
    .then(proposta => {
      res.status(200).json(proposta[0])
    })
    .catch(err => {
      console.log(err)
      res.status(500).json('Tabela de Vendas não encontrada.')
    })
}

exports.getUnidadesDisponiveisByEmpreend = (req, res, next) => {
  const id = req.params.id
  TabelaVendasParametros.sequelize.query(`
      select main.id_unidade, eb.nome as blocox, eu.numero as unidadex,
      (
        select array_agg(eu2.numero)
          from tabelas_vendas_garagens tvg
          left join empreendimentos_unidades eu2
          on tvg.id_garagem = eu2.id_unidade
        where tvg.id_unidade = eu.id_unidade
      ) as garagensx,
      (
        select array_agg(eu3.numero)
          from tabelas_vendas_hobbybox tvh
          left join empreendimentos_unidades eu3
          on tvh.id_hobbybox = eu3.id_unidade
        where tvh.id_unidade = eu.id_unidade
      ) as depositosx
      
      from empreendimentos_unidades main
      
      left join empreendimentos_unidades eu
      on main.id_unidade = eu.id_unidade
      
      left join empreendimentos_blocos eb
      on eb.id_bloco = eu.id_bloco
      
      where main.id_empreendimento = :id
      and main.status = 1
      and (main.tipo < 4 or main.tipo = 7) 
      order by main.id_unidade
    `,
    { replacements: { id } })
    .then(proposta => {
      res.status(200).json(proposta[0])
    })
    .catch(err => {
      console.log(err)
      res.status(500).json('Unidades não encontradas.')
    })
}
