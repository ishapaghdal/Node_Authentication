//not implemented yet so ignore this file

const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();

const sendOTPViaEmail = async (to, subbject, text) => {
    try{
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD_FOR_EMAIL
            }
        });

        const mailOptions = {
            from: process.env.EMAIL,
            to: to,
            subject: subbject,
            text: text
        };

        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);

        return info.messageId;
        
    }catch(error){
        console.log('Error in sending email: ', error);
        throw new Error('Error in sending email');
    }

};

module.exports = sendOTPViaEmail;