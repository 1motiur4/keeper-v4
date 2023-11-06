import { Router } from "express";
import {
  getCurrentUser,
  updateUser,
  changePassword,
} from "../controllers/userControllers.js";
const router = Router();

router.get("/current-user", getCurrentUser);
router.patch("/update-user", updateUser);
router.put("/change-password", changePassword);

export default router;
