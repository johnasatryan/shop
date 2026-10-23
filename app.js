const express = require("express");
const app = express();

const PORT = 3001;
app.get("/", (req, res) => res.send("Welcome to shop"));
app.get("/auth", (req, res) => res.send("Welcome to auth"));

app.listen(PORT);
