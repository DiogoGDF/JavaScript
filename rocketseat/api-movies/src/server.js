const express = require('express')
//const cors = require('cors')
const routes = require('./routes')

const app = express()
//app.use(cors)
app.use(express.json())
app.use(routes)

app.get('/', (req, res) => {
  res.send('Hello, World!')
})

const port = 3003
app.listen(port, () => console.log(`Server is running on port ${port}`))