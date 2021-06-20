// Requerimos las variables de entorno del archivo .env en el root
require("dotenv").config();

// Importing native and non native modules 
const express = require("express");
const path = require("path");
const db = require("./database");
const flash = require("connect-flash");
const session = require("express-session");
const passport = require("passport");


// Importing routes 
const apartmentRoutes = require("./routes/property");
const adminRoutes = require("./routes/admin");
const userRoutes = require("./routes/user");
const bookingRoutes = require("./routes/booking");
const indexRoutes = require("./routes/index");


// Initializations
const app = express();
require("./config/passport");

//Settings
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
//app.locals = require('./helpers/searchFunctions')


// Middlewares
app.use(express.urlencoded({ extended: false}));
app.use(express.static('public'));
app.set('port', process.env.PORT || 3000);
//Guarda los mensajes en el servidor
app.use(
    session({
        secret: "secret",
        resave: true,
        saveUninitialized: true
    })
);
app.use(passport.initialize())
app.use(passport.session())
app.use(flash())

// Global Variables
app.use((req, res, next) => {
    res.locals.success_msg = req.flash("success_msg");
    res.locals.error_msg = req.flash("error_msg");
    res.locals.error = req.flash("error");
    res.locals.user = req.user || null;
    next();
});


// Routes. Using routes from another file
app.use(apartmentRoutes);
app.use("/admin/", adminRoutes);
app.use("/user/", userRoutes);
app.use(bookingRoutes);
app.use(indexRoutes);


// Cualquier otro endpoint, tanto si es GET, POST, PUT o DELETE. 
//Si no cae por ningún otro endpoint, devuelve esto.
app.use((req, res) => {
    res.status(404).render("pages/404");
});

app.use(function(err, req, res, next) {
    console.error("error", err.message);
    res.status(500).send('Something broke!');
});


// Connexion DB and Server on listening
db.connectDB()
 .then(() => {
    app.listen(app.get("port"), () =>  {
        console.log(`Server listening on port: ${app.get("port")} `) 
    })
 })


module.exports = app