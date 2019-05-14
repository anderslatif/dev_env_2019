const nodemailer = require('nodemailer');
const credentials = require('./credentials');

module.exports = {
  sendEmail: async (to, subject, html) => {
    const mailOptions = {
      from: '"Toxic" <bookshelfweb@gmail.com>', // sender address
      to, // list of receivers, comma separated in a string
      subject,
      html,
    };
    const smtpTrans = await nodemailer.createTransport({
      service: 'gmail',
      //  host:'smtp.gmail.com',
      //  port:465,
      // secure:true,
      auth: {
        user: credentials.EMAIL_ADDRESS,
        pass: credentials.EMAIL_PASSWORD,
      },
    });
    smtpTrans.sendMail(mailOptions, (error, res) => {
      if (error) {
        throw error;
      }
    });
  },
};
