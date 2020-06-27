const fs = require("fs");

let sucursales = {
    db: "./data/theaters.json",
    titulo: "Estas son nuestras sucursales",
    leerJSON: function(){
        let sucursalesJson = fs.readFileSync(this.db, "utf-8");
        let sucursales = JSON.parse(sucursalesJson);
        return sucursales
    },
    cantidad: function(){
        return this.leerJSON().total_theaters
    },
    listarSucursales: function(){
        let sucursales = this.leerJSON();
        let theaters = []
        sucursales.theaters.forEach(function(theater){
            theaters.push("\n" + theater.name + ", " + theater.address + ", " + "\n" + theater.description + "\n" + "Total de salas: " + theater.total_rooms)
        })
        return theaters
    }
};

module.exports = sucursales