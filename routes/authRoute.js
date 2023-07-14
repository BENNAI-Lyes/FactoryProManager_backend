import express from 'express';
const router = express.Router();
import {
  userLoginValidator,
  userRegisterValidator,
} from '../validators/authValidator.js';
import { runValidation } from '../validators/index.js';
import { login, register } from '../controllers/authController.js';

//register
router.post('/register', userRegisterValidator, runValidation, register);

//login
router.post('/login', userLoginValidator, runValidation, login);

export default router;
