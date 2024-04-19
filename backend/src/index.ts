import express from "express";
import { config } from "dotenv";

config();
const app = express();

//middlewares
app.use(express.json());

//connections and listeners
app.listen(7890, () => {
  console.log("Server started on port 7890");
});
