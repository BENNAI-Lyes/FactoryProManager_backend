import express from "express";
const router = express.Router();
import { newTransactionValidation } from "../validators/transactionValidator.js";
import { runValidation } from "../validators/index.js";
import { verifyAdmin } from "../helpers/verifyToken.js";
import {
  createTransaction,
  deleteTransaction,
  getAllTransactions,
  getTran,
  getTransaction,
  updateTransaction,
} from "../controllers/transactionController.js";

//create
router.post(
  "/",
  verifyAdmin,
  newTransactionValidation,
  runValidation,
  createTransaction
);

//update
router.put(
  "/:id",
  verifyAdmin,
  newTransactionValidation,
  runValidation,
  updateTransaction
);

//delete
router.delete("/:id", verifyAdmin, deleteTransaction);

//get one user
router.get("/find/:id", verifyAdmin, getTransaction);

//getAll
router.get("/:id", verifyAdmin, getAllTransactions);

//get the first tran
router.get("/tran/:clientName/:billNumber", verifyAdmin, getTran);

//xxxxxxxx

export default router;
