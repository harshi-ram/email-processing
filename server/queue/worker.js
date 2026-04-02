// queue/worker.js

const { Worker } = require("bullmq");
const connection = require("../config/redis");
const sendEmail = require("../services/emailService");

const worker = new Worker(
  "emailQueue",
  async (job) => {
    const { to, subject, body } = job.data;

    console.log("Processing job:", job.id);

    await sendEmail(to, subject, body);

    console.log("Email sent to:", to);
  },
  {
    connection,
  }
);

worker.on("completed", (job) => {
  console.log(`Job ${job.id} completed`);
});

worker.on("failed", (job, err) => {
  console.log(`Job ${job.id} failed:`, err.message);
});