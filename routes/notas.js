const express = require("express")
const notasController = require("../controllers/notas")
const routerNotas = express.Router()

routerNotas.get("/", notasController.ObtenerNotaPorId)
routerNotas.post("/", notasController.crearNota)
routerNotas.get("/:id", notasController.ObtenerNotaPorId)
routerNotas.delete("/:id", notasController.eliminarNota)
routerNotas.put("/:id", notasController.editarNota)

module.exports = routerNotas