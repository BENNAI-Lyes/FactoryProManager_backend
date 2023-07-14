import express from "express";
const router = express.Router();
import { newProduct, updateProductV } from "../validators/productValidator.js";
import { runValidation } from "../validators/index.js";
import { verifyAdmin } from "../helpers/verifyToken.js";
import {
  createProduct,
  deleteProduct,
  getAllProduct,
  getProduct,
  updateProduct,
} from "../controllers/productController.js";

//create
router.post("/", verifyAdmin, newProduct, runValidation, createProduct);

//update
router.put("/:id", verifyAdmin, updateProductV, runValidation, updateProduct);

//delete
router.delete("/:id", verifyAdmin, deleteProduct);

//get one user
router.get("/find/:id", verifyAdmin, getProduct);

//getAll
router.get("/", verifyAdmin, getAllProduct);

//xxxxxxxx

export default router;
