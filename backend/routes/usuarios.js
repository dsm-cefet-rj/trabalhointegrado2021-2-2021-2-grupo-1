var express = require("express");
var router = express.Router();
var passport = require("passport");

var Usuario = require("../models/usuarios");

var authenticate = require("../authenticate");

router.post("/signup", (req, res) => {
  Usuario.register(new Usuario({ username: req.body.username, email: req.body.email, tipo: req.body.tipo }), req.body.password,
    (err, user) => {
      res.setHeader("Content-Type", "application/json");

      if (err) {
        res.statusCode = 500

        if (err.name === "UserExistsError") {
          res.json({ error: "Usuário já existe." });
        } else {
          res.json({ error: err });
        }
      } else {
        passport.authenticate("local")(req, res, () => {
          res.status(200).json({ success: true, status: "Registration Successful!" });
        });
      }
    });
});

router.post("/login", passport.authenticate("local"), (req, res) => {
  var token = authenticate.getToken({ _id: req.user._id });
  res.setHeader("Content-Type", "application/json");
  res.status(200).json({ id: req.user._id, user: { tipo: req.user.tipo, username: req.user.username }, token: token });
});

router.get('/logout', (req, res, next) => {
  if (req.session) {
    req.session.destroy();
    res.clearCookie('session-id');
    res.redirect('/');
  }
  else {
    var err = new Error('You are not logged in!');
    err.status = 403;
    next(err);
  }
});

module.exports = router;