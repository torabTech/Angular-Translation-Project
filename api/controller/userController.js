const mongoose = require("mongoose");

const User = mongoose.model("User");

const registerUser = function (req, res) {
    console.log('reached')
  if (Object.keys(req.body).length == 0)
    return res.status(400).json({ message: "body data required" });

  const data = {
    name: req.body.name,
    username: req.body.username,
    password: req.body.password,
    repeatPassword: req.body.repeatPassword,
  };

  User.create(data, function (err, result) {
    if (err) {
      res.status(500).json(err.message);
      return;
    }

    res.status(201).json({ message: "User has been successfully registered!" });
  });
};

module.exports = {
    registerUser
}
