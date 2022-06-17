import React from "react";
import emailjs from "emailjs-com";
import github from "../Images/github_logo.png";
import linkdIn from "../Images/linkedin_logo.png";

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
        // add change class to send to say "sent" if sucessful
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
            {/* add change class to send to say sent if sucessful */}
            <div className="githubContainer">
              <a
                href="https://github.com/Twistedmouse"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="gitHubLogo" src={github} alt="github profile" />
              </a>
            </div>
            <div className="linkdInContainer">
              <a
                href="https://www.linkedin.com/in/tristan-fontanini-b91879203/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="linkdInLogo"
                  src={linkdIn}
                  alt="linkdIn profile"
                />
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
