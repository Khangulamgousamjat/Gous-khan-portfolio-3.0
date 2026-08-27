import axios from 'axios';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Helper function to send a message via Telegram
async function sendTelegramMessage(token, chat_id, message) {
  if (!token || !chat_id) return false;
  const url = `https://api.telegram.org/bot${token}/sendMessage`;
  try {
    const res = await axios.post(url, {
      text: message,
      chat_id,
    });
    return res.data.ok === true;
  } catch (error) {
    console.error('Error sending Telegram message:', error.response?.data || error.message);
    return false;
  }
}

// HTML email template
const generateEmailTemplate = (name, email, userMessage) => `
  <div style="font-family: Arial, sans-serif; color: #333; padding: 20px; background-color: #f4f4f4;">
    <div style="max-width: 600px; margin: auto; background-color: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);">
      <h2 style="color: #007BFF;">New Message Received</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <blockquote style="border-left: 4px solid #007BFF; padding-left: 10px; margin-left: 0;">
        ${userMessage}
      </blockquote>
      <p style="font-size: 12px; color: #888;">Click reply to respond to the sender.</p>
    </div>
  </div>
`;

// Helper function to send an email via Nodemailer
async function sendEmail(payload, message) {
  const emailAddress = process.env.EMAIL_ADDRESS;
  const gmailPasskey = process.env.GMAIL_PASSKEY;

  if (!emailAddress || !gmailPasskey) return false;

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: emailAddress,
        pass: gmailPasskey,
      },
    });

    const { name, email, message: userMessage } = payload;
    const mailOptions = {
      from: `Portfolio <${emailAddress}>`,
      to: emailAddress,
      subject: `New Message From ${name}`,
      text: message,
      html: generateEmailTemplate(name, email, userMessage),
      replyTo: email,
    };

    await transporter.sendMail(mailOptions);
    return true;
  } catch (error) {
    console.error('Error while sending email:', error.message);
    return false;
  }
}

export async function POST(request) {
  try {
    const payload = await request.json();
    const { name, email, message: userMessage } = payload;

    if (!name || !email || !userMessage) {
      return NextResponse.json({
        success: false,
        message: 'Name, email, and message are required.',
      }, { status: 400 });
    }

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chat_id = process.env.TELEGRAM_CHAT_ID;
    const emailAddress = process.env.EMAIL_ADDRESS;
    const gmailPasskey = process.env.GMAIL_PASSKEY;

    const hasTelegram = Boolean(token && chat_id);
    const hasEmail = Boolean(emailAddress && gmailPasskey);

    if (!hasTelegram && !hasEmail) {
      return NextResponse.json({
        success: false,
        message: 'Contact notifications are not configured yet. Please configure Telegram or Gmail credentials in environment variables.',
      }, { status: 400 });
    }

    const message = `📬 *New Message Received from Portfolio:*\n\n👤 *Name:* ${name}\n📧 *Email:* ${email}\n\n💬 *Message:*\n${userMessage}`;

    let telegramSuccess = false;
    let emailSuccess = false;

    if (hasTelegram) {
      telegramSuccess = await sendTelegramMessage(token, chat_id, message);
    }

    if (hasEmail) {
      emailSuccess = await sendEmail(payload, message);
    }

    if (telegramSuccess || emailSuccess) {
      return NextResponse.json({
        success: true,
        message: 'Message sent successfully!',
      }, { status: 200 });
    }

    return NextResponse.json({
      success: false,
      message: 'Failed to deliver message. Please verify your credentials or contact directly via email.',
    }, { status: 500 });
  } catch (error) {
    console.error('API Error:', error.message);
    return NextResponse.json({
      success: false,
      message: 'Server error occurred while sending message.',
    }, { status: 500 });
  }
}