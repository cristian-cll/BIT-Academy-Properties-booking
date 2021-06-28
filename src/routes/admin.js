const express = require ("express");
const router = express.Router();
const adminController = require("../controllers/admin/admin")

// Protegemos rutas para el amdin
const {isAdminAuthenticated} = require("../helpers/auth")


router.get("/", isAdminAuthenticated, adminController.cpanel);

router.get("/add-new", isAdminAuthenticated, adminController.renderNewPropertyPage);

router.post("/add-new", isAdminAuthenticated, adminController.createProperty);

router.get("/edit/:id", isAdminAuthenticated, adminController.renderEditProperty);

router.post("/edit", isAdminAuthenticated, adminController.editProperty);

router.get("/delete/:id", isAdminAuthenticated, adminController.deleteProperty); //Eliminar la propiedad


router.get("/login", adminController.renderAdminLogin);

router.post("/login", adminController.adminLogin);

router.get("/logout", adminController.adminLogout);



module.exports = router;