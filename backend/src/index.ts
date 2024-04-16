import express from "express";

const app = express();

app.post("/hello", (req, res) => {
  res.send("Hello World!");
});

app.listen(7890, () => {
  console.log("Server started on port 7890");
});
