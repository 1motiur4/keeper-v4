import User from "../models/User.js";
// import { hashPassword } from "../utils/passwordUtils.js";
import validator from "validator";
import { createJWT } from "../utils/tokenUtils.js";

export const register = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  if (!firstName || !lastName || !email || !password) {
    return res.status(400).json({ msg: "Please provide all values!" });
  }

  // const hashedPassword = await hashPassword(req.body.password);
  // req.body.password = hashedPassword;

  const userAlreadyExists = await User.findOne({ email });
  if (userAlreadyExists) {
    return res.status(400).json({ msg: "Email already in use!" });
  }

  const user = await User.create(req.body);
  return res.status(200).json({ msg: "User created!", user });
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

  const user = await User.findOne({ email: req.body.email }).select(
    "+password"
  );
  if (!user) {
    return res.status(401).json({ msg: "Are you sure you're a user?" });
  }

  const isPasswordCorrect = await user.comparePassword(password);

  if (!isPasswordCorrect) {
    return res.status(401).json({msg: "Damn you forgot your password?" });
  }

  const token = createJWT({ userId: user._id });

  const threeDays = 1000 * 60 * 60 * 24 * 3;

  res.cookie("token", token, {
    httpOnly: true,
    expires: new Date(Date.now() + threeDays),
    secure: process.env.NODE_ENV === "production",
  });
  res.status(200).json({ user, token });
};
