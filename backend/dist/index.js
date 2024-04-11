import express from "express";
const app = express();
//GET
//PUT
//POST
//DELETE
app.use(express.json());
app.post("/", (req, res, next) => {
    const name = req.body.name;
    console.log(req.body.name);
    return res.send(`${name} Back End server Welcome you`);
});
app.listen(3434, () => console.log("server starts operating"));
//# sourceMappingURL=index.js.map