// import { createServer } from "node:http"

// //request => dados que vem da requisição
// //response => dados de resposta
// const server = createServer((request, response) => {
//   response.write("Hello, World!")
//   return response.end()
// })
// server.listen(3333)

//CRUD => Create, Read, Update, Delete

// POST => método HTTP para criar um registro
// PUT => ''  ''  para alteração

import { fastify } from 'fastify'
import { DatabaseMemory } from './database-memory.js'

const server = fastify()
const database = new DatabaseMemory()

// server.get('/') -> significa que quando o usuário digitar localhost:3333/ (sem nenhuma /asdfasdf adicional), irá retornar o método abstrato
server.get('/', () => {
  return 'Hello, World!'
})
server.get('/hello', () => {
  return 'Hello, Fellow Cowboy!'
})
server.get('/node', () => {
  return 'Hello, Node.js!'
})

// POST http://localhost:3333/videos => para criar um vídeo
server.post('/videos', () => {
  database.create({
    title: 'Video 01',
    description: 'Esse é o video 01',
    duration: 180,
  })
  console.log(database.list())
})
server.get('/videos', () => {
  return ''
})
// Rota para atualizar um video
server.put('/videos/:id', () => {
  return ''
})
server.delete('/videos/:id', () => {
  return ''
})

server.listen({
  port: 3333,
})