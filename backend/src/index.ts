import express from "express";

const app = express();

app.post("/api/chat", (req, res) => {
  res.send("Hello World!");
});
