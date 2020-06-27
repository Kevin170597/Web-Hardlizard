const fs = require("fs");

let masVotadas = {
    db: "./data/movies.json",
    titulo: "Peliculas mas votadas",
    leerJSON: function() {
        let moviesJson = fs.readFileSync(this.db, "utf-8");
        let movies = JSON.parse(moviesJson);
        return movies
    },
    listarPelis: function() {
        let movies = this.leerJSON();
        let titleMovies = []
        movies.movies.forEach(function(movie) {
            titleMovies.push("\n" + movie.vote_average + "\n" + movie.title)
        })
        titleMovies.sort(function (a, b){
            return a - b;
        })
        return titleMovies
    }
}

module.exports = masVotadas