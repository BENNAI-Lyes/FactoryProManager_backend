import express from 'express';
const router = express.Router();
import { clientRegisterValidator } from '../validators/authValidator.js';
import { runValidation } from '../validators/index.js';
import { verifyAdmin } from '../helpers/verifyToken.js';
import {
	createClient,
	deleteClient,
	getAllClient,
	getClient,
	updateClient,
	getTotalClientsByMonth,
} from '../controllers/clientController.js';

//create
router.post(
	'/',
	verifyAdmin,
	clientRegisterValidator,
	runValidation,
	createClient
);

//update
router.put(
	'/:id',
	clientRegisterValidator,
	runValidation,
	verifyAdmin,
	updateClient
);

//delete
router.delete('/:id', verifyAdmin, deleteClient);

//get one
router.get('/find/:id', verifyAdmin, getClient);

//getAll
router.get('/', verifyAdmin, getAllClient);

//
router.get('/total-by-month', verifyAdmin, getTotalClientsByMonth);

//xxxxxxxx

export default router;
