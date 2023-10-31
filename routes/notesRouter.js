import express from "express";
const router = express.Router();

import { createNote, getNotes, deleteNote } from "../controllers/notesController.js";

router.route("/").get(getNotes);
router.route("/createNote").post(createNote);
router.route("/:noteId").delete(deleteNote);

export default router;
