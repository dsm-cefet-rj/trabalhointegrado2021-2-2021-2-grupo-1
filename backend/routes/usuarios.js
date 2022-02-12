var express = require("express");
var router = express.Router();
var passport = require("passport");

var Usuario = require("../models/usuarios");

var authenticate = require("../authenticate");

router.post("/signup", (req, res, next) => {
  Usuario.register(new Usuario({ username: req.body.username, email: req.body.email, tipo: req.body.tipo }), req.body.password,
    (err, user) => {
      if (err) {
        res.statusCode = 500;
        res.setHeader("Content-Type", "application/json");
        res.json({ err: err });
      } else {
        passport.authenticate("local")(req, res, () => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json({ success: true, status: "Registration Successful!" });
        });
      }
    });
});

router.post("/login", passport.authenticate("local"), (req, res) => {
  var token = authenticate.getToken({ _id: req.user._id });
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.json({ id: req.user._id, user: { tipo: req.user.tipo, username: req.user.username }, token: token });
});

// router.post("/logout", (req, res, next) => {
//   req.logout();
//   req.session.destroy();
// });

module.exports = router;