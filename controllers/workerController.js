import Worker from "../models/workerModel.js";
import { hashPassword } from "../helpers/auth.js";

//create
export const createWorker = async (req, res, next) => {
  try {
    const newWorker = new Worker({
      ...req.body,
    });
    const savedWorker = await newWorker.save();

    return res.status(201).json(savedWorker);
  } catch (error) {
    next(error);
  }
};

//update
export const updateWorker = async (req, res, next) => {
  //update password
  if (req.body.password) {
    req.body.password = await hashPassword(req.body.password);
  }

  try {
    const updatedWorker = await Worker.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedWorker);
  } catch (error) {
    next(error);
  }
};

//delete
export const deleteWorker = async (req, res, next) => {
  try {
    await Worker.findByIdAndDelete(req.params.id);
    return res.status(200).json("worker has been deleted");
  } catch (error) {
    next(error);
  }
};

//get one
export const getWorker = async (req, res, next) => {
  try {
    const worker = await Worker.findById(req.params.id);
    res.status(200).json(worker);
  } catch (error) {
    next(error);
  }
};

//get all
export const getAllWorker = async (req, res, next) => {
  try {
    const workers = await Worker.find();
    res.status(200).json(workers);
  } catch (error) {
    next(error);
  }
};
