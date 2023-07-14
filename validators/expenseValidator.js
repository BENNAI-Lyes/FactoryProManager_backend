import { check } from "express-validator";

export const newExpense = [
  check("name").not().isEmpty().withMessage("Name is required"),

  check("price")
    .not()
    .isEmpty()
    .withMessage("le prix est requis")
    .isNumeric()
    .withMessage("le prix doit être un nombre")
    .isInt({ min: 0 })
    .withMessage("le prix doit être supérieur à 0"),
];
