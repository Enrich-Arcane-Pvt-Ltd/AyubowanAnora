import { generateEmailTemplate } from "@/lib/email-template";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
    try {
        const data = await req.json();
        
        const { name, email, subject, message, eventTitle, company, phone } = data;

        if (!name || !email || !subject || !message) {
            return NextResponse.json(
                { message: "Missing required fields" },
                { status: 400 }
            );
        }

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: true,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        const emailHtml = generateEmailTemplate({
            name,
            email,
            subject,
            message,
            eventTitle,
            company,
            phone,
        });

        const mailOptions = {
            from: process.env.MAIL_FROM,
            to: process.env.MAIL_TO,
            replyTo: email,
            subject: eventTitle 
                ? `New Event Inquiry: ${subject}` 
                : `New Contact Form Submission: ${subject}`,
            html: emailHtml,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json(
            { message: "Email sent successfully!" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json(
            { message: "Failed to send email.", error: error.message },
            { status: 500 }
        );
    }
}