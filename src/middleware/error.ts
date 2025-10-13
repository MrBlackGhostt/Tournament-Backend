import { type ErrorRequestHandler } from "express";

export const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  console.error("ERROR", err.message);
  res.status(err.status || 500).json({
    status: "error",
    message: err.message,
  });
};
