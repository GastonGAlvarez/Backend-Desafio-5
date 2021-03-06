const express = require('express')
const path = require('path')
const app = express()

const pugRouter = require('./routes/pug')

const pugEngine = require('./engine/pug')

const PORT = process.env.PORT || 8080

pugEngine(app)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("/static", express.static(path.join(__dirname, 'public')));
app.use("/", pugRouter)


app.listen(PORT, () => console.log(`Escuchando en el puerto ${PORT}`))