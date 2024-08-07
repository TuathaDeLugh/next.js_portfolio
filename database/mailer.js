import nodemailer from 'nodemailer';



export const sendEmail = async ({ email , fullname , subject , details }) => {
          
    const transporter = nodemailer.createTransport({
      host: 'smtp.zoho.in',
      port: 465, 
      secure: true, 
      auth: {
        user: process.env.MAILUSER,
        pass: process.env.MAILPASS
      }
    });
try{

  const mailOption = {
    from: "auth@umangsailor.com",
    to: "ursailor@gmail.com,contact@umangsailor.com",
    subject: `Contact Request for ${subject}`,
    html: `
    <div style="background-color: #f1fff7; padding: 20px; border-radius: 10px; border: 2px solid #18a44b; font-family: Arial, sans-serif; color: #333;">
      <div style="text-align: center; margin-bottom: 20px;">
        <h2 style="color: #18a44b;">Contact Request</h2>
      </div>
      <div style="margin-bottom: 20px;">
        <p style="font-size: 16px; margin: 0;"><strong>From:</strong> ${fullname} (${email})</p>
        <p style="font-size: 16px; margin: 0;"><strong>Subject:</strong> ${subject}</p>
      </div>
      <div style="margin-bottom: 20px;">
        <p style="font-size: 16px; margin: 0;"><strong>Details:</strong></p>
        <p style="font-size: 16px; margin: 0; padding: 10px; border-radius: 5px; background-color: #ffffff; border: 1px solid #18a44b;">${details}</p>
      </div>
      <hr style="border-top: 1px solid #18a44b; margin: 20px 0;" />
      <div style="font-size: 14px; color: #666;">
        <p>This email was sent automatically. Please do not reply to this email. If you need to respond, please reply to <a href="mailto:${email}" style="color: #18a44b;">${email}</a> instead.</p>
        <p>Best regards,</p>
        <p>Umang Sailor</p>
      </div>
    </div>
  `
  };
  
  
  
  await transporter.sendMail(mailOption);
  console.log("Mail Sent");
  
}
 catch (error) {
    console.error(error);
  }
};
