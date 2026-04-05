import React from "react";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-page">
      <header className="contact-header">
        <h1>Contact Us</h1>
        <p>We’d love to hear from you! Reach out with any questions or feedback.</p>
      </header>

      <div className="contact-container">
        <section className="contact-form">
          <h2>Send Us a Message</h2>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea rows="5" placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </section>

        <section className="contact-info">
          <h2>Get in Touch</h2>
          <p><strong>Email:</strong> support@nyota.com</p>
          <p><strong>Phone:</strong> +91 98765 43210</p>
          <p><strong>Address:</strong> Bangalore, India</p>

          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.482328081279!2d77.5946!3d12.9716"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Google Map"
            ></iframe>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
