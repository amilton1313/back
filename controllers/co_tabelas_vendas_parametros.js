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
    select main.id_unidade, main.status, main.numero,

    (
      select sum(area_privativa)
      from tabelas_vendas_garagens tvg

      left join empreendimentos_unidades eu
      on eu.id_unidade = id_garagem

      where tvg.id_unidade = main.id_unidade
      ) as gar_area_privativa,

      (
      select sum(area_real)
      from tabelas_vendas_garagens tvg

      left join empreendimentos_unidades eu
      on eu.id_unidade = id_garagem

      where tvg.id_unidade = main.id_unidade
      ) as area_total

      from empreendimentos_unidades main
      where main.id_empreendimento = :id
      and status = 1
      and (tipo < 4 or tipo = 7) 
      order by id_unidade
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
