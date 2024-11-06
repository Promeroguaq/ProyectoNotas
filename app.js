const express = require('express');
const mongoose = require("moongose")
require("dotenv").config()

const holaRoutes = require('./routes/holaMundo')
const notasRoutes = require('./routes/notas')
const app = express();
const port = 3006

//CONEXION A LA BASE DE DATOS MONGODB
mongoose.connect(process.env.MONGO_URI)
.then(console.log("Conectando a la base de datos"))
.catch(err=> console.error("No se pudo conectar a MongoDb", err))


app.set("port", port)

app.get("/",(req,res)=>{
    res.send("Hola Mundo")
})

app.use("/api/hola", holaRoutes)
app.use("/api/hola", notasRoutes)

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})