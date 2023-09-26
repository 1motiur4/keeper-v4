import User from "../models/User.js";

export const register = async (req, res) => {
  const user = await User.create(req.body);
  res.status(200).json({ user });
};
export const login = async (req, res) => {
  res.send("login");
};
