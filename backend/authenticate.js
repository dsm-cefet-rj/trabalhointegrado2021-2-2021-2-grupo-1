const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const Usuario = require("./models/usuarios");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const jwt = require("jsonwebtoken");
require("dotenv").config();

passport.use(new LocalStrategy(Usuario.authenticate()));
passport.serializeUser(Usuario.serializeUser());
passport.deserializeUser(Usuario.deserializeUser());

exports.getToken = function (user) {
  return jwt.sign(user, process.env.KEY,
    { expiresIn: 3600 });
};

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.KEY;

exports.jwtPassport = passport.use(new JwtStrategy(opts,
  (jwt_payload, done) => {
    Usuario.findOne({ _id: jwt_payload._id }, (err, user) => {
      if (err) {
        return done(err, false);
      }
      else if (user) {
        return done(null, user);
      }
      else {
        return done(null, false);
      }
    });
  }));

exports.verifyUser = passport.authenticate("jwt", { session: false }); 