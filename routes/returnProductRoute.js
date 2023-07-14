import express from "express";
const router = express.Router();
import {
  createReturnProduct,
  deleteReturnProduct,
  getAll,
  getStats,
  updateReturnProduct,
} from "../controllers/returnProductController.js";
// import { newBon } from "../validators/bonValidator.js";
// import { runValidation } from "../validators/index.js";
import { verifyAdmin } from "../helpers/verifyToken.js";

//create
router.post("/", verifyAdmin, createReturnProduct);

//update
router.put("/:id", verifyAdmin, updateReturnProduct);

// //delete
router.delete("/:id", verifyAdmin, deleteReturnProduct);

// //get one
// router.get("/find/:id", verifyAdmin, getBon);

//getAll
router.get("/", verifyAdmin, getAll);

//get stats
router.get("/stats", verifyAdmin, getStats);
//xxxxxxxx

export default router;
