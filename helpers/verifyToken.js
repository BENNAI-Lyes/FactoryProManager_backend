import jwt from "jsonwebtoken";
import { createError } from "./error.js";

export const verifyToken = (req, res, next) => {
  const accessToken = req.headers.token;
  if (!accessToken) {
    return next(createError(401, "You are not authenticated"));
  }
  const token = accessToken.split(" ")[1];
  jwt.verify(token, process.env.ACCESS_TOKEN_KEY, (error, user) => {
    if (error) return next(createError(403, "Token is not valid!"));
    req.user = user;
    return next();
  });
};

export const verifyUser = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      return next();
    } else {
      return next(createError(403, "You are not authorized"));
    }
  });
};

export const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.isAdmin) {
      return next();
    } else {
      return next(createError(403, "You are not authorized"));
    }
  });
};
