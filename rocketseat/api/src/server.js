const express = require('express')

// express precisa ser inicializado
const app = express()

// get => uma requisição | quando alguém entrar na URL /, aquela será a resposta:
app.get("/", (request, response) => {
    response.send("Hello, world!")
})

// /:id -> parâmetro (desta forma são obrigatórios esses atributos para rodar a página)
app.get("/message/:id/:user", (request, response) => {
    response.send(`
        Id da mensagem: ${request.params.id}.
        Para o usuário: ${request.params.user}
    `)
})

//o query é como os :id, mas sem ser obrigatório, e não precisa ser especificado como parametro ("/users/:page/:limit")
app.get("/users", (request, response) => {
    const { page, limit } = request.query

    response.send(`Página: ${page}. Mostrar: ${limit}`)
})

// Porta a ser usada pelo express
const PORT = 3333;

// express fica "observando a porta", e função a ser executada quando inicializar
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`))