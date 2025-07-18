
import { Resend } from 'resend';

export const resend = new Resend(process.env.Resend_API_KEY);

export async function sendVerificationEmail(email, username, code) {
  try {

    await resend.emails.send({
      from: 'UpChain <onboarding@resend.dev>',
      to: ['adnanq262@gmail.com' , 'adnanquresh262@gmail.com'],
      subject: 'Verify your Email',
      html:`
       <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
      <h2 style="color: #0d6efd;">Hello ${username},</h2>
      <p>Thank you for signing up. Please use the following OTP to verify your email address:</p>
      <div style="font-size: 24px; font-weight: bold; background: #f1f1f1; padding: 12px 20px; border-radius: 6px; text-align: center; letter-spacing: 4px; margin: 20px 0;">
        ${code}
      </div>
      <p>Your email is ${email}. Please verify it.</p>
      <p>This code will expire in 10 minutes.</p>
      <p>If you didn’t request this, you can ignore this email.</p>
      <p style="margin-top: 30px;">Best regards,<br />The UpChain Team</p>
    </div>`

    });

    console.log('Verification email sent successfully');
  } catch (err) {
    throw new Error('Email send failed');
  }
}
