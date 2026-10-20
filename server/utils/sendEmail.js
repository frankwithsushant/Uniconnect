const nodemailer = require('nodemailer');

/**
 * Send an email using nodemailer
 * @param {object} options - Email options
 * @param {string} options.to - Recipient email
 * @param {string} options.subject - Email subject
 * @param {string} options.html - Email body HTML
 */
const sendEmail = async ({ to, subject, html }) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"UniConnect" <${process.env.EMAIL_FROM}>`,
      to,
      subject,
      html,
    });

    console.log(`📧 Email sent to ${to}`);
  } catch (error) {
    console.error(`❌ Email send error: ${error.message}`);
    // Don't throw - email failures shouldn't break the app flow
  }
};

/**
 * Generate verification email HTML
 */
const getVerificationEmailHTML = (name, verificationUrl) => {
  return `
    <div style="max-width: 600px; margin: 0 auto; padding: 20px; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
      <div style="text-align: center; padding: 30px 0;">
        <h1 style="color: #5B82F7; margin: 0;">UniConnect</h1>
        <p style="color: #64748B; font-size: 14px;">University Social Network</p>
      </div>
      <div style="background: #ffffff; border-radius: 12px; padding: 40px; box-shadow: 0 2px 10px rgba(0,0,0,0.08);">
        <h2 style="color: #1E293B; margin-top: 0;">Verify Your Email</h2>
        <p style="color: #475569; line-height: 1.6;">Hi ${name},</p>
        <p style="color: #475569; line-height: 1.6;">Welcome to UniConnect! Please verify your email address by clicking the button below:</p>
        <div style="text-align: center; margin: 30px 0;">
          <a href="${verificationUrl}" style="background: #5B82F7; color: #ffffff; padding: 14px 40px; border-radius: 8px; text-decoration: none; font-weight: 600; display: inline-block;">Verify Email</a>
        </div>
        <p style="color: #94A3B8; font-size: 13px;">This link expires in 24 hours. If you didn't create an account, you can safely ignore this email.</p>
      </div>
      <p style="color: #94A3B8; font-size: 12px; text-align: center; margin-top: 20px;">© ${new Date().getFullYear()} UniConnect. All rights reserved.</p>
    </div>
  `;
};

/**
 * Generate password reset email HTML
 */
const getResetPasswordEmailHTML = (name, resetUrl) => {
  return `
    <div style="max-width: 600px; margin: 0 auto; padding: 20px; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
      <div style="text-align: center; padding: 30px 0;">
        <h1 style="color: #5B82F7; margin: 0;">UniConnect</h1>
        <p style="color: #64748B; font-size: 14px;">University Social Network</p>
      </div>
      <div style="background: #ffffff; border-radius: 12px; padding: 40px; box-shadow: 0 2px 10px rgba(0,0,0,0.08);">
        <h2 style="color: #1E293B; margin-top: 0;">Reset Your Password</h2>
        <p style="color: #475569; line-height: 1.6;">Hi ${name},</p>
        <p style="color: #475569; line-height: 1.6;">You requested a password reset. Click the button below to set a new password:</p>
        <div style="text-align: center; margin: 30px 0;">
          <a href="${resetUrl}" style="background: #5B82F7; color: #ffffff; padding: 14px 40px; border-radius: 8px; text-decoration: none; font-weight: 600; display: inline-block;">Reset Password</a>
        </div>
        <p style="color: #94A3B8; font-size: 13px;">This link expires in 1 hour. If you didn't request a password reset, you can safely ignore this email.</p>
      </div>
      <p style="color: #94A3B8; font-size: 12px; text-align: center; margin-top: 20px;">© ${new Date().getFullYear()} UniConnect. All rights reserved.</p>
    </div>
  `;
};

module.exports = { sendEmail, getVerificationEmailHTML, getResetPasswordEmailHTML };
