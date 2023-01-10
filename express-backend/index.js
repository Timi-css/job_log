const express = require("express");
const app = express();
const PORT = 8080;
const client = require("./db/index");

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
