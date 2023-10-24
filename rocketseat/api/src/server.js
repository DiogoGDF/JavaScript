const express = require('express')

// express precisa ser inicializado
const app = express()

// Porta a ser usada pelo express
const PORT = 3333;

// express fica "observando a porta", e função a ser executada quando inicializar
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`))