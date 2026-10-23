const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Welcome to shop"));

app.listen(3000);
