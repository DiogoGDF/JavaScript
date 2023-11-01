const express = require('express')

const routes = require("./routes")

// express precisa ser inicializado
const app = express()
//para poder receber do post o formato json:
app.use(express.json())

app.use(routes)

// Porta a ser usada pelo express
const PORT = 3333;

// express fica "observando a porta", e função a ser executada quando inicializar
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`))