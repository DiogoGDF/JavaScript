require('express-async-errors')
require('dotenv/config')
const migrationsRun = require('./database/sqlite/migrations')
const AppError = require('./utils/AppError')
const express = require('express')
const routes = require("./routes")
const cors = require('cors')

//executar o banco de dados: 
migrationsRun()

// express precisa ser inicializado
const app = express()
app.use(cors())
//para poder receber do post o formato json:
app.use(express.json())

app.use(routes)


app.use(( error, request, response, next ) => {
    if (error instanceof AppError) {
        return response.status(error.statusCode).json({
            status: 'error',
            message: error.message
        })
    }

    console.error(error)

    return response.status(500).json({
        status: "error",
        message: "Internal server error"
    })
})

// Porta a ser usada pelo express
const PORT = 3333;

// express fica "observando a porta", e função a ser executada quando inicializar
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`))