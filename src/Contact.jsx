import React, { useState } from "react";


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })


  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData, "Form Data")
  }



  const handleChange = (e) => {

    const { name, value } = e.target;

    console.log(name, value)

    setFormData(({
      ...formData,
      [name]: value
    }))

  }
  return (
    <section className="contact-page">
      <h2 className="contact-title">📩 Contact Us</h2>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input type="text" name="name" placeholder="Your Name" onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" placeholder="Your Email" onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Message</label>
          <textarea name="message" placeholder="Your Message..." rows="5" onChange={handleChange} required></textarea>
        </div>

        <button type="submit" className="submit-btn">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
