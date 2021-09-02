const { Model, DataTypes } = require('sequelize');

class Genero extends Model {
    
    static init(sequelize){
        super.init({
            designacao: DataTypes.STRING,
        }, {
            sequelize
        })

    }

     static associate(models){
     
           this.hasMany(models.Matricula, { foreignKey: 'generoId', as: 'Matricula'});
 
       }

}

module.exports =  Genero;