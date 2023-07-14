import Facture from "../models/factureModel.js";

//creat
export const createFacture = async (req, res, next) => {
  try {
    const newFacture = new Facture({
      ...req.body,
    });
    const savedFacture = await newFacture.save();

    return res.status(201).json(savedFacture);
  } catch (error) {
    next(error);
  }
};

//update
export const updateFacture = async (req, res, next) => {
  try {
    const updatedFacture = await Facture.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedFacture);
  } catch (error) {
    next(error);
  }
};

//delete
export const deleteFacture = async (req, res, next) => {
  try {
    await Facture.findByIdAndDelete(req.params.id);
    return res.status(200).json("Facture has been deleted");
  } catch (error) {
    next(error);
  }
};

//get
export const getFacture = async (req, res, next) => {
  try {
    const facture = await Facture.findById(req.params.id);
    res.status(200).json(facture);
  } catch (error) {
    next(error);
  }
};

export const getAllFacture = async (req, res, next) => {
  try {
    const factures = await Facture.find();
    res.status(200).json(factures);
  } catch (error) {
    next(error);
  }
};

//get all
