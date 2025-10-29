import { type ErrorRequestHandler } from "express";

export const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  console.error("INDISTE THE ERROR MIDDLEWARE  ERROR", err.message);
  res.status(err.status || 500).json({
    status: "failed",
    message: err.message,
  });
};
