const nodemailer = require('nodemailer');

const sendMail = async (subject, message, send_to, send_from, reply_to) => {

    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,  
        port: 587, 
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
        tls: {
            rejectUnauthorized: false, 
        },
    });

    const mailOptions = {
        from: send_from,
        to: send_to,
        replyTo: reply_to,
        subject: subject,
        html: message,
    };

    // Send the email
    transporter.sendMail(mailOptions, function (err, info) {  // Correct method is sendMail
        if (err) {
            console.log(err);
        } else {
            console.log(info);
        }
    });
};

module.exports = sendMail;
