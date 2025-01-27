import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    // Constructing the mailto link
    const mailtoLink = `mailto:chahatsrivastava019@gmail.com?subject=Message from ${encodeURIComponent(
      name
    )}&body=${encodeURIComponent(message)}%0A%0AFrom: ${encodeURIComponent(
      name
    )}%0AEmail: ${encodeURIComponent(email)}`;

    // Open the mail client
    window.location.href = mailtoLink;
  };

  return (
    <section className="section">
      <div className="container">
        <h1 className="title has-text-centered">Contact Me</h1>
        <form className="mt-5" onSubmit={handleFormSubmit}>
          {/* Name Field */}
          <div className="field">
            <label className="label">Your Name</label>
            <div className="control">
              <input
                className="input"
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          {/* Email Field */}
          <div className="field">
            <label className="label">Your Email</label>
            <div className="control">
              <input
                className="input"
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          {/* Message Field */}
          <div className="field">
            <label className="label">Your Message</label>
            <div className="control">
              <textarea
                className="textarea"
                name="message"
                placeholder="Your Message"
                rows="4"
                value={formData.message}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>
          </div>

          {/* Submit Button */}
          <div className="control">
            <button className="button is-primary" type="submit">
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
