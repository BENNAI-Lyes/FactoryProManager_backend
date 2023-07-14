import express from "express";
import {
  createExpense,
  deleteExpense,
  getAll,
  getStats,
} from "../controllers/expenseController.js";
const router = express.Router();
import { newExpense } from "../validators/expenseValidator.js";
import { runValidation } from "../validators/index.js";
import { verifyAdmin } from "../helpers/verifyToken.js";

//create
router.post("/", verifyAdmin, newExpense, runValidation, createExpense);

//update
// router.put("/:id", verifyAdmin, updateBon);

//delete
router.delete("/:id", verifyAdmin, deleteExpense);

//get one
// router.get("/find/:id", verifyAdmin, getBon);

//getAll
router.get("/", verifyAdmin, getAll);

//stats
router.get("/stats", verifyAdmin, getStats);

//xxxxxxxx

export default router;
