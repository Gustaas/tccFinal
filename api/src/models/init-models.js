import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;

import _infoa_dtn_tb_avaliacao from  "./infoa_dtn_tb_avaliacao.js";
import _infoa_dtn_tb_cliente from  "./infoa_dtn_tb_cliente.js";
import _infoa_dtn_tb_endereco from  "./infoa_dtn_tb_endereco.js";
import _infoa_dtn_tb_favoritos from  "./infoa_dtn_tb_favoritos.js";
import _infoa_dtn_tb_produto from  "./infoa_dtn_tb_produto.js";
import _infoa_dtn_tb_tamanhos from  "./infoa_dtn_tb_tamanhos.js";
import _infoa_dtn_tb_usuarios_adm from  "./infoa_dtn_tb_usuarios_adm.js";
import _infoa_dtn_tb_venda from  "./infoa_dtn_tb_venda.js";
import _infoa_dtn_tb_venda_item from  "./infoa_dtn_tb_venda_item.js";


export default function initModels(sequelize) {

  const infoa_dtn_tb_avaliacao = _infoa_dtn_tb_avaliacao.init(sequelize, DataTypes);
  const infoa_dtn_tb_cliente = _infoa_dtn_tb_cliente.init(sequelize, DataTypes);
  const infoa_dtn_tb_endereco = _infoa_dtn_tb_endereco.init(sequelize, DataTypes);
  const infoa_dtn_tb_favoritos = _infoa_dtn_tb_favoritos.init(sequelize, DataTypes);
  const infoa_dtn_tb_produto = _infoa_dtn_tb_produto.init(sequelize, DataTypes);
  const infoa_dtn_tb_tamanhos = _infoa_dtn_tb_tamanhos.init(sequelize, DataTypes);
  const infoa_dtn_tb_usuarios_adm = _infoa_dtn_tb_usuarios_adm.init(sequelize, DataTypes);
  const infoa_dtn_tb_venda = _infoa_dtn_tb_venda.init(sequelize, DataTypes);
  const infoa_dtn_tb_venda_item = _infoa_dtn_tb_venda_item.init(sequelize, DataTypes);
  

 
  infoa_dtn_tb_avaliacao.belongsTo(infoa_dtn_tb_cliente, { as: "id_cliente_infoa_dtn_tb_cliente", foreignKey: "id_cliente"});
  infoa_dtn_tb_cliente.hasMany(infoa_dtn_tb_avaliacao, { as: "infoa_dtn_tb_avaliacaos", foreignKey: "id_cliente"});
  infoa_dtn_tb_endereco.belongsTo(infoa_dtn_tb_cliente, { as: "id_cliente_infoa_dtn_tb_cliente", foreignKey: "id_cliente"});
  infoa_dtn_tb_cliente.hasMany(infoa_dtn_tb_endereco, { as: "infoa_dtn_tb_enderecos", foreignKey: "id_cliente"});
  infoa_dtn_tb_favoritos.belongsTo(infoa_dtn_tb_cliente, { as: "id_cliente_infoa_dtn_tb_cliente", foreignKey: "id_cliente"});
  infoa_dtn_tb_cliente.hasMany(infoa_dtn_tb_favoritos, { as: "infoa_dtn_tb_favoritos", foreignKey: "id_cliente"});
  infoa_dtn_tb_venda.belongsTo(infoa_dtn_tb_cliente, { as: "id_cliente_infoa_dtn_tb_cliente", foreignKey: "id_cliente"});
  infoa_dtn_tb_cliente.hasMany(infoa_dtn_tb_venda, { as: "infoa_dtn_tb_vendas", foreignKey: "id_cliente"});
  infoa_dtn_tb_avaliacao.belongsTo(infoa_dtn_tb_produto, { as: "id_produto_infoa_dtn_tb_produto", foreignKey: "id_produto"});
  infoa_dtn_tb_produto.hasMany(infoa_dtn_tb_avaliacao, { as: "infoa_dtn_tb_avaliacaos", foreignKey: "id_produto"});
  infoa_dtn_tb_favoritos.belongsTo(infoa_dtn_tb_produto, { as: "id_produto_infoa_dtn_tb_produto", foreignKey: "id_produto"});
  infoa_dtn_tb_produto.hasMany(infoa_dtn_tb_favoritos, { as: "infoa_dtn_tb_favoritos", foreignKey: "id_produto"});
  infoa_dtn_tb_venda_item.belongsTo(infoa_dtn_tb_produto, { as: "id_produto_infoa_dtn_tb_produto", foreignKey: "id_produto"});
  infoa_dtn_tb_produto.hasMany(infoa_dtn_tb_venda_item, { as: "infoa_dtn_tb_venda_items", foreignKey: "id_produto"});
  infoa_dtn_tb_produto.belongsTo(infoa_dtn_tb_tamanhos, { as: "id_tamanho_infoa_dtn_tb_tamanho", foreignKey: "id_tamanho"});
  infoa_dtn_tb_tamanhos.hasMany(infoa_dtn_tb_produto, { as: "infoa_dtn_tb_produtos", foreignKey: "id_tamanho"});
  infoa_dtn_tb_venda.belongsTo(infoa_dtn_tb_venda_item, { as: "id_venda_item_infoa_dtn_tb_venda_item", foreignKey: "id_venda_item"});
  infoa_dtn_tb_venda_item.hasMany(infoa_dtn_tb_venda, { as: "infoa_dtn_tb_vendas", foreignKey: "id_venda_item"});
  
  return {
    
    infoa_dtn_tb_avaliacao,
    infoa_dtn_tb_cliente,
    infoa_dtn_tb_endereco,
    infoa_dtn_tb_favoritos,
    infoa_dtn_tb_produto,
    infoa_dtn_tb_tamanhos,
    infoa_dtn_tb_usuarios_adm,
    infoa_dtn_tb_venda,
    infoa_dtn_tb_venda_item,
  };
}
