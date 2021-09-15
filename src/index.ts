#!/usr/bin/env node
import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("HI there");
});

app.listen(3005, () => {
  console.log("listening at 3005");
});
