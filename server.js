const express = require("express");
const connectDB = require("./db/connect");

const app = express();

// Config dotenv
require("dotenv").config();

// Init middleware
app.use(express.json());

// Connect DB
connectDB();

if(process.env.NODE_ENV == 'production') {
  app.use(express.static('client/build'));
}
// app.use(express.static('client/build'));

// Define Routes
app.use("/api/register", require("./api/register"));
app.use("/api/login", require("./api/login"));
app.use("/api/getUser", require("./api/getUser"));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server Running ${PORT}`);
});
