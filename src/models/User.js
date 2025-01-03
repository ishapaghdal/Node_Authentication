const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,
    },
    email:{
        type: String,
        unique: true,
    },
    phoneNumber:{
        type: String,
    },
    password:{
        type: String,
        required: true,
    },
    firstName:{
        type: String,
    },
    lastName:{
        type: String,
    }
});

module.exports = mongoose.model("User", UserSchema);