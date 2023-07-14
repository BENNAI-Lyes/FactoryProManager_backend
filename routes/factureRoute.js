import express from "express";
const router = express.Router();
import { newFacture } from "../validators/factureValidator.js";
import { runValidation } from "../validators/index.js";
import { verifyAdmin } from "../helpers/verifyToken.js";
import {
  createFacture,
  deleteFacture,
  getAllFacture,
  getFacture,
  updateFacture,
} from "../controllers/factureController.js";

//create
router.post("/", verifyAdmin, newFacture, runValidation, createFacture);

//update
router.put("/:id", verifyAdmin, newFacture, runValidation, updateFacture);

//delete
router.delete("/:id", verifyAdmin, deleteFacture);

//get one
router.get("/find/:id", verifyAdmin, getFacture);

//getAll
router.get("/", verifyAdmin, getAllFacture);

//xxxxxxxx

export default router;
