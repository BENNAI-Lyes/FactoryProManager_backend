import { check } from 'express-validator';
import ProductModel from '../models/productModel.js';

export const newProduct = [
	check('name')
		.not()
		.isEmpty()
		.withMessage('Name is required.')
		.custom(async (name) => {
			const existingProduct = await ProductModel.findOne({ name });
			if (existingProduct) {
				throw new Error('product already exist.');
			}
		}),

	check('price')
		.not()
		.isEmpty()
		.withMessage('Price is required ')
		.isNumeric()
		.withMessage('Price must be a number.')
		.isInt({ min: 0 })
		.withMessage('Price must be grater than 0.'),

	check('quantity')
		.not()
		.isEmpty()
		.withMessage('Quantity is required.')
		.isNumeric()
		.withMessage('Quantity must be number.')
		.isInt({ min: 0 })
		.withMessage('quantity must be grater than 0.'),
];

export const updateProductV = [
	check('name').not().isEmpty().withMessage('Name is required.'),

	check('price')
		.not()
		.isEmpty()
		.withMessage('Price is required.')
		.isNumeric()
		.withMessage('Price must be a number')
		.isInt({ min: 0 })
		.withMessage('Price must be grater than 0.'),

	check('quantity')
		.not()
		.isEmpty()
		.withMessage('Quantity is required.')
		.isNumeric()
		.withMessage('Quantity must be number.')
		.isInt({ min: 0 })
		.withMessage('Quantity must be grater than 0.'),
];
