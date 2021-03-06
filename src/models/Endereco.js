const { Model, DataTypes } = require("sequelize");

class Endereco extends Model {
  static init(sequelize) {
    super.init(
      {
        provinciaId: DataTypes.INTEGER,
        municipioId: DataTypes.INTEGER,
        distritoUrbanoId: DataTypes.INTEGER,
        bairroId: DataTypes.INTEGER,
        rua: DataTypes.STRING,
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Provincia, {
      foreignKey: "provinciaId",
      as: "Provincia",
    });
    this.belongsTo(models.Municipio, {
      foreignKey: "municipioId",
      as: "Municipio",
    });
    this.belongsTo(models.DistritoUrbano, {
      foreignKey: "distritoUrbanoId",
      as: "DistritoUrbano",
    });
    this.belongsTo(models.Bairro, { foreignKey: "bairroId", as: "Bairro" });

   
    this.hasMany(models.Matriculas, {
      foreignKey: "enderecoId",
      as: "Matricula",
    });
    
    
  }
}

module.exports = Endereco;
