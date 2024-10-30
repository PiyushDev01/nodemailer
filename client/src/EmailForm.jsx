// React Component (e.g., EmailForm.js)
import React, { useState } from 'react';
import axios from 'axios';

const EmailForm = () => {

    const [sending, setSending] = useState(false);
  const [emailData, setEmailData] = useState({
    to: '',
    subject: '',
    text: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmailData({
      ...emailData,
      [name]: value
    });
  };

  const sendEmail = async () => {
    setSending(true);
    try {
      const response = await axios.post('http://localhost:5000/send-email', emailData);
      console.log('Email sent successfully:', response.data);
    } catch (error) {
      console.error('Error sending email:', error);
    }
    setSending(false);
  };

  return (
    <div>
      <input name="to" placeholder="Recipient's Email" onChange={handleChange} /> <br /><br />
      <input name="subject" placeholder="Subject" onChange={handleChange} /><br /><br />
      <textarea name="text" placeholder="Message" onChange={handleChange} /><br /><br />
      <button onClick={sendEmail}>{
        sending ? 'Sending...' : 'Send Email'

        }</button>
    </div>
  );
};

export default EmailForm;
