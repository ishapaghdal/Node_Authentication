const User = require("../models/User");

const findUserByEmail = async (email) => {
  try {
    let user = await User.findOne({ email });
    if (user) {
      return user;
    }
  } catch (err) {
    console.error(err.message);
    throw new Error("Error in finding user by email");
  }
};

const findUserByUsername = async (username) => {
  try {
    let user = await User.findOne({ username });
    if (user) {
      return user;
    }
  } catch (err) {
    console.error(err.message);
    throw new Error("Error in finding user by username");
  }
};

module.exports = { findUserByEmail, findUserByUsername };
