import Product from "../models/productModel.js";

//creat
export const createProduct = async (req, res, next) => {
  try {
    const newProduct = new Product({
      ...req.body,
    });
    await newProduct.save();

    return res.status(201).json(newProduct);
  } catch (error) {
    next(error);
  }
};

//update
export const updateProduct = async (req, res, next) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedProduct);
  } catch (error) {
    next(error);
  }
};

//delete
export const deleteProduct = async (req, res, next) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    return res.status(200).json("Product has been deleted");
  } catch (error) {
    next(error);
  }
};

//get one
export const getProduct = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (error) {
    next(error);
  }
};

//get all
export const getAllProduct = async (req, res, next) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    next(error);
  }
};
