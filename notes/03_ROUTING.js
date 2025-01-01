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
})

// POST REQUEST
app.post("/submit", (req, res) => {
    res.send("Data submitted successfully!");
})

// PUT REQUEST
app.put("/update", (req, res) => {
    res.send("Data updated!");
})

// DELETE REQUEST
app.delete("/delete", (req, res) => {
    res.send('Data deleted!');
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});