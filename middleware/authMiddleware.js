import jwt from "jsonwebtoken";
import { verifyJWT } from "../utils/tokenUtils.js";

export const authenticateUser = async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    throw new Error(401);
  }

  try {
    const { userId } = verifyJWT(token);
    req.user = { userId };
    next();
  } catch (error) {
    console.log(error);
  }
};
