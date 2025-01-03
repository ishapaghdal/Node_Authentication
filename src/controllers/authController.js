const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");
const bcrypt = require('bcryptjs');

//Models
const User = require("../models/User");

//Service
const sendMail = require("../service/mailService");
const userService = require("../service/userService");

//secret key
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

//Genrate Jwt Tokens
const generateToken = (id) => {
  let jwtSecret = process.env.JWT_SECRET_KEY;
  let data = {
    time: Date(),
    userId: id,
  };

  const token = jwt.sign(data, jwtSecret, { expiresIn: "10h" });
  //   res.send(token);
};

//Verify Jwt Tokens
const validateToken = (req, res) => {
  let tokenHeaderKey = process.env.TOKEN_HEADER_KEY;
  let jwtSecretKey = process.env.JWT_SECRET_KEY;

  try {
    const token = req.headers["header_key"];

    const verified = jwt.verify(token, jwtSecretKey);
    if (verified) {
      return res.send("Token is valid");
    } else {
      // Access Denied
      return res.status(401).send("Access Denied");
    }
  } catch (err) {
    // Access Denied
    return res.status(401).send("Access Denied");
  }
};

//Register User
const registerUser = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, username, password, firstName, lastName, phoneNumber } =
      req.body;

    let response = await userService.findUserByEmail(email);

    if (response.status) {
      return res.status(400).json({ msg: response.message }); //email already exist
    }

    response = await userService.findUserByUsername(username);
    if (response.status) {
      return res.status(400).json({ msg: response.message }); //username already exist
    }

    //Hash Password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new User({
      email,
      username,
      password: hashedPassword,
      firstName,
      lastName,
      phoneNumber,
    });

    const savedUser = await userService.saveUser(user);

    const token = generateToken(savedUser.id);
    console.log(token);

    res.status(200).json({  msg: "User Registered Successfully" , token , savedUser});
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

//Login User
const loginUser = async (req, res) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email:emailOrUsername, password } = req.body;

    let response = await userService.findUserByEmail(emailOrUsername);
    if (response.status === false) {
      response = await userService.findUserByUsername(emailOrUsername);
      if (response.status === false) {
        return res.status(400).json({ msg: response.message });
      }
    }

    const user = response.data;

    if (!user) {
      return res.status(400).json({ msg: "Invalid Email or Username" });
    }

    if (!(await bcrypt.compare(password, user.password))) {
      return res.status(400).json({ msg: "Invalid Password" });
    }

    res.status(200).json({ msg: "User Logged In Successfully", user });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

//Not implemented yet
const sendMail_check = async (req, res) => {
  sendMail("ishapaghdal0@gmail.com", "subject", "text");
};

module.exports = {
  generateToken,
  validateToken,
  registerUser,
  loginUser,
  sendMail_check,
};
