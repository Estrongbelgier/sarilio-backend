import Sequelize, { Model } from 'sequelize';

class Ativo extends Model {
  static init(sequelize) {
    super.init(
      {
        nome_do_ativo: Sequelize.STRING,
        valor: Sequelize.FLOAT,
        comissao: Sequelize.FLOAT,
        quantidade_disponivel: Sequelize.FLOAT,
        tipo: Sequelize.STRING,
      },
      { sequelize }
    );
    return this;
  }
}

export default Ativo;

// DATABASE Model de Ativos
