import express from "express";

const app = express();

//middlewares
app.use(express.json());

//connections and listeners
app.listen(7890, () => {
  console.log("Server started on port 7890");
});
