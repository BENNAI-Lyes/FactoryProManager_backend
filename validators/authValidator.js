import { check, body } from "express-validator";
import User from "../models/userModel.js";

export const userRegisterValidator = [
  check("name")
    .not()
    .isEmpty()
    .withMessage("Le nom est requis")
    .isLength({ min: 3 })
    .withMessage("Le nom doit comporter au moins 3 caractères")
    .isLength({ max: 20 })
    .withMessage("Le nom doit comporter au maximum 20 caractères"),

  check("email")
    .not()
    .isEmpty()
    .withMessage("L'e-mail est requis")
    .isEmail()
    .withMessage("L'e-mail doit être une adresse valide")
    .custom(async (email) => {
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        throw new Error("Email déjà utilisé");
      }
    }),
  check("password")
    .not()
    .isEmpty()
    .withMessage("Mot de passe requis")
    .isLength({ min: 6 })
    .withMessage("Le mot de passe doit contenir au moins 6 caractères"),
];

export const userLoginValidator = [
  check("email")
    .not()
    .isEmpty()
    .withMessage("L'e-mail est requis")
    .isEmail()
    .withMessage("L'e-mail doit être un mot de passe valide"),
  check("password").not().isEmpty().withMessage("Mot de passe est requis"),
];

export const updateUserValidator = [
  body("name")
    // // if the new password is provided...
    // .if((value, { req }) => req.body.newPassword)
    // // OR
    .if(body("name").exists())
    // ...then the old password must be too...
    .notEmpty()
    .withMessage("Le nom est requis")
    // ...and they must not be equal.
    .custom((value, { req }) => value !== req.body.newPassword),

  // check("name")
  //   .not()
  //   .isEmpty()
  //   .withMessage("Name is required")
  //   .isLength({ min: 3 })
  //   .withMessage("Name must be at least 3 characters long")
  //   .isLength({ max: 20 })
  //   .withMessage("Name must be at most 20 characters long"),

  check("email")
    .not()
    .isEmpty()
    .withMessage("L'e-mail est requis")
    .isEmail()
    .withMessage("L'e-mail doit être une adresse valide"),

  check("password")
    .not()
    .isEmpty()
    .withMessage("Mot de passe requis")
    .isLength({ min: 6 })
    .withMessage("Le mot de passe doit contenir au moins 6 caractères"),
  check("location")
    .isLength({ max: 20 })
    .withMessage("Location must be at most 20 characters long"),
  check("lastName")
    .isLength({ max: 20 })
    .withMessage("LastName must be at most 20 characters long"),
];

export const clientRegisterValidator = [
  check("name")
    .not()
    .isEmpty()
    .withMessage("Le nom est requis")
    .isLength({ min: 3 })
    .withMessage("Le nom doit comporter au moins 3 caractères"),
  check("address").not().isEmpty().withMessage("Adresse est requis"),
  check("phone")
    .not()
    .isEmpty()
    .withMessage("Le Numéro de téléphone est requis"),
  check("driver").not().isEmpty().withMessage("Chauffeur est requis"),
  check("nif").not().isEmpty().withMessage("NIF est requis"),
  check("rc").not().isEmpty().withMessage("RC est requis"),
];

export const workerRegisterValidator = [
  check("name")
    .not()
    .isEmpty()
    .withMessage("Le nom est requis")
    .isLength({ min: 3 })
    .withMessage("Le nom doit comporter au moins 3 caractères")
    .isLength({ max: 20 })
    .withMessage("Le nom doit comporter au maximum 20 caractères"),
];
