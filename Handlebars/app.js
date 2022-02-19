const express = require('express')
const path = require('path')
const app = express()
const hbsEngine = require('./engine/hbs');
const hbsRouter = require('./routes/home')

const PORT = process.env.PORT || 8080

hbsEngine(app);

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("/static", express.static(path.join(__dirname, 'public')));

app.use('/', hbsRouter);


app.listen(PORT, () => console.log(`Escuchando en el puerto ${PORT}`))