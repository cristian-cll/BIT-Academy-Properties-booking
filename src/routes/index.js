const express = require ("express");
const router = express.Router();
const indexController = require("../controllers/index")


//Endpoints about the general functions of the site.

router.get("/", indexController.home);

router.get("/about", indexController.about);

router.get("/search/", indexController.search);
//router.get("/search/:query/:page", indexController.search);

//router.get("/search/", indexController.search);




module.exports = router;