import Sequelize, { Model } from 'sequelize';

class ContaBancaria extends Model {
  static init(sequelize) {
    super.init(
      {
        cpf: Sequelize.INTEGER,
        titular: Sequelize.STRING,
        numero_do_banco: Sequelize.INTEGER,
        tipo_de_conta: Sequelize.STRING,
        agencia: Sequelize.INTEGER,
        numero_da_conta: Sequelize.INTEGER,
      },
      { sequelize }
    );
    return this;
  }
}

export default ContaBancaria;

// DATABASE Model de Conta bancaria
