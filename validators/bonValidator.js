import { check } from 'express-validator';

export const newBon = [
  check('transport')
    .isInt({ min: 1 })

    .withMessage('Transport est est obligatoire'),
  check('clientName').not().isEmpty().withMessage('Nom du client est requis'),
  check('address').not().isEmpty().withMessage('Adresse est obligatoire'),
  check('phone')
    .not()
    .isEmpty()
    .withMessage('le numéro de téléphone est requis'),

  check('remise')
    .isNumeric()
    .withMessage('remise should be a number')
    .isInt({ min: 0 })
    .withMessage('remise doit être supérieure à 0'),

  check('products')
    .not()
    .isEmpty()
    .withMessage('les produits sont nécessaires'),
  check('products.*.name')
    .not()
    .isEmpty()
    .withMessage('le nom du produit est requis'),
  check('products.*.quantity')
    .not()
    .isEmpty()
    .withMessage('la quantité de produits est requise')
    .isNumeric()
    .withMessage('la quantité de produits doit être un nombre')
    .isInt({ min: 0 })
    .withMessage('la quantité de produits doit être supérieur à 0'),
  check('products.*.price')
    .not()
    .isEmpty()
    .withMessage('le prix des produits est requis')
    .isNumeric()
    .withMessage('le prix des produits doit être un nombre')
    .isInt({ min: 0 })
    .withMessage('le prix des produits doit être supérieur à 0'),
  check('products.*.total')
    .not()
    .isEmpty()
    .withMessage('le total des produits est requis')
    .isNumeric()
    .withMessage('le total des produits doit être un nombre')
    .withMessage('le total des produits doit être supérieur à 0'),

  check('total')
    .not()
    .isEmpty()
    .withMessage('total is required')
    .isNumeric()
    .withMessage('total should be a number')
    .isInt({ min: 0 })
    .withMessage('le total doit être supérieur à 0'),

  check('totalRemise')
    .isNumeric()
    .withMessage('total Remise Remisé doit être un nombre')
    .isInt({ min: 0 })
    .withMessage('remise totale doit être supérieur à 0'),
];
