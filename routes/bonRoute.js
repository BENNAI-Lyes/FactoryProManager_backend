import express from 'express';
import {
	createBon,
	deleteBon,
	getAll,
	getBon,
	updateBon,
	getSellsStats,
	getProductsCreatedThisMonth,
} from '../controllers/bonController.js';
const router = express.Router();
import { newBon } from '../validators/bonValidator.js';
import { runValidation } from '../validators/index.js';
import { verifyAdmin } from '../helpers/verifyToken.js';

//create
router.post('/', newBon, runValidation, verifyAdmin, createBon);

//update
router.put('/:id', verifyAdmin, updateBon);

//delete
router.delete('/:id', verifyAdmin, deleteBon);

//get one
router.get('/find/:id', verifyAdmin, getBon);

//getAll
router.get('/', verifyAdmin, getAll);

// //Sells Stats
router.get('/sells-stats', verifyAdmin, getSellsStats);

//sells stats with month as id
router.get('/created-this-month', verifyAdmin, getProductsCreatedThisMonth);

export default router;
