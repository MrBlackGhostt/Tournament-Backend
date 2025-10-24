import jwt from "jsonwebtoken";
import { type generateTokenType } from "./type.js";

export const generateToken = ({ data, secret, time }: generateTokenType) => {
  console.log("Generate token");
  return jwt.sign(data, secret, { expiresIn: time });
};
