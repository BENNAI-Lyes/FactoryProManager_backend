import Expense from "../models/expenseModel.js";

//create new bon
export const createExpense = async (req, res, next) => {
  try {
    const newExpense = new Expense({
      ...req.body,
    });
    const savedExpense = await newExpense.save();

    return res.status(201).json(savedExpense);
  } catch (error) {
    next(error);
  }
};

//update new bon
// export const updateBon = async (req, res, next) => {
//   try {
//     const updatedBon = await Expense.findByIdAndUpdate(
//       req.params.id,
//       {
//         $set: req.body,
//       },
//       { new: true }
//     );
//     return res.status(200).json(updatedBon);
//   } catch (error) {
//     next(error);
//   }
// };

// delete bon
export const deleteExpense = async (req, res, next) => {
  try {
    await Expense.findByIdAndDelete(req.params.id);
    return res.status(200).json("Expense has been deleted");
  } catch (error) {
    next(error);
  }
};

//get one
// export const getBon = async (req, res, next) => {
//   try {
//     const bon = await Expense.findById(req.params.id);
//     res.status(200).json(bon);
//   } catch (error) {
//     next(error);
//   }
// };

//get all
export const getAll = async (req, res, next) => {
  try {
    const expenses = await Expense.find();
    res.status(200).json(expenses);
  } catch (error) {
    next(error);
  }
};

//get  stats
export const getStats = async (req, res, next) => {
  try {
    const bons = await Expense.aggregate([
      {
        $group: {
          _id: { $substr: ["$createdAt", 0, 7] },
          total: { $sum: "$price" },
        },
      },
    ]);
    res.status(200).json(bons);
  } catch (error) {
    next(error);
  }
};
