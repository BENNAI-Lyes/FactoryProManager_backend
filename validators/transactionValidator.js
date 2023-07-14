import { check } from "express-validator";

export const newTransactionValidation = [
  check("billNumber")
    .not()
    .isEmpty()
    .withMessage("Le numéro de billet est requis")
    .isNumeric()
    .withMessage("Le numéro de billet devrait être un nombre"),

  check("billAmount")
    .not()
    .isEmpty()
    .withMessage("Le montant est requis")
    .isNumeric()
    .withMessage("Le montant devrait être un nombre"),

  check("vers")
    .not()
    .isEmpty()
    .withMessage("Paiement est requis")
    .isNumeric()
    .withMessage("Paiement doit être un nombre"),
];
