import { check, validationResult } from "express-validator"

export const validateLogin = [
    check("email").isEmail().withMessage("Please Enter A Valid Email").normalizeEmail(),
    check("password").not().isEmpty().withMessage("Password Is Required").trim().escape(),
]

export const validateRegister = [
    check("email").not().isEmpty().withMessage("Email Is Required").isEmail().withMessage("Please Enter A Valid Email").normalizeEmail(),
    check("password").not().isEmpty().withMessage("Password Is Required").isLength({min:5}).withMessage("Password Must Be 5 characters long").trim().escape(),
    check("username").not().isEmpty().withMessage("Username Is Required").matches(/^[a-zA-Z0-9]+$/).withMessage('username must not contain spaces or special characters').trim().escape()
];
