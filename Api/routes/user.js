const express = require("express");
const router = express.Router();
const { Auth } = require("../middlewares/auth");
const UserController = require("../controllers/userController.js");

//middleware
router.use(Auth.author);

router.get("/get/", UserController.showAllUser);

module.exports = router;
