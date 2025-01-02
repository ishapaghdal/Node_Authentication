function validateUsername(req, res, next) {
    const username = req.body.username;
    const usernameRegex = /^[a-zA-Z0-9]+$/;

    if (!usernameRegex.test(username)) {
        return res.status(400).json({ msg: "Invalid username" });
    }

    next();
}

module.exports = validateUsername;