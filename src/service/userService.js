const User = require("../models/User");

const findUserByEmail = async (email) => {
  try {
    let user = await User.findOne({ email });
    if (user) {
      return {
        data: user,
        status: true,
        message: "User exist with this email",
      };
    } else {
      return {
        data: null,
        status: false,
        message: "User not found with this email",
      };
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
      return {
        data: user,
        status: true,
        message: "User exist with this username",
      };
    } else {
      return {
        data: null,
        status: false,
        message: "User not found with this username",
      };
    }
  } catch (err) {
    console.error(err.message);
    throw new Error("Error in finding user by username");
  }
};

module.exports = { findUserByEmail, findUserByUsername };
