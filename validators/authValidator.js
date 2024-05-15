import { check, body } from 'express-validator';
import User from '../models/userModel.js';

export const userRegisterValidator = [
	check('name')
		.not()
		.isEmpty()
		.withMessage('Name is required.')
		.isLength({ min: 3 })
		.withMessage('Name must be at least 3 characters long.')
		.isLength({ max: 20 })
		.withMessage('Name must have 20 charaters max.'),

	check('email')
		.not()
		.isEmpty()
		.withMessage('Email is required.')
		.isEmail()
		.withMessage('Email must be valid.')
		.custom(async (email) => {
			const existingUser = await User.findOne({ email });
			if (existingUser) {
				throw new Error('Email already exist.');
			}
		}),
	check('password')
		.not()
		.isEmpty()
		.withMessage('Password is required')
		.isLength({ min: 6 })
		.withMessage('Password must be at least 6 characters long.'),
];

export const userLoginValidator = [
	check('email')
		.not()
		.isEmpty()
		.withMessage('Email is required.')
		.isEmail()
		.withMessage('Email must be valid.'),
	check('password').not().isEmpty().withMessage('Password is required.'),
];

export const updateUserValidator = [
	body('name')
		// // if the new password is provided...
		// .if((value, { req }) => req.body.newPassword)
		// // OR
		.if(body('name').exists())
		// ...then the old password must be too...
		.notEmpty()
		.withMessage('Name is required.')
		// ...and they must not be equal.
		.custom((value, { req }) => value !== req.body.newPassword),

	check('email')
		.not()
		.isEmpty()
		.withMessage('Email is required.')
		.isEmail()
		.withMessage('Email must be valid.'),

	check('password')
		.not()
		.isEmpty()
		.withMessage('Password is required')
		.isLength({ min: 6 })
		.withMessage('Password must be at least 6 characters long.'),
	check('location')
		.isLength({ max: 20 })
		.withMessage('Location must be at most 20 characters long'),
	check('lastName')
		.isLength({ max: 20 })
		.withMessage('LastName must be at most 20 characters long'),
];

export const clientRegisterValidator = [
	check('name')
		.not()
		.isEmpty()
		.withMessage('Name is required.')
		.isLength({ min: 3 })
		.withMessage('Name must be at least 3 characters long.'),
	check('address').not().isEmpty().withMessage('Address is required.'),
	check('phone').not().isEmpty().withMessage('Phone number is required.'),
	check('driver').not().isEmpty().withMessage('Driver is required.'),
	check('nif').not().isEmpty().withMessage('NIF is required.'),
	check('rc').not().isEmpty().withMessage('RC is required'),
];

export const workerRegisterValidator = [
	check('name')
		.not()
		.isEmpty()
		.withMessage('Name is required.')
		.isLength({ min: 3 })
		.withMessage('Name must be at least 3 characters long.')
		.isLength({ max: 20 })
		.withMessage('Name must have 20 charaters max.'),
];
