import { check } from 'express-validator';

export const newFacture = [
	check('clientId').not().isEmpty().withMessage('Client ID est required.'),
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
		.isInt({ min: 0 })
		.withMessage('le total des produits doit être supérieur à 0'),
];
