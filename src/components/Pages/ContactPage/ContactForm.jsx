// ContactForm.js

import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with the form data, e.g., send it to a backend server
    console.log(formData);
  };

  return (
    <div className="contactform-container">
      {/* <h2>Contact Us</h2> */}
      <form onSubmit={handleSubmit}>
       <div className="name-email">
       <div>
       {/* <label htmlFor="name">Name</label> */}
        <input
        placeholder='Name'
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
       </div>

        <div>
        {/* <label htmlFor="email">Email</label> */}
        <input
        placeholder='Email'
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        </div>
       </div>
       <br />
        {/* <label htmlFor="message">Message</label> */}
        <textarea
        placeholder='Message'
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="5"
          required
        />

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactForm;
