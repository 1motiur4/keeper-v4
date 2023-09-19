import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();

app.get("/", (req, res) => {
  res.send({ msg: "Welcome!" });
});
app.get("/api/v1", (req, res) => {
  res.json({ msg: "API" });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});


