// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv/config");

// ℹ️ Connects to the database
require("./db");

// Handles http requests (express is node js framework)
const express = require("express");

const app = express();

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require("./config")(app);

// this is for the build
const path = require('path');
app.use(express.static(path.join(__dirname, "/client/build")));

// everything for the login
const session = require('express-session');
const MongoStore = require('connect-mongo');
const DB_URL = process.env.MONGODB_URI || "mongodb://localhost/berlin-day";

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    cookie: { maxAge: 1000 * 60 * 60 * 24 },
    saveUninitialized: false,
    resave: true,
    store: MongoStore.create({
      mongoUrl: DB_URL
    })
  })
)

const User = require('./models/User');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

passport.serializeUser((user, done) => {
    done(null, user._id);
  })
  
  // this is used to retrieve the user by it's id (that is stored in the session)
  passport.deserializeUser((id, done) => {
    User.findById(id)
      .then(dbUser => {
        done(null, dbUser)
      })
      .catch(err => {
        done(err);
      })
    })
  
  passport.use(
    new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password'
      }, (email, password, done) => {
      // this logic will be executed when we log in
      User.findOne({ email: email })
        .then(userFromDB => {
          console.log(userFromDB)
          if (userFromDB === null) {
            // there is no user with this username
            done(null, false, { message: 'Wrong Credentials' });
          } else if (!bcrypt.compareSync(password, userFromDB.password)) {
            // the password does not match
            done(null, false, { message: 'Wrong Credentials' });
          } else {
            // everything correct - user should be logged in
            done(null, userFromDB);
          }
        })
        .catch(err => {
          next(err);
        })
    })
)
  
app.use(passport.initialize());
app.use(passport.session());  

// 👇 Start handling routes here

const auth = require("./routes/auth");
app.use("/auth", auth);

const event = require("./routes/event");
app.use("/event", event);

const search = require("./routes/search");
app.use("/search", search);

const day = require("./routes/day");
app.use("/day", day)

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;
