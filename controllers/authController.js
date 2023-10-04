import User from "../models/User.js";
import { hashPassword } from "../utils/passwordUtils.js";
import validator from "validator";

export const register = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  if (!firstName || !lastName || !email || !password) {
    return res.status(400).json({ msg: "Please provide all values!" });
    // throw new Error("Please provide all values");
  }

  const hashedPassword = await hashPassword(req.body.password);
  req.body.password = hashedPassword;

  const userAlreadyExists = await User.findOne({ email });
  if (userAlreadyExists) {
    return res.status(400).json({ msg: "Email already in use!" });
    // throw new Error("E-mail already in use!")
  }

  const user = await User.create(req.body);
  return res.status(200).json({ msg: "User created!" });
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email) {
    return res
      .status(400)
      .json({ msg: "How are you gonna login without an email address?" });
  }

  if (!password) {
    return res.status(401).json({ msg: "Where is the password?" });
  }

  if (!validator.isEmail(email)) {
    return res.status(400).json({ msg: "You call that an email address?" });
  }

  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return res.status(401).json({ msg: "Are you sure you're a user?" });
  }

  console.log(user);
  const isPasswordCorrect = await user.comparePassword(password);

  if (!isPasswordCorrect) {
    return res.status(401).json({ msg: "Damn you forgot your password?" });
  }

  return res.status(200).json({ msg: "Logged in woohoo" });
};
