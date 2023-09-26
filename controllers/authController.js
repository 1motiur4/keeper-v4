import User from "../models/User.js";

export const register = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  if (!firstName || !lastName || !email || !password) {
    res.status(400).json({ msg: "Please provide all values!" });
  }

  const userAlreadyExists = await User.findOne({ email });
  if (userAlreadyExists) {
    res.status(400).json({ msg: "Email already in use!" });
  }

  const user = await User.create(req.body);
  res.status(200).json({ user });
};

export const login = async (req, res) => {
  res.send("login");
};
