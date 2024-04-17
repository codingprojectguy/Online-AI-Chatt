import express from "express";

const app = express();

app.use(express.json());

app.post("/", (req, res) => {
  res.send("Backend connected!");
});

app.listen(7890, () => {
  console.log("Server started on port 7890");
});
