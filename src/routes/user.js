const express = require ("express");
const router = express.Router();
const userController = require("../controllers/user/user")

const {isAuthenticated} = require("../helpers/auth");

router.get("/login", userController.renderUserLoginSignUp);

router.post("/login", userController.userLogin);

router.post("/signup", userController.userSignUp);

router.get("/logout", isAuthenticated, userController.userLogout);

router.get("/profile", isAuthenticated, userController.renderUserProfile);


module.exports = router;