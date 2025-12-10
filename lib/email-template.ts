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

    return `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; background-color: #f4f4f4; padding: 20px;">
        <div style="max-width: 600px; margin: 20px auto; padding: 20px; background: #ffffff; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
            
            <h1 style="color: #4a148c; text-align: center; border-bottom: 2px solid #e0e0e0; padding-bottom: 10px;">
                ${eventTitle ? "New Event Inquiry" : "New Contact Submission"}
            </h1>
            
            <p style="font-size: 16px;">Hello Admin,</p>
            <p style="font-size: 16px;">You have received a new message from your website. Below are the details:</p>
            
            <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
                <tr>
                    <td style="padding: 10px; background-color: #f9f9f9; border-bottom: 1px solid #eee; width: 30%; font-weight: bold;">Name:</td>
                    <td style="padding: 10px; border-bottom: 1px solid #eee;">${name}</td>
                </tr>
                <tr>
                    <td style="padding: 10px; background-color: #f9f9f9; border-bottom: 1px solid #eee; font-weight: bold;">Email:</td>
                    <td style="padding: 10px; border-bottom: 1px solid #eee;">${email}</td>
                </tr>
                
                ${/* Conditionally render Phone if it exists */
        phone ? `
                <tr>
                    <td style="padding: 10px; background-color: #f9f9f9; border-bottom: 1px solid #eee; font-weight: bold;">Phone:</td>
                    <td style="padding: 10px; border-bottom: 1px solid #eee;">${phone}</td>
                </tr>` : ''}

                ${/* Conditionally render Company if it exists */
        company ? `
                <tr>
                    <td style="padding: 10px; background-color: #f9f9f9; border-bottom: 1px solid #eee; font-weight: bold;">Company:</td>
                    <td style="padding: 10px; border-bottom: 1px solid #eee;">${company}</td>
                </tr>` : ''}

                ${/* Conditionally render Event Name (Specific to Inquiry Form) */
        eventTitle ? `
                <tr>
                    <td style="padding: 10px; background-color: #f2e6ff; border-bottom: 1px solid #d1c4e9; font-weight: bold; color: #4a148c;">Interested Event:</td>
                    <td style="padding: 10px; border-bottom: 1px solid #d1c4e9; background-color: #f2e6ff; font-weight: bold; color: #4a148c;">${eventTitle}</td>
                </tr>` : ''}

                <tr>
                    <td style="padding: 10px; background-color: #f9f9f9; border-bottom: 1px solid #eee; font-weight: bold;">Subject:</td>
                    <td style="padding: 10px; border-bottom: 1px solid #eee;">${subject}</td>
                </tr>
            </table>

            <div style="border: 1px solid #e0e0e0; padding: 15px; border-radius: 4px; background-color: #fafafa;">
                <h4 style="margin-top: 0; color: #4a148c;">Message:</h4>
                <p style="white-space: pre-wrap; margin: 0;">${message}</p>
            </div>
            
            <p style="text-align: center; margin-top: 30px; font-size: 14px; color: #888;">
                This message was sent from your website's ${eventTitle ? "Inquiry Form" : "Contact Form"}.
            </p>
        </div>
    </div>
  `;
}