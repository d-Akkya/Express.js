const express = require("express");
const app = express();
const path = require("path");
const port = 5000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./public", "html/index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/html/about.html"));
});

app.listen(port, () => console.log(`Server is running on port ${port}`));