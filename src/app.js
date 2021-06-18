// Requerimos las variables de entorno del archivo .env en el root
require("dotenv").config();

const express = require("express");
const path = require("path");
const db = require("./database");


// Initiliazations
const app = express();

//Middlewares
app.use(express.urlencoded({ extended: false}));
app.use(express.static('public'));
app.set('port', process.env.PORT || 3000);


//Importing routes 
const apartmentRoutes = require("./routes/property");
const adminRoutes = require("./routes/admin");
const indexRoutes = require("./routes/index");

//Using routes from another file
app.use(apartmentRoutes);
app.use("/admin/", adminRoutes);
app.use(indexRoutes);

//Settings
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
//app.locals = require('./helpers/searchFunctions')


//Cualquier otro endpoint, tanto si es GET, POST, PUT o DELETE. Si no cae por ningún otro endpoint, devuelve esto.
app.use((req, res) => {
    res.status(404).render("pages/404");
});

app.use(function(err, req, res, next) {
    console.error("error", err.message);
    res.status(500).send('Something broke!');
});


db.connectDB()
 .then(() => {
    app.listen(app.get("port"), () =>  {
        console.log(`Server listening on port: ${app.get("port")} `) 
    })
 })


module.exports = app


