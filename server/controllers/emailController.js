// controllers/emailController.js

const emailQueue = require("../queue/emailQueue");

exports.sendEmail = async (req, res) => {
  const { to, subject, body } = req.body;

  const job = await emailQueue.add("sendEmail", {
    to,
    subject,
    body,
  });

  res.json({
    message: "Email job added to queue",
    jobId: job.id,
  });
};