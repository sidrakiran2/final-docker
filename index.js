const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(3020, () => {
  console.log("App listening on port 3060");
});

