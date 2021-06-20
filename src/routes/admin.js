const express = require ("express");
const router = express.Router();
const adminController = require("../controllers/admin/admin")
//const {isAdminAuthenticated} = require("../helpers/auth")

//Endpoints about the general functions of the site.

router.get("/", adminController.cpanel);

router.get("/add-new", adminController.createPropertyPage);

router.post("/add-new", adminController.createProperty);

router.get("/:type/:type-edit", adminController.createPropertyPage);

router.post("/:type/:type-edit", adminController.createPropertyPage);




router.get("/login", adminController.renderAdminLogin);

router.post("/login", adminController.adminLogin);

router.get("/logout", adminController.adminLogout);



module.exports = router;