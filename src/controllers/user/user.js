const passport = require("passport")
const {User, Booking} = require("../../models/index")

// Renderiza la pagina de logueo
exports.renderUserLoginSignUp = (req, res) => {
    res.render("pages/user/login");
}

// Renderiza la pagina de perfil de usuario
exports.renderUserProfile = async (req, res) => {
    
    const bookings = await Booking.find({user : req.user._id}).populate("property") || []

    // Si es admin, redirigir a panel de control
    if(req.user.role === "Admin"){
        return res.redirect("/admin");
    }

    res.render("pages/user/profile", {
        bookings
    });
}

// Autentifica el usuario y crea la sessión
exports.userLogin = passport.authenticate("local", {
    failureRedirect: "/user/login",
    successRedirect: "/user/profile",
    failureFlash: true
});

// Destruye la sesión del usuario
exports.userLogout = (req, res) => {
    req.logout();
    req.flash("success_msg", "Has cerrado sesión. Hasta pronto!");
    res.redirect("/")
}

// Registra al usuario, encriptando password
exports.userSignUp = async (req, res) => {
    const {username, password} = req.body;
    //if(password != confirm_password)
    const usernameDB = await User.findOne({username: username})

    if(!usernameDB){
        const newUser = new User({username, password});
        newUser.password = await newUser.encryptPassword(password)
        await newUser.save()
        res.redirect("/user/login");
    }
}