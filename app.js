const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Welcome to shop"));
app.get("/auth", (req, res) => res.send("Welcome to auth"));

app.listen(3000);
