import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "un_secretor_dev";

export function authToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  if (!authHeader) return res.status(401).json({ message: "Token required" });

  const token = authHeader.split(" ")[1]; // ayuda

  try {
    const verifyToken = jwt.verify(token, JWT_SECRET);

    req["user"] = verifyToken;

    next();
  } catch (error) {
    return res.status(403).json({ message: "Invalid or expired token" });
  }
}
