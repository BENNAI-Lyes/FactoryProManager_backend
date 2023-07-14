import { hashPassword, comparePassword } from '../helpers/auth.js';
import { createError } from '../helpers/error.js';
import User from '../models/userModel.js';
import jwt from 'jsonwebtoken';

export const register = async (req, res, next) => {
  try {
    const hashedPassword = await hashPassword(req.body.password);

    const newUser = new User({
      ...req.body,
      password: hashedPassword,
    });
    await newUser.save();

    return res.status(201).json('user created successfully!');
  } catch (error) {
    return next(error);
  }
};

export const login = async (req, res, next) => {
  //get user from db

  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return next(createError(400, 'Wrong email or password'));

    //check user password
    const validPassword = await comparePassword(
      user.password,
      req.body.password
    );
    if (!validPassword)
      return next(createError(400, 'Wrong email or password'));

    const accessToken = jwt.sign(
      { id: user.id, isAdmin: user.isAdmin },
      process.env.ACCESS_TOKEN_KEY
    );

    const { password, ...info } = user._doc;

    return res.status(200).json({ ...info, accessToken });
  } catch (error) {
    return next(error);
  }
};
