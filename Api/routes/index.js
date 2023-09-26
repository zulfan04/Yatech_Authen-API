const express = require("express");
const router = express.Router();

const userRouter = require("./user");
const loginRouter = require("./login");

router.use("/api/user", userRouter);
router.use("/login", loginRouter);

module.exports = router;
