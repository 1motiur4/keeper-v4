import express from "express";
const router = express.Router();

import { createNote, getNotes } from "../controllers/notesController.js";

router.route("/").get(getNotes);
router.route("/createNote").post(createNote);

export default router;
