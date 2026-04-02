// services/emailService.js

const sendEmail = async (to, subject, body) => {
  // simulate delay
  await new Promise((res) => setTimeout(res, 2000));

  console.log(`
    Sending Email:
    To: ${to}
    Subject: ${subject}
    Body: ${body}
  `);
};

module.exports = sendEmail;