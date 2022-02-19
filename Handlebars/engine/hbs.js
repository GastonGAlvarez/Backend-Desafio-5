const { engine } = require('express-handlebars');
const path = require('path')

module.exports = function (app){
    app.set("view engine", "hbs");
    app.engine("hbs", engine({
      layoutDir: path.join(__dirname, "views/layouts"),
      extname: "hbs",
      defaultLayout: "index"
    }))
}