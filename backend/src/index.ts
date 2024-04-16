import express from "express";

const app = express();

app.use(express.json());

app.post("/hello", (req, res) => {
  res.send("Hello World!");
});

app.listen(7890, () => {
  console.log("Server started on port 7890");
});
