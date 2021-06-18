const express = require ("express");
const router = express.Router();
const adminController = require("../controllers/admin/admin")



//Endpoints about the general functions of the site.

router.get("/", adminController.cpanel);

router.get("/add-new", adminController.createPropertyPage);

router.post("/add-new", adminController.createProperty);



module.exports = router;