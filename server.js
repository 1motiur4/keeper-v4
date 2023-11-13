import express from "express";
const app = express();
import dotenv from "dotenv";
import "express-async-errors";
dotenv.config();
import cookieParser from "cookie-parser";

//db and authenticate user
import connectDB from "./db/connect.js";

//routers
import authRouter from "./routes/authRouter.js";
import notesRouter from "./routes/notesRouter.js";
import userRouter from "./routes/userRouter.js";

//middleware
import { authenticateUser } from "./middleware/authMiddleware.js";
import bearerMiddleware from "./middleware/bearerMiddlewear.js";

app.use(cookieParser());
app.use(express.json());

app.get("/", (req, res) => {
  res.send({ msg: "Welcome!" });
});
app.get("/api/v1/test", (req, res) => {
  res.json({ msg: "test route API" });
});

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/notes", bearerMiddleware, notesRouter);
app.use("/api/v1/user", bearerMiddleware, userRouter);

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
