// src/App.js

import React, { useState } from "react";
import axios from "axios";

function App() {
  const [form, setForm] = useState({
    to: "",
    subject: "",
    body: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendEmail = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/email/send", form);
      setMessage(`Job submitted! ID: ${res.data.jobId}`);
    } catch (err) {
      setMessage("Error sending email");
    }
  };

  return (
  <div className="container">
    <div className="card">
      <h2>Email Queue System</h2>

      <input
        type="email"
        name="to"
        placeholder="Recipient Email"
        value={form.to}
        onChange={handleChange}
      />

      <input
        type="text"
        name="subject"
        placeholder="Subject"
        value={form.subject}
        onChange={handleChange}
      />

      <textarea
        name="body"
        placeholder="Message"
        value={form.body}
        onChange={handleChange}
      />

      <button onClick={sendEmail}>Send Email</button>

      {message && <p className="message">{message}</p>}
    </div>
  </div>
 );
}

export default App;