let homePage = require("./homePage");
let preguntasFrecuentes = require("./preguntasFrecuentes");
let sucursales = require("./sucursales");
let contacto = require("./contacto");
let enCartelera = require("./enCartelera");
let masVotadas = require("./masVotadas");

let index = {
    homePage: function(res){
        res.write(homePage.titulo + "\n");
        res.write("\n");
        res.write("Cantidad " + homePage.cantidad() + "\n");
        res.write("\n");
        res.write("Lista " + homePage.listarPelis());
        res.end()
    },
    enCartelera: function(res){
        res.write(enCartelera.titulo + "\n");
        res.write("\n");
        res.write("Lista " + "\n" + homePage.listarPelis());
        res.end()

    },
    masVotadas: function(res){
        res.write(masVotadas.titulo + "\n");
        res.write("\n");
        res.write("Mas votadas " + masVotadas.listarPelis());
        res.end()
    },
    sucursales: function(res){
        res.write(sucursales.titulo + "\n");
        res.write("\n");
        res.write("Cantidad " + sucursales.cantidad() + "\n");
        res.write("\n");
        res.write("Lista de sucursales " + "\n" + sucursales.listarSucursales())
        res.end()

    },
    contacto: function(res){
        res.write(contacto.titulo + "\n");
        res.write("\n");
        res.write("Redes Sociales: " + contacto.redes)
        res.end()

    },
    preguntasFrecuentes: function(res){
        res.write(preguntasFrecuentes.titulo + "\n");
        res.write("\n");
        res.write("Cantidad " + preguntasFrecuentes.cantidad() + "\n");
        res.write("\n");
        res.write("Lista de preguntas " + "\n" + preguntasFrecuentes.listarPreguntas());
        res.end()

    },
}
module.exports = index