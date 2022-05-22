// Starting point of the express server
require("dotenv").config();
const express = require("express");
const connectDB = require("./db/connect");
const { dp } = require("./misc/helpers");
const helmet = require("helmet");
const cors = require("cors");

//Microservices Routes
const Auth = require("./routes/authentication");
const users = require("./routes/phone_auth/users.routes")

const app = express();

//Application Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());
app.use(cors());

//Application Routes
app.use("/auth", Auth);
//app.use("/users", users);


app.get("/", (req, res) => {
  res.send("Welcome");
});

const PORT = process.env.PORT || 8080;

const start = async () => {
  try {
    connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => dp("http://localhost:" + PORT));
  } catch (err) {
    dp(err);
  }
};

start();
