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
        res.write("Total de peliculas en cartelera: " + homePage.cantidad() + "\n");
        res.write("\n");
        res.write("Listado de peliculas " + homePage.listarPelis() + "\n");
        res.write('\n')
        res.write('Recorda que podes visitar las secciones: \n \n')
        res.write('En Carteleta \n')
        res.write('Mas Votadas \n')
        res.write('Sucursales \n')
        res.write('Contacto \n')
        res.write('Preguntas Frecuentes')
        res.end()
    },
    enCartelera: function(res){
        res.write(enCartelera.titulo + "\n");
        res.write("\n");
        res.write("Total de peliculas: " + enCartelera.cantidad() + "\n");
        res.write("\n");
        res.write("Listado de peliculas " + "\n" + enCartelera.listarPelis());
        res.end()

    },
    masVotadas: function(res){
        res.write(masVotadas.titulo + "\n");
        res.write("\n");
        res.write("Total de peliculas " + masVotadas.cantidad() + "\n");
        res.write("\n");
        res.write("Rating promedio: " + masVotadas.ratingPromedio());
        res.write("\n");
        let pelis = masVotadas.listarPelis();
        pelis.forEach(function(infoPelis){
            res.write("Titulo: " + infoPelis.title);
            res.write("\n");
            res.write("Rating: " + infoPelis.vote_average);
            res.write("\n");
            res.write("Reseña: " + infoPelis.overview);
            res.write("\n\n");
        })
        res.end()
    },
    sucursales: function(res){
        res.write(sucursales.titulo + "\n");
        res.write("\n");
        res.write("Total de salas: " + sucursales.cantidad() + "\n");
        res.write("\n");
        res.write("Listado de salas: " + "\n" + sucursales.listarSucursales());
        res.end()

    },
    contacto: function(res){
        res.write(contacto.titulo + "\n");
        res.write("\n");
        res.write("contenido: " + contacto.contenido)
        res.end()

    },
    preguntasFrecuentes: function(res){
        res.write(preguntasFrecuentes.titulo + "\n");
        res.write("\n");
        res.write("Total de preguntas " + preguntasFrecuentes.cantidad() + "\n");
        res.write("\n");
        res.write("Listado de preguntas " + "\n" + preguntasFrecuentes.listarPreguntas());
        res.end()

    },
}
module.exports = index