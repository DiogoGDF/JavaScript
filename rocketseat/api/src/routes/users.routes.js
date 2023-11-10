//const Router = require("express")
const { Router } = require("express")
const UsersController = require('../controllers/UsersController')

const usersRoutes = Router()

//next => destino da requisição
function myMiddleware(request, response, next){
    if(!request.body.isAdmin){
        console.log("Pare ✋, impostor 😡!")
        return response.json({ message: "user unauthorized" })
    }
    console.log("Siga em frente meu rei! 👑🗿")
    next()
}

const usersController = new UsersController()

//Middleware para todas as rotas 👇
//userRoutes.use(myMiddleware)

//Middleware para uma rota específica 👇
usersRoutes.post('/', myMiddleware, usersController.create)























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
    //const page = request.query.page
    //const limit = request.query.limit
    const { page, limit } = request.query

    response.send(`Página: ${page}. Mostrar: ${limit}`)
})

//Para usar o método post é necessário utilizar uma ferramenta como o insomnia, que permite enviar dados junto com o request
usersRoutes.post("/old", (request, response) => {
    //response.send("Você chamou o pai 😎")
    //response.send(`Usuário: ${name}, e-mail: ${email}, senha: *******`)
    const { name, email, password } = request.body
    response.json({ name, email, password })
})

module.exports = usersRoutes