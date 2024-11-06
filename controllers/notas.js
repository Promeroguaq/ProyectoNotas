const Notas= require("../models/notas")
exports.obtenerNotas = async (req,res)=>{
    try{
        const notas = await Notas.find()
        res.status(200).json({notas})
    }catch{
        res.status(500).json({error: "Error al obtener las notas"})
    }
}
exports.crearNota = async (req,res)=>{
   try{
     const nuevaNota = new Nota(req.body)
     await nuevaNota.save()
     res.json({notas}).status(201)
   } catch(error){
    res.json({error})
   }
}
exports.ObtenerNotaPorId = async (req,res)=>{
    try{
        id = req.params.id
        const nota = await Nota.findById(id)
        if(!nota){
            return res.status(404).json({error: "Nota no encontrada"})
        }
        res.status(200).json(nota)
    }catch (error){
    res.json({error}).status(500)
  }
}
exports.eliminarNota = async (req,res)=>{
    try{
        id = req.params.id
        const nota = await Nota.findByIdAndDelete(id)
        if(!nota){
            return res.status(404).json({error: "Nota no encontrada"})
        }
        res.status(200).json(nota)
    }catch (error){
    res.json({error}).status(500)
  }
}
exports.editarNota = async (req,res)=>{
    try{
        const id = req.params.id
        const nota = req.body
        const notaModificada = await Nota.findByIdAndUpdate(id,notaBody)
        if(!notaModificada){
            return res.status(404).json({error: "Nota no encontrada"})
        }
        res.status(200).json(notaModificada)
    } catch (error){
        res.json({error}).status(500)
    }
}