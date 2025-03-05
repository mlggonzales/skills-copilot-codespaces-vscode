// Create web server
// Create a new Express app
const express = require("express");
const app = express();

// Create a new route
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

// Start the server
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});