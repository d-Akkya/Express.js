// FUNCTIONS

const hello = (req, res) => {
  res.send("Hello World!");
};

const getData = (req, res) => {
  res.send("Data fetched successfully!");
};

module.exports = { hello, getData };