import Payroll from '../models/payrollModel.js';

//create new payroll
export const createPayroll = async (req, res, next) => {
  try {
    const newPayroll = new Payroll({
      ...req.body,
    });
    const savedPayroll = await newPayroll.save();

    return res.status(201).json(savedPayroll);
  } catch (error) {
    next(error);
  }
};

//update new payroll
export const updatePayroll = async (req, res, next) => {
  try {
    const updatedPayroll = await Payroll.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    return res.status(200).json(updatedPayroll);
  } catch (error) {
    next(error);
  }
};

// delete payroll
export const deletePayroll = async (req, res, next) => {
  try {
    await Payroll.findByIdAndDelete(req.params.id);
    return res.status(200).json('Payroll has been deleted');
  } catch (error) {
    next(error);
  }
};

// delete payroll
export const deleteAllPayroll = async (req, res, next) => {
  try {
    const result = await Payroll.deleteMany({ workerId: req.params.id });
    console.log(req.body.id);
    console.log(result);
    return res.status(200).json('all payrolls has been deleted');
  } catch (error) {
    next(error);
  }
};

//get one
export const getPayroll = async (req, res, next) => {
  try {
    const payroll = await Payroll.findById(req.params.id);
    res.status(200).json(payroll);
  } catch (error) {
    next(error);
  }
};

//get all
export const getAll = async (req, res, next) => {
  try {
    const payrolls = await Payroll.find({ workerId: req.params.workerId });
    res.status(200).json(payrolls);
  } catch (error) {
    next(error);
  }
};

// //get stats
// export const getStats = async (req, res, next) => {
//   try {
//     const payrolls = await Payroll.aggregate([
//       { $unwind: "$products" },
//       {
//         // $group: {
//         //   _id: { $substr: ["$createdAt", 0, 7] },
//         //   data: {
//         //     $push: { name: "$products.name", quantity: "$products.quantity" },
//         //   },
//         // },
//         $group: {
//           _id: "$products.name",
//           data: {
//             $push: {
//               name: { $substr: ["$createdAt", 0, 7] },
//               quantity: "$products.quantity",
//             },
//           },
//         },
//       },
//     ]);
//     res.status(200).json(payrolls);
//   } catch (error) {
//     next(error);
//   }
// };
