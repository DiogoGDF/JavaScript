const { Router } = require("express")

const usersRoutes = Router()

// get => uma requisição | quando alguém entrar na URL /, aquela será a resposta:
usersRoutes.get("/hello", (request, response) => {
    response.send("Hello, world!")
})

// /:id -> parâmetro (desta forma são obrigatórios esses atributos para rodar a página)
usersRoutes.get("/message/:id/:user", (request, response) => {
    response.send(`
        Id da mensagem: ${request.params.id}.
        Para o usuário: ${request.params.user}
    `)
})

//o query é como os :id, mas sem ser obrigatório, e não precisa ser especificado como parametro ("/users/:page/:limit")
usersRoutes.get("/", (request, response) => {
    const { page, limit } = request.query

    response.send(`Página: ${page}. Mostrar: ${limit}`)
})

//Para usar o método post é necessário utilizar uma ferramenta como o insomnia, que permite enviar dados junto com o request
usersRoutes.post("/", (request, response) => {
    const { name, email, password } = request.body

    //response.send("Você chamou o pai 😎")
    //response.send(`Usuário: ${name}, e-mail: ${email}, senha: *******`)
    response.json({ name, email, password })
})

module.exports = usersRoutes