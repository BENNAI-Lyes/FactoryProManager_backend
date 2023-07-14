import Transaction from '../models/transactionModel.js';

//create
export const createTransaction = async (req, res, next) => {
  try {
    const newTransaction = new Transaction({
      ...req.body,
    });
    const savedTransaction = await newTransaction.save();

    return res.status(201).json(savedTransaction);
  } catch (error) {
    next(error);
  }
};

//update
export const updateTransaction = async (req, res, next) => {
  try {
    const updatedTransaction = await Transaction.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedTransaction);
  } catch (error) {
    next(error);
  }
};

//delete
export const deleteTransaction = async (req, res, next) => {
  try {
    await Transaction.findByIdAndRemove(req.params.id);
    return res.status(200).json('Transaction has been deleted');
  } catch (error) {
    next(error);
  }
};

//get one
export const getTransaction = async (req, res, next) => {
  try {
    const transaction = await Transaction.findById(req.params.id);
    res.status(200).json(transaction);
  } catch (error) {
    next(error);
  }
};

//get all
export const getAllTransactions = async (req, res, next) => {
  try {
    const transactions = await Transaction.find({
      clientId: req.params.id,
    });
    res.status(200).json(transactions);
  } catch (error) {
    next(error);
  }
};

//get tran
export const getTran = async (req, res, next) => {
  try {
    const transactions = await Transaction.find({
      clientName: req.params.clientName,
      billNumber: req.params.billNumber,
    });
    res.status(200).json(transactions);
  } catch (error) {
    next(error);
  }
};
