const fs = require("fs");

let preguntasFrecuentes = {
    db: "./data/faqs.json",
    titulo: "Preguntas frecuentes",
    leerJson: function(){
        let pregFreq = fs.readFileSync(this.db, "utf-8");
        let preg = JSON.parse(pregFreq);
        return preg
    },
    listarPreguntas: function(){
        let preguntas = this.leerJson();
        let faqs = []
        preguntas.faqs.forEach(function(pregunta){
            faqs.push("\n" + pregunta.faq_title + ", " + pregunta.faq_answer + "\n")
        })
        return faqs
    },
    cantidad: function() {
        return this.leerJson().total_faqs
    }
}

module.exports = preguntasFrecuentes