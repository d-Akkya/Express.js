// UNDERSTANDING MIDDLEWARES

const express = require("express");
const app = express();
const port = 3000;

const verifyUser = (req, res, next) => {
  console.log("User verified");
  next();
};

// ROUTING MIDDLEWARES
// app.use() is used to mount the middleware function
app.use("/user", verifyUser, (req, res) => {
  res.send("I'm a middleware function");
});

// BUILT-IN MIDDLEWARES
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static());

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});