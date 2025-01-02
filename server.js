//Imports
const express = require("express");
const http = require("http");
const dotenv = require("dotenv");
const connectDB = require("./src/config/db");

//Router
const authRouter = require("./src/routes/authRouter");

dotenv.config();

const app = express();
const server = http.createServer(app);
app.use(express.json());

connectDB();

app.use(express.json());

app.use('/api/auth', authRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});



