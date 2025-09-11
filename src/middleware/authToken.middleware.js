import { verifyToken } from "../util/jwt.util.js";

export function authToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  if (!authHeader) return res.status(401).json({ message: "Token required" });

  const token = authHeader.split(" ")[1];

  try {
    const decoded = verifyToken(token);

    if (!decoded) {
      return res.status(403).json({ message: "Invalid or expired token" });
    }

    req.user = decoded;
    next();
  } catch (error) {
    return res.status(403).json({ message: "Invalid or expired token" });
  }
}
