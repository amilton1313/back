const Sequelize = require('sequelize')

const sequelize = require('../util/DBconnection')

const TabelaVendasParametros = sequelize.define('tabelas_vendas_parametros', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: false,
    allowNull: false,
    primaryKey: true,
    field: 'id_tabela_vendas',
  },
  descricao: Sequelize.STRING(30),
  ato_perc: Sequelize.NUMERIC(10,4),
  ato_qtde: Sequelize.INTEGER,
  parc_perc: Sequelize.NUMERIC(10,4),
  parc_qtde: Sequelize.INTEGER,
  parc_apos: Sequelize.INTEGER,
  ref_perc: Sequelize.NUMERIC(10,4),
  ref_qtde: Sequelize.INTEGER,
  ref_interv: Sequelize.INTEGER,
  cha_perc: Sequelize.NUMERIC(10,4),
  fin_parc_perc: Sequelize.NUMERIC(10,4),
  fin_parc_qtde: Sequelize.INTEGER,
  fin_parc_apos: Sequelize.INTEGER,
  fin_ref_perc: Sequelize.NUMERIC(10,4),
  fin_ref_qtde: Sequelize.INTEGER,
  fin_ref_interv: Sequelize.INTEGER,
  referencia: Sequelize.INTEGER,
  tipo_financiamento: Sequelize.INTEGER,
  id_empreendimento: Sequelize.INTEGER,
  taxa_vpl: Sequelize.NUMERIC(10,4),
  preco_venda: Sequelize.INTEGER,
  ato_perc_min: Sequelize.NUMERIC(10,4),
  parc_perc_min: Sequelize.NUMERIC(10,4),
  ref_perc_min: Sequelize.NUMERIC(10,4),
  cha_perc_min: Sequelize.NUMERIC(10,4),
  fin_parc_perc_min: Sequelize.NUMERIC(10,4),
  fin_ref_perc_min: Sequelize.NUMERIC(10,4),
  fin_vpl_nao: Sequelize.INTEGER,
  est_parc_perc: Sequelize.NUMERIC(10,4),
  est_parc_qtde: Sequelize.INTEGER,
  est_parc_apos: Sequelize.INTEGER,
  est_ref_perc: Sequelize.NUMERIC(10,4),
  est_ref_qtde: Sequelize.INTEGER,
  est_ref_interv: Sequelize.INTEGER,
  est_parc_perc_min: Sequelize.NUMERIC(10,4),
  est_ref_perc_min: Sequelize.NUMERIC(10,4),
  min_mes01_mes: Sequelize.INTEGER,
  min_mes01_perc: Sequelize.NUMERIC(10,4),
  min_mes02_mes: Sequelize.INTEGER,
  min_mes02_perc: Sequelize.NUMERIC(10,4),
  min_mes03_mes: Sequelize.INTEGER,
  min_mes03_perc: Sequelize.NUMERIC(10,4),
  nomearquivo: Sequelize.STRING(200),
  dataarquivo: Sequelize.DATEONLY,
  web: Sequelize.INTEGER,
  gerar: Sequelize.INTEGER,
}, {
  tableName: 'tabelas_vendas_parametros',
  timestamp: false,
  createdAt: false,
  updatedAt: false
});

module.exports = TabelaVendasParametros