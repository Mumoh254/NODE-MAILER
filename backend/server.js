const express = require('express');
require('dotenv').config(); // Ensure dotenv is loaded properly
const cors = require('cors');
const sendEmail = require('./utilities/sendMail');

const app = express();
app.use(express.json());
app.use(cors());

// Routes
app.get("/", (req, res) => {
    res.send("Home Page");
});

app.post("/api/sendmail", async (req, res) => {
    const { email } = req.body;

    try {
        const send_to = email;
        const sent_from = process.env.EMAIL_USER;
        const reply_to = email;
        const subject = "Thank You Message";
        const message = '<h3>Hello Peter Mumo</h3><p>Thank you for watching.</p><h2>Best Regards</h2>';

        await sendEmail(subject, message, send_to, sent_from, reply_to);

        res.status(200).json({
            success: true,
            message: "Email sent successfully"
        });
    } catch (error) {
        console.error(`Error while sending email: ${error.message}`);
        res.status(500).json({
            success: false,
            message: 'Failed to send email',
            error: error.message
        });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
