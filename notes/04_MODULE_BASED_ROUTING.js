const express = require("express");
const authRoutes = require("./routes/authRoutes");
const app = express();
const port = 5000;

app.use("/api", authRoutes);

app.get("/", (req, res) => {
  res.send("Hello from Home Page");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});