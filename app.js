const express = require('express');
const holaRoutes = requiere('./routes/holaMundo')

const app = express();
const port = 3306

app.set("port", port)

app.get("/",(req,res)=>{
    res.send("Hola Mundo")
})

app.use("/api/hola", holaRoutes)

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})