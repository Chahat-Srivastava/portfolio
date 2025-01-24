import React from "react";

function Contact() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="title has-text-centered">Contact Me</h1>
        <form className="mt-5">
          <div className="field">
            <label className="label">Your Name</label>
            <div className="control">
              <input className="input" type="text" placeholder="Your Name" required />
            </div>
          </div>
          <div className="field">
            <label className="label">Your Email</label>
            <div className="control">
              <input className="input" type="email" placeholder="Your Email" required />
            </div>
          </div>
          <div className="field">
            <label className="label">Your Message</label>
            <div className="control">
              <textarea className="textarea" placeholder="Your Message" rows="4" required></textarea>
            </div>
          </div>
          <div className="control">
            <button className="button is-primary">Send</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
