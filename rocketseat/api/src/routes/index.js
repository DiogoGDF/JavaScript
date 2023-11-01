const { Router } = require("express")

const usersRouter = require("./users.routes")

const routes = Router()

//agora nas rotas dentro do users.routes eu não preciso mais escrever /users, é automático
routes.use("/users", usersRouter)

module.exports = routes