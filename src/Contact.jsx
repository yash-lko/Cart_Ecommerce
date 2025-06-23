import React from "react";


const Contact = () => {
  return (
    <section className="contact-page">
      <h2 className="contact-title">📩 Contact Us</h2>

      <form className="contact-form">
        <div className="form-group">
          <label>Name</label>
          <input type="text" placeholder="Your Name" required />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input type="email" placeholder="Your Email" required />
        </div>

        <div className="form-group">
          <label>Message</label>
          <textarea placeholder="Your Message..." rows="5" required></textarea>
        </div>

        <button type="submit" className="submit-btn">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
