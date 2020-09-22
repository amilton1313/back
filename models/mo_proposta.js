const Sequelize = require('sequelize')

const sequelize = require('../util/DBconnection')

const Proposta = sequelize.define('propostas', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
    field: 'id_proposta',
  },
  numero: Sequelize.INTEGER,
  data: Sequelize.DATEONLY,
  observacoes: Sequelize.TEXT,
  retorno: Sequelize.TEXT,
  status: Sequelize.INTEGER,
  vpl: Sequelize.NUMERIC(10,2),
  margem_negocial: Sequelize.NUMERIC(10,2),
  saldo: Sequelize.NUMERIC(10,2),
  perc_saldo: Sequelize.NUMERIC(10,4),
  bonus: Sequelize.NUMERIC(10,2),
  id_imobiliaria: Sequelize.INTEGER,
  id_proponente: Sequelize.INTEGER,
  id_corretor: Sequelize.INTEGER,
  id_tabela_vendas: Sequelize.INTEGER,
  id_empreendimento: Sequelize.INTEGER,
  aprovacao_data: Sequelize.DATEONLY,
  aprovacao_nome: Sequelize.STRING(20),
  taxa_vpl: Sequelize.NUMERIC(10,4),
  desconto: Sequelize.NUMERIC(10,4),
  financ_observacoes: Sequelize.TEXT,
  cadastro_status: Sequelize.INTEGER,
  cadastro_observacoes: Sequelize.TEXT,
  data_expiracao: Sequelize.DATEONLY,
  parceria: Sequelize.INTEGER,
  parceria_nome: Sequelize.STRING(50),
  nu_contrato: Sequelize.INTEGER,
  nome_tabela_vendas: Sequelize.STRING(30),
  fin_parc_qtde: Sequelize.INTEGER,
  parceriaperc: Sequelize.NUMERIC(10,4),
  dataenvio: Sequelize.DATEONLY,
  dataretorno: Sequelize.DATEONLY,
  dataaprovacao: Sequelize.DATEONLY,
  dataelabcontrato: Sequelize.DATEONLY,
  dataassincontrato: Sequelize.DATEONLY,
  elab_contrato: Sequelize.INTEGER,
  negativo_admitido_perc: Sequelize.NUMERIC(10,4),
  horaenvio: Sequelize.DATE,
  horaretorno: Sequelize.DATE,
  horaaprovacao: Sequelize.DATE,
  horaelabcontrato: Sequelize.DATE,
  horaassincontrato: Sequelize.DATE,
  corrigir: Sequelize.NUMERIC(10,8),
  punta_especial: Sequelize.INTEGER,
  id_localcaptacao: Sequelize.INTEGER,
  aprovacao: Sequelize.INTEGER,
  x: Sequelize.INTEGER,
  valor_tabela: Sequelize.NUMERIC(10,2),
  liberapendencias: Sequelize.INTEGER,
  pgtodinheiro: Sequelize.INTEGER,
  finalizadoextra: Sequelize.INTEGER,
  ck_parceriapalhoca: Sequelize.INTEGER,
  entrega_fin_rec_contrato: Sequelize.DATEONLY,
  entrega_fin_sem_pend: Sequelize.DATEONLY,
  entrega_nac_rec_pasta: Sequelize.DATEONLY,
  entrega_nac_termo_vistoria: Sequelize.DATEONLY,
  entrega_nac_resp_vistoria: Sequelize.INTEGER,
  entrega_nac_termo_entrega: Sequelize.DATEONLY,
  entrega_nac_resp_entrega: Sequelize.INTEGER,
  entrega_fin_txcondom: Sequelize.DATEONLY,
  entrega_com_rec_termos: Sequelize.DATEONLY,
  entrega_fin_rec_termos: Sequelize.DATEONLY,
  entrega_com_condicao_sn: Sequelize.INTEGER,
  entrega_com_condicao_descr: Sequelize.TEXT,
  entrega_nac_termo_vistoria2: Sequelize.DATEONLY,
  entrega_nac_resp_vistoria2: Sequelize.INTEGER,
  rescisao_data: Sequelize.DATEONLY,
  rescisao_observacoes: Sequelize.TEXT,
  entrega_id_assist: Sequelize.INTEGER,
  entrega_com_rec_vistoria: Sequelize.DATEONLY,
  entrega_com_rec_entrega: Sequelize.DATEONLY,
  entrega_fin_rec_vistoria: Sequelize.DATEONLY,
  entrega_fin_rec_entrega: Sequelize.DATEONLY,
  entrega_com_hipoteca: Sequelize.DATEONLY,
  entrega_com_escritura: Sequelize.DATEONLY,
  anexo01: Sequelize.STRING(70),
  rescisao: Sequelize.STRING(70),
  troca_data: Sequelize.DATEONLY,
  troca_observacoes: Sequelize.TEXT,
  troca_arquivo: Sequelize.STRING(70),
  avista: Sequelize.INTEGER,
  id_interveniente: Sequelize.INTEGER,
}, {
  timestamp: false,
  createdAt: false,
  updatedAt: false
});

module.exports = Proposta