import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "un_secret_dev";

export const generateToken = (payload) => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: "1d" });
};

export const verifyToken = (token) => {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (error) {
    return null;
  }
};
