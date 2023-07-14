import ReturnProduct from "../models/returnProductModel.js";

//create new bon
export const createReturnProduct = async (req, res, next) => {
  try {
    const newReturnProduct = new ReturnProduct({
      ...req.body,
    });
    const savedReturnProduct = await newReturnProduct.save();

    return res.status(201).json(savedReturnProduct);
  } catch (error) {
    next(error);
  }
};

//update return products
export const updateReturnProduct = async (req, res, next) => {
  try {
    const updatedBon = await ReturnProduct.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    return res.status(200).json(updatedBon);
  } catch (error) {
    next(error);
  }
};

// delete bon
export const deleteReturnProduct = async (req, res, next) => {
  try {
    await ReturnProduct.findByIdAndDelete(req.params.id);
    return res.status(200).json("Return Product has been deleted");
  } catch (error) {
    next(error);
  }
};

// //get one
// export const getBon = async (req, res, next) => {
//   try {
//     const bon = await Bon.findById(req.params.id);
//     res.status(200).json(bon);
//   } catch (error) {
//     next(error);
//   }
// };

//get all
export const getAll = async (req, res, next) => {
  try {
    const returnProducts = await ReturnProduct.find();
    res.status(200).json(returnProducts);
  } catch (error) {
    next(error);
  }
};

//get stats
export const getStats = async (req, res, next) => {
  try {
    const returnProducts = await ReturnProduct.aggregate([
      { $unwind: "$products" },
      {
        $group: {
          _id: { $substr: ["$createdAt", 0, 7] },
          data: {
            $push: {
              name: "$products.name",
              quantity: "$products.quantity",
            },
          },
        },
      },
    ]);
    res.status(200).json(returnProducts);
  } catch (error) {
    next(error);
  }
};
