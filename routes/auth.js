const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const passport = require("passport");

// add new user
router.post("/signup", (req, res, next) => {
  console.log('This is the req.body: ' , req.body);
  const {
    username,
    password,
    email
  } = req.body

  if (password.length < 8) {
    return res.status(400).json({message: "your password needs to be at least 8 characters long." })
  } 
  if (username === "") {
    return res.status(400).json({message: "you need to enter a username."})
  }
  
  User.findOne({ $or: [{username: username}, {email: email}] })
  .then(userFromDB => {
    console.log("console 1")
    if (userFromDB !== null) {
      let error = "";
      if (userFromDB.username === username && userFromDB.email === email) {
        error = "username and email";
      } 
      if (userFromDB.username === username) {
        error = "username";
      }
      if (userFromDB.email === email) {
        error = "email";
      }
      return res.status(400).json({message: `This ${error} already exists.`});
    } else {
      const salt = bcrypt.genSaltSync();
      const hash = bcrypt.hashSync(password, salt);

      User.create({
        username: username,
        password: hash,
        email: email
      })
      .then(createdUser => {
        console.log(createdUser);
        res.status(200).json(createdUser)
      })
    }
  })
  .catch(error => res.json(error))
});

// log in user
router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user) => {
    if (err) {
      return res.status(400).json({ message: "Error while logging in" });
    }
    if (!user) {
      return res.status(400).json({ message: "Wrong credentials" });
    }
    req.login(user, (err) => {
      if (err) {
        return res.status(500).json({ message: "Error while logging in" });
      }
      return res.status(200).json(user);
    });
  })(req, res);
});

// --------------------- ADD LATER : CHECK IF USER IS LOGGED IN ---------------------------------- //
// router.get("/loggedin", (req, res) => {
//   console.log("this is the user from the session: ", req.user);
//   res.json(req.user);
// });

// logout
router.delete("/logout", (req, res) => {
  req.logout();
  req.session.destroy();
  res.status(200).json({ message: "Successful Logout" });
});

module.exports = router;
