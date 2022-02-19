const express = require('express')
const path = require('path')
const app = express()

const ejsRouter = require('./routes/ejs')

const ejsEngine = require('./engine/ejs')

const PORT = process.env.PORT || 8080

ejsEngine(app)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("/static", express.static(path.join(__dirname, 'public')));
app.use("/", ejsRouter)


app.listen(PORT, () => console.log(`Escuchando en el puerto ${PORT}`))