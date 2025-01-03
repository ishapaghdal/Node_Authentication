//Imports
const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./src/config/db");

//Router
const authRouter = require("./src/routes/authRouter");

dotenv.config();
const app = express();

connectDB();
app.use(express.json());

//authentication routes
app.use('/api/auth', authRouter);

//Server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

//Home Route
app.get("/", (req, res) => {
  res.send("Hello World!");
});



