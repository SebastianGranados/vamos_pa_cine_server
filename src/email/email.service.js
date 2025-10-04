import nodemailer from "nodemailer";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";

dotenv.config();

export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.CINEMA_EMAIL_USER,
    pass: process.env.CINEMA_EMAIL_PASS,
  },
});

transporter
  .verify()
  .then(() =>
    console.log("Successfully connected to Gmail. Ready to send emails.")
  )
  .catch((err) => console.log(err));

export const sendVerificationEmail = async (userEmail, token) => {
  try {
    const verificationLink = `http://localhost:3000/auth/verify-email?token=${token}`;

    const templatePath = path.resolve(
      "src/email/templates",
      "verifyAccount.html"
    );
    let htmlTemplate = fs.readFileSync(templatePath, "utf8");

    htmlTemplate = htmlTemplate.replaceAll(
      "{{verificationLink}}",
      verificationLink
    );

    await transporter.sendMail({
      from: `"Vamos pa' Cine" <${process.env.CINEMA_EMAIL_USER}>`,
      to: userEmail,
      subject: "Verify your account to activate your profile",
      html: htmlTemplate,
    });

    console.log(`Verification email successfully sent to: ${userEmail}`);
  } catch (error) {
    console.error(`Error sending verification email to ${userEmail}:`, error);
  }
};
