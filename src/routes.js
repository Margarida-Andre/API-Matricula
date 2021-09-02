const express = require("express");
const ProvinciaController = require("./controllers/provinciaController");
const MunicipioController = require("./controllers/municipioController");
const DistritoUrbanoController = require("./controllers/distritoUrbanoController");
const BairroController = require("./controllers/bairroController");
const EnderecoController = require("./controllers/enderecoController");
const GeneroController = require("./controllers/generoController");
const MatriculaController = require("./controllers/matriculaController");
const routes = express.Router();

//provincia
routes.get("/provinciaAll", ProvinciaController.index);
routes.post("/provinciaCreate", ProvinciaController.store);
routes.delete("/provinciaDelete", ProvinciaController.delete);
routes.patch("/provinciaUpdate", ProvinciaController.update);

//municipio
routes.get("/municipio/:provinciaId", MunicipioController.show);
routes.get("/municipioAll", MunicipioController.index);
routes.post("/municipioCreate", MunicipioController.store);
routes.delete("/municipioDelete", MunicipioController.delete);
routes.patch("/municipioUpdate", MunicipioController.update);

//distritoUrbano
routes.get("/distritoUrbano/:municipioId", DistritoUrbanoController.show);
routes.get("/distritoUrbanoAll", DistritoUrbanoController.index);
routes.post("/distritoUrbanoCreate", DistritoUrbanoController.store);
routes.delete("/distritoUrbanoDelete", DistritoUrbanoController.delete);
routes.patch("/distritoUpdate", DistritoUrbanoController.update);

//bairro
routes.get("/bairro/:distritoUrbanoId", BairroController.show);
routes.get("/bairroAll", BairroController.index);
routes.post("/bairroCreate", BairroController.store);
routes.delete("/bairroDelete", BairroController.delete);
routes.patch("/bairroUpdate", BairroController.update);

//endereco
routes.get("/enderecoAll", EnderecoController.index);
routes.post("/enderecoCreate", EnderecoController.store);
routes.delete("/enderecoDelete", EnderecoController.delete);
routes.patch("/enderecoUpdate", EnderecoController.update);

//genero
routes.get("/generoAll", GeneroController.index);
routes.post("/generoCreate", GeneroController.store);
routes.delete("/generoDelete", GeneroController.delete);
routes.patch("/generoUpdate", GeneroController.update);


//Matricula
routes.get("/matriculaAll", MatriculaController.index);
routes.post("/matriculaCreate", MatriculaController.store);
routes.delete("/matriculaDelete/:id", MatriculaController.delete);
routes.patch("/matriculaUpdate/:id", MatriculaController.update);


module.exports = routes;
