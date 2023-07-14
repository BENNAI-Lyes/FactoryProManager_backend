import express from "express";
const router = express.Router();
import { workerRegisterValidator } from "../validators/authValidator.js";
import { runValidation } from "../validators/index.js";
import { verifyAdmin } from "../helpers/verifyToken.js";
import {
  createWorker,
  deleteWorker,
  getAllWorker,
  getWorker,
  updateWorker,
} from "../controllers/workerController.js";

//create
router.post(
  "/",
  verifyAdmin,
  workerRegisterValidator,
  runValidation,
  createWorker
);

//update
router.put(
  "/:id",
  verifyAdmin,
  workerRegisterValidator,
  runValidation,
  updateWorker
);

//delete
router.delete("/:id", verifyAdmin, deleteWorker);

//get one user
router.get("/find/:id", verifyAdmin, getWorker);

//getAll
router.get("/", verifyAdmin, getAllWorker);

//xxxxxxxx

export default router;
