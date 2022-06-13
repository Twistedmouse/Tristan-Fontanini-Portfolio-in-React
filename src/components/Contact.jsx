import React from "react";
import emailjs from "emailjs-com";

function Contact() {
  function handleSubmit(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zt8cfsk",
        "template_anfw02h",
        e.target,
        "Tg_ncOtAl61vxygur"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="contact-grid-container">
      <div className="contactContainer">
        <div class="col-lg-5">
          <h1 class="contactH1">Let's get in touch:</h1>
          <form onSubmit={handleSubmit} className="form">
            <div className="name">
              <label for="firstName">First name:</label>
              <input
                type="text"
                name="firstName"
                className="firstName"
                tabIndex="1"
              />
              <label for="lastName">Last name:</label>
              <input
                type="text"
                name="lastName"
                className="lastName"
                tabIndex="2"
              />
              <div className="email">
                <label for="email">Email:</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="email"
                  placeholder="example@email.com"
                  tabIndex="3"
                />
              </div>
              <label for="message">Message:</label>

              <textarea
                placeholder="Start typing..."
                className="message"
                name="message"
              />
            </div>
            <button type="submit" className="send">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
