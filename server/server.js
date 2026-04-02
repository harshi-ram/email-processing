// server.js

const express = require("express");
const app = express();

const emailRoutes = require("./routes/emailRoutes");
const cors = require("cors");

app.use(cors());

app.use(express.json());

app.use("/api/email", emailRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});