import { verifyUserService } from "../../service/auth/verify.service.js";

export const verifyEmailController = async (req, res) => {
  try {
    const { token } = req.query;

    if (!token) {
      return res.status(400).json({ message: "Verification token is missing" });
    }

    const verification = await verifyUserService(token);

    return res.status(200).json(verification);
  } catch (error) {
    return res.status(400).json({ message: "Error verifying account" });
  }
};
