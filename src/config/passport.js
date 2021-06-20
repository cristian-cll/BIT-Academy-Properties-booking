const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const User = require("../models/user")


passport.use(new LocalStrategy({
    usernameField: "username",
    passwordField: "password"
}, async (username, password, done) => {

    //Comprobar si existe el username del usuario
    const user = await User.findOne({username: username})

    if(!user){
        return done(null, false, {message: "No se ha encontrado el usuario."})
    }else{
    //Comprobar si la contraseña es correcta
    const match = await user.matchPassword(password)

        if(match){
            return done(null, user) 
        }else{
            return done(null, false, {message: "Contraseña incorrecta"})
        }
    }
}))


//Si el usuario se ha logueado correctamente, lo guardaremos en la session del servidor.
passport.serializeUser((user, done) => {
    done(null, user.id);
})


passport.deserializeUser((id, done) =>{
    User.findById(id, (err, user) => {
        done(err, user);
    })
})