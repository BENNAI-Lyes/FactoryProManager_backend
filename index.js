import express from 'express';
import mongoose from 'mongoose';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();

import authRoutes from './routes/authRoute.js';
import userRoutes from './routes/userRoute.js';
import clientRoutes from './routes/clientRoute.js';
import workerRoutes from './routes/workerRoute.js';
import productRoutes from './routes/productRoute.js';
import bonRoutes from './routes/bonRoute.js';
import factureRoutes from './routes/factureRoute.js';
import transactionRoutes from './routes/transactionRoute.js';
import expenseRoutes from './routes/expenseRoute.js';
import payrollRoutes from './routes/payrollRoute.js';

const connect = async () => {
	try {
		await mongoose.connect(process.env.MONGO_URL);
		console.log('Connected to mongoDB.');
	} catch (error) {
		throw error;
	}
};

mongoose.connection.on('disconnected', () => {
	console.log('mongoDB disconnected!');
});

// general med
app.use(express.json());
app.use(morgan('dev'));
app.use(helmet());
app.use(cors());

// app mid
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/user', userRoutes);
app.use('/api/v1/client', clientRoutes);
app.use('/api/v1/worker', workerRoutes);
app.use('/api/v1/product', productRoutes);
app.use('/api/v1/bon', bonRoutes);
app.use('/api/v1/facture', factureRoutes);
app.use('/api/v1/transaction', transactionRoutes);
app.use('/api/v1/expense', expenseRoutes);
app.use('/api/v1/payroll', payrollRoutes);

app.use((err, req, res, next) => {
	const errorStatus = err.status || 500;
	const errorMessage = err.message || 'Something went wrong!';
	return res.status(errorStatus).json({
		success: false,
		status: errorStatus,
		message: errorMessage,
		stack: err.stack,
	});
});

const port = process.env.PORT || 8000;
app.listen(port, () => {
	connect();
	console.log(`server listing on port: ${port} `);
});
