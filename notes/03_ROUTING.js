const express = require("express");
const app = express();
const port = 5000;

// HTTP METHOS (CRUD) - CREATE, READ, UPDATE, DELETE
// 1. GET -> Read -> You can't pass data in the body
// 2. POST -> Create -> You can pass data in the body
// 3. PUT -> Update -> You can pass data in the body
// 4. DELETE -> Delete -> You can pass data in the body, but we don't do that

// GET REQUEST
app.get("/", (req, res) => {
  res.send("Hello World");
});

// POST REQUEST
app.post("/submit", (req, res) => {
  res.send("Data submitted successfully!");
});

// PUT REQUEST
app.put("/update", (req, res) => {
  res.send("Data updated!");
});

// DELETE REQUEST
app.delete("/delete", (req, res) => {
  res.send("Data deleted!");
});

// ROUTE PARAMETERS
app.get("/product/:id/:name", (req, res) => {
  // 1st way of grabbing the data
  //   const id = req.params.id;
  //   const name = req.params.name;

  // 2nd way of grabbing the data
  const { id, name } = req.params;

  res.send(`Product id is ${id} and name is ${name}`);
  // grab the id
  // further process the id and get the product
});

// QUERY STRING
app.get("/search", (req, res) => {
  // I have to grab the title from the query
  const { title, price } = req.query;
  return res.send(`You searched for: ${title} with price: ${price}`);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});