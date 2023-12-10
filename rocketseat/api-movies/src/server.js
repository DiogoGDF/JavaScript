require('express-async-errors')
const express = require('express')
//const cors = require('cors')
const routes = require('./routes')
const AppError = require('./utils/AppError')

const app = express()
//app.use(cors)
app.use(express.json())
app.use(routes)

app.use((error, req, res, next) => {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      status: 'error',
      message: error.message
    })
  }
  console.log(error)
  return res.status(500).json({
    status: 'error',
    message: error.message
  })
})

app.get('/', (req, res) => {
  res.send('Hello, World!')
})

const port = 3003

app.listen(port, () => console.log(`Server is running on port ${port}`))