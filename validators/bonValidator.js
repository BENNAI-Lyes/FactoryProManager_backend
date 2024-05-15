import { check } from 'express-validator';

export const newBon = [
	check('transport')
		.isInt({ min: 1 })
		.withMessage('Transport price is required.'),
	check('remise')
		.isNumeric()
		.withMessage('Discount should be a number')
		.isInt({ min: 0 })
		.withMessage('Discount must be grater than 0.'),

	check('products').not().isEmpty().withMessage('Products are required.'),
	check('products.*.name')
		.not()
		.isEmpty()
		.withMessage('Product name is required.'),
	check('products.*.quantity')
		.not()
		.isEmpty()
		.withMessage('Product quantity is required.')
		.isNumeric()
		.withMessage('Product quantity must be number.')
		.isInt({ min: 0 })
		.withMessage('Product quantity must be grater than 0.'),
	check('products.*.price')
		.not()
		.isEmpty()
		.withMessage('Product price is required.')
		.isNumeric()
		.withMessage('Product price must be a number')
		.isInt({ min: 0 })
		.withMessage('Product price must be grater than 0.'),
	check('products.*.total')
		.not()
		.isEmpty()
		.withMessage('product total price is required.')
		.isNumeric()
		.withMessage('product total price must be a number.')
		.withMessage('product total price must be grater than 0.'),

	check('total')
		.not()
		.isEmpty()
		.withMessage('Total price is required.')
		.isNumeric()
		.withMessage('Total price must be a number.')
		.isInt({ min: 0 })
		.withMessage('total price must be grater than 0. '),

	check('totalRemise')
		.isNumeric()
		.withMessage('Total Price Discounted must be a number. ')
		.isInt({ min: 0 })
		.withMessage('Total Price Discounted must be grater than 0.'),
];
