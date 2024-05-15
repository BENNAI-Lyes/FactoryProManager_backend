import { check } from 'express-validator';

export const newExpense = [
	check('name').not().isEmpty().withMessage('Name is required.'),

	check('price')
		.not()
		.isEmpty()
		.withMessage('Price is required.')
		.isNumeric()
		.withMessage('Price must be number.')
		.isInt({ min: 0 })
		.withMessage('Price must be grater than 0.'),
];
