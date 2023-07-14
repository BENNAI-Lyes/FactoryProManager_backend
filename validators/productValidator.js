import { check } from "express-validator";
import ProductModel from "../models/productModel.js";

export const newProduct = [
  check("name")
    .not()
    .isEmpty()
    .withMessage("Le nom est requis")
    .custom(async (name) => {
      const existingProduct = await ProductModel.findOne({ name });
      if (existingProduct) {
        throw new Error("Le produit existe déjà.");
      }
    }),

  check("price")
    .not()
    .isEmpty()
    .withMessage("Le prix est requis")
    .isNumeric()
    .withMessage("le prix doit être un nombre")
    .isInt({ min: 0 })
    .withMessage("le prix doit être supérieur à 0"),

  check("quantity")
    .not()
    .isEmpty()
    .withMessage("quantity is required")
    .isNumeric()
    .withMessage("la quantité doit être un nombre")
    .isInt({ min: 0 })
    .withMessage("la quantité doit être supérieure à 0"),
];

export const updateProductV = [
  check("name").not().isEmpty().withMessage("Name is required"),

  check("price")
    .not()
    .isEmpty()
    .withMessage("Le prix est requis")
    .isNumeric()
    .withMessage("le prix doit être un nombre")
    .isInt({ min: 0 })
    .withMessage("le prix doit être supérieur à 0"),

  check("quantity")
    .not()
    .isEmpty()
    .withMessage("la quantité est requise")
    .isNumeric()
    .withMessage("la quantité doit être un nombre")
    .isInt({ min: 0 })
    .withMessage("la quantité doit être supérieure à 0"),
];
