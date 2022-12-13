const express = require("express");
const passport = require("passport");
const jwt = require("jsonwebtoken");

const { signup, login, homepage } = require("../controllers/index");

const router = express.Router();

// ...
router.get("/", homepage);

// ...
router.post(
  "/signup",
  passport.authenticate("signup", { session: false }),
  signup
);

// ...
router.post("/login", login);

module.exports = router;
