const express = require('express');
const holaController = require("../controllers/holaMundo")
const router = express.Router()

router.get("/",holaController.holaMundo)


router.get("/adios",(req,res)=>{
    console.log("estamos en la ruta adios")
}) 

router.get("/ruta",(req,res)=>{
    console.log("estamos en la ruta principal")
    res.send("Esta es la ruta principal")
})

module.exports = router;