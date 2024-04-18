import express from "express";

const app = express();

app.use(express.json());

app.post("/", (req, res) => {
  const { name } = req.body.name;
  console.log(name);
  res.send(`Hello ${name} Backend server!`);
});

app.listen(7890, () => {
  console.log("Server started on port 7890");
});
