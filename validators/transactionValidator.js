import { check } from 'express-validator';

export const newTransactionValidation = [
	check('billNumber')
		.not()
		.isEmpty()
		.withMessage('Bill number is required')
		.isNumeric()
		.withMessage('Bill number must be a number'),

	check('billAmount')
		.not()
		.isEmpty()
		.withMessage('Amount is required')
		.isNumeric()
		.withMessage('Amount must be a number'),

	check('vers')
		.not()
		.isEmpty()
		.withMessage('Payment is required')
		.isNumeric()
		.withMessage('Payment must be number'),
];
