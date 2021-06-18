const express = require ("express");
const router = express.Router();
const propertyController = require("../controllers/property")



router.get("/:type/:id/:type-detail", propertyController.detail); //Detalle de la propiedad





module.exports = router;