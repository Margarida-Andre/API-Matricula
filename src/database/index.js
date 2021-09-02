const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

const Provincia = require("../models/Provincia");
const Municipio = require("../models/Municipio");
const DistritoUrbano = require("../models/DistritoUrbano");
const Bairro = require("../models/Bairro");
const Endereco = require("../models/Endereco");
const Genero = require("../models/Genero");
const Matricula = require("../models/Matriculas");

const connection = new Sequelize(dbConfig);

//Connection
Provincia.init(connection);
Municipio.init(connection);
DistritoUrbano.init(connection);
Bairro.init(connection);
Endereco.init(connection);
Genero.init(connection);
Matricula.init(connection);

//Association
Provincia.associate(connection.models);
Municipio.associate(connection.models);
DistritoUrbano.associate(connection.models);
Bairro.associate(connection.models);
Endereco.associate(connection.models);
//Genero.associate(connection.models);
Matricula.associate(connection.models);

module.exports = connection;
