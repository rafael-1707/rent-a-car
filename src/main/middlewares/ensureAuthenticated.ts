import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
dotenv.config();

export const ensureAuthenticated = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const authToken = request.headers.authorization;

  if (!authToken) {
    return response.status(401).json("Token is missing");
  }

  const [, token] = authToken.split(" ");

  try {
    jwt.verify(token, process.env.JWT_SECRET as string);

    return next();
  } catch (err) {
    return response.status(401).json("Invalid token");
  }
};
