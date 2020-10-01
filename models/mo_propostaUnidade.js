const Sequelize = require('sequelize')

const sequelize = require('../util/DBconnection')

const PropostaUnidade = sequelize.define('propostas_unidades', {
  id_proposta: {
    type: Sequelize.INTEGER,
    autoIncrement: false,
    allowNull: false,
    primaryKey: true,
  },
  id_unidade: {
    type: Sequelize.INTEGER,
    autoIncrement: false,
    allowNull: false,
    primaryKey: true,
  },
  valor: Sequelize.NUMERIC(10,2),
  area: Sequelize.NUMERIC(10,4),
  blocox: Sequelize.STRING(30),
  unidadex: Sequelize.STRING(30),
  garagensx: Sequelize.STRING(30),
  depositosx: Sequelize.STRING(30)
}, {
  tableName: 'propostas_unidades',
  timestamp: false,
  createdAt: false,
  updatedAt: false
});

module.exports = PropostaUnidade
