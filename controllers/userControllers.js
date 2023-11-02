import User from "../models/User.js";
import Note from "../models/Note.js";

export const getCurrentUser = async (req, res) => {
  const user = await User.findOne({ _id: req.user.userId });
  res.status(200).json({ user });
};

export const getApplicationStats = async (req, res) => {
  res.status(200).json({ msg: "application stats" });
};

export const updateUser = async (req, res) => {
  res.status(200).json({ msg: "update user" });
};
