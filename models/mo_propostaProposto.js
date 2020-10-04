const Sequelize = require('sequelize')

const sequelize = require('../util/DBconnection')

const PropostaProposto = sequelize.define('propostas_proposto', {
  id_parcela: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  inicio: Sequelize.INTEGER,
  qtde: Sequelize.INTEGER,
  valor: Sequelize.NUMERIC(10,2),
  id_proposta: Sequelize.INTEGER,
  id_tipo: Sequelize.INTEGER,
  valorsem: Sequelize.NUMERIC(10,2),
  vcto_primeira: Sequelize.DATEONLY,
  reforco_tipo: Sequelize.NUMERIC(10,2)
}, {
  tableName: 'propostas_proposto',
  timestamp: false,
  createdAt: false,
  updatedAt: false
});

module.exports = PropostaProposto
