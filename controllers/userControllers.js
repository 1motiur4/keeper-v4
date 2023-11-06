import User from "../models/User.js";
import { hashPassword } from "../utils/passwordUtils.js";

export const getCurrentUser = async (req, res) => {
  const user = await User.findOne({ _id: req.user.userId });
  res.status(200).json({ user });
};

export const getApplicationStats = async (req, res) => {
  res.status(200).json({ msg: "application stats" });
};

export const updateUser = async (req, res) => {
  const updatedUser = await User.findByIdAndUpdate(req.user.userId, req.body);
  res.status(200).json({ msg: "updated user" });
};

export const changePassword = async (req, res) => {
  const { currentPW, newPW, confirmNewPW } = req.body;

  const user = await User.findOne({ _id: req.user.userId }).select("+password");

  const isPasswordCorrect = await user.comparePassword(currentPW);

  if (!isPasswordCorrect) {
    return res.status(401).json({ msg: "Current password wrong!" });
  }

  if (newPW !== confirmNewPW) {
    return res.status(401).json({ msg: "Password mismatch" });
  }

  await User.findByIdAndUpdate(req.user.userId, {
    password: await hashPassword(newPW),
  }).select("+password");

  return res.status(200).json({ msg: "updated pw" });
};
