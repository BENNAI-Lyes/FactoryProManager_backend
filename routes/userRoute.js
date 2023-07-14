import express from "express";
const router = express.Router();
import { verifyAdmin } from "../helpers/verifyToken.js";
import {
  deleteUser,
  getAllUser,
  getUser,
  updateUser,
} from "../controllers/userController.js";
import { updateUserValidator } from "../validators/authValidator.js";
import { runValidation } from "../validators/index.js";

//update
router.put("/:id", updateUserValidator, runValidation, verifyAdmin, updateUser);

//delete
router.delete("/:id", verifyAdmin, deleteUser);

//get one user
router.get("/find/:id", verifyAdmin, getUser);

//get all
router.get("/", verifyAdmin, getAllUser);

//xxxxxxxx

export default router;
