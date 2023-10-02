import express from "express";
const app = express();
import dotenv from "dotenv";
import "express-async-errors"
dotenv.config();

//db and authenticate user
import connectDB from "./db/connect.js";

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

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    app.listen(5000, () => {
      console.log(`Server is listening on port ${5000}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
