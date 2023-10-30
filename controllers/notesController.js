import Note from "../models/Note.js";
import mongoose from "mongoose";

export const createNote = async (req, res) => {
  const { title, body } = req.body;

  if (!title || !body) {
    return res.status(400).json({ msg: "Please provide all values!" });
  }

  console.log(req.user);

  req.body.createdBy = req.user.userId;
  const note = await Note.create(req.body);
  res.status(201).json({ note });
};

export const getNotes = async (req, res) => {
  console.log(req.user);
  const notes = await Note.find({ createdBy: req.user.userId });
  res.status(200).json({ notes });
};
