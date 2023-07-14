import express from "express";
const router = express.Router();
import { clientRegisterValidator } from "../validators/authValidator.js";
import { runValidation } from "../validators/index.js";
import { verifyAdmin } from "../helpers/verifyToken.js";
import {
  createClient,
  deleteClient,
  getAllClient,
  getClient,
  updateClient,
} from "../controllers/clientController.js";

//create
router.post(
  "/",
  verifyAdmin,
  clientRegisterValidator,
  runValidation,
  createClient
);

//update
router.put("/:id", verifyAdmin, updateClient);

//delete
router.delete("/:id", verifyAdmin, deleteClient);

//get one
router.get("/find/:id", verifyAdmin, getClient);

//getAll
router.get("/", verifyAdmin, getAllClient);

//xxxxxxxx

export default router;
