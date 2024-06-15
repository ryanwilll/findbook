import { NextFunction, Request, Response } from "express";
import { HttpException } from "../../types/HttpException";

export function errorMiddleware(err: HttpException, req: Request, res: Response, next: NextFunction) {
  return res.status(500).json({
    statusCode: 500,
    message: err.message || "Internal Server Error",
  });
}
