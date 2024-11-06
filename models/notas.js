const moongose = require("mongoose")

const notasSchema = new moongose.Schema({
    nombreEstudiante:{
        type: String,
        required: true,
        unique:true
    },
    materia:{
        type: String,
        required: true
    },
    profesor:{
        type: String,
        required: true
    },
    nota:{
        type: Number,
        required: true
    }
})

module.exports = moongose.model("Notas", notasSchema)