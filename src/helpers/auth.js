const helpers = {}

helpers.isAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()){
        return next();
    }
    req.flash("error_msg", "No autorizado.");
    res.redirect("/user/login")
}


helpers.isAdminAuthenticated = (req, res, next) => {
    if (req.isAuthenticated() && req.user.role === "Admin"){
        return next();
    }
    req.flash("error_msg", "No autorizado.");
    res.redirect("/user/login")
}

module.exports = helpers;