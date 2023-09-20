import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();

//routers
import authRouter from "./routers/authRouter.js";

app.use(express.json());

app.get("/", (req, res) => {
  res.send({ msg: "Welcome!" });
});
app.get("/api/v1", (req, res) => {
  res.json({ msg: "API" });
});

app.use("/api/v1/auth", authRouter);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
