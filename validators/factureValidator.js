import { check } from 'express-validator';

export const newFacture = [
	check('clientId').not().isEmpty().withMessage('Client ID est required.'),
	check('products').not().isEmpty().withMessage('Products are required'),
	check('products.*.name')
		.not()
		.isEmpty()
		.withMessage('Product name is required'),
	check('products.*.quantity')
		.not()
		.isEmpty()
		.withMessage('Product quantity is required')
		.isNumeric()
		.withMessage('Product quantity must be a number')
		.isInt({ min: 0 })
		.withMessage('Product quantity must be grater than 0.'),
	check('products.*.price')
		.not()
		.isEmpty()
		.withMessage('Product price is required.')
		.isNumeric()
		.withMessage('Product price must be number.')
		.isInt({ min: 0 })
		.withMessage('Product price must be grater than 0.'),
	check('products.*.total')
		.not()
		.isEmpty()
		.withMessage('Product total price is required.')
		.isNumeric()
		.withMessage('Product total price must be number.')
		.isInt({ min: 0 })
		.withMessage('Product total price must be grater than 0.'),
];
