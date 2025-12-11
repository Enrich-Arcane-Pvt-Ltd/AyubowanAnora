interface EmailData {
    name: string;
    email: string;
    subject: string;
    message: string;
    eventTitle?: string;
    company?: string;
    phone?: string;
}

export function generateEmailTemplate({
    name,
    email,
    subject,
    message,
    eventTitle,
    company,
    phone
}: EmailData): string {

    const theme = {
        bg: "#0a0a0f",
        card: "#13131f",
        text: "#ffffff",
        textMuted: "#a1a1aa",
        border: "#27273a",
        accentPurple: "#8b5cf6",
        accentPink: "#ec4899",
        gradient: "linear-gradient(to right, #8b5cf6, #ec4899)"
    };

    const logoUrl = "cid:logoimg";

    return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body style="margin: 0; padding: 0; background-color: ${theme.bg}; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: ${theme.text};">
        
        <div style="background-color: ${theme.bg}; padding: 40px 0;">
            
            <div style="max-width: 600px; margin: 0 auto; background-color: ${theme.card}; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.5); border: 1px solid ${theme.border};">
                
                <div style="height: 6px; background: ${theme.accentPurple}; background: ${theme.gradient};"></div>
                
                <div style="text-align: center; padding: 30px 20px 10px 20px;">
                    <img src="cid:logoimg" alt="Logo" style="max-width: 150px; height: auto; display: block; margin: 0 auto;">
                    
                    <h2 style="color: ${theme.text}; margin-top: 25px; font-weight: 700; letter-spacing: 0.5px;">
                        ${eventTitle ? "New Event Inquiry" : "New Contact Submission"}
                    </h2>
                </div>

                <div style="padding: 30px;">
                    
                    <p style="color: ${theme.textMuted}; text-align: center; margin-bottom: 30px; line-height: 1.5;">
                        Hello Admin, you received a new message via your website.
                    </p>

                    <table style="width: 100%; border-collapse: separate; border-spacing: 0; margin-bottom: 30px;">
                        <tbody>
                            ${eventTitle ? `
                            <tr>
                                <td style="padding: 12px 15px; border-bottom: 1px solid ${theme.border}; color: ${theme.accentPurple}; font-weight: bold; width: 35%;">Interested Event</td>
                                <td style="padding: 12px 15px; border-bottom: 1px solid ${theme.border}; color: ${theme.text}; font-weight: bold;">${eventTitle}</td>
                            </tr>` : ''}

                            <tr>
                                <td style="padding: 12px 15px; border-bottom: 1px solid ${theme.border}; color: ${theme.textMuted}; width: 35%;">Full Name</td>
                                <td style="padding: 12px 15px; border-bottom: 1px solid ${theme.border}; color: ${theme.text}; font-weight: 500;">${name}</td>
                            </tr>
                            
                            <tr>
                                <td style="padding: 12px 15px; border-bottom: 1px solid ${theme.border}; color: ${theme.textMuted};">Email</td>
                                <td style="padding: 12px 15px; border-bottom: 1px solid ${theme.border}; color: ${theme.text};">
                                    <a href="mailto:${email}" style="color: ${theme.accentPink}; text-decoration: none;">${email}</a>
                                </td>
                            </tr>

                            ${phone ? `
                            <tr>
                                <td style="padding: 12px 15px; border-bottom: 1px solid ${theme.border}; color: ${theme.textMuted};">Phone</td>
                                <td style="padding: 12px 15px; border-bottom: 1px solid ${theme.border}; color: ${theme.text};">${phone}</td>
                            </tr>` : ''}

                            ${company ? `
                            <tr>
                                <td style="padding: 12px 15px; border-bottom: 1px solid ${theme.border}; color: ${theme.textMuted};">Company</td>
                                <td style="padding: 12px 15px; border-bottom: 1px solid ${theme.border}; color: ${theme.text};">${company}</td>
                            </tr>` : ''}

                            <tr>
                                <td style="padding: 12px 15px; border-bottom: 1px solid ${theme.border}; color: ${theme.textMuted};">Subject</td>
                                <td style="padding: 12px 15px; border-bottom: 1px solid ${theme.border}; color: ${theme.text};">${subject}</td>
                            </tr>
                        </tbody>
                    </table>

                    <div style="background-color: #1a1a26; padding: 20px; border-radius: 8px; border-left: 4px solid ${theme.accentPurple};">
                        <p style="margin: 0 0 10px 0; color: ${theme.textMuted}; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Message</p>
                        <p style="margin: 0; color: ${theme.text}; line-height: 1.6; white-space: pre-wrap;">${message}</p>
                    </div>

                </div>

                <div style="background-color: #0f0f18; padding: 20px; text-align: center; border-top: 1px solid ${theme.border};">
                    <p style="margin: 0; color: ${theme.textMuted}; font-size: 13px;">
                        © ${new Date().getFullYear()} Your Company Name. All rights reserved.
                    </p>
                </div>

            </div>
            
            <p style="text-align: center; color: #555; font-size: 12px; margin-top: 20px;">
                Automated System Notification
            </p>
        </div>
    </body>
    </html>
    `;
}