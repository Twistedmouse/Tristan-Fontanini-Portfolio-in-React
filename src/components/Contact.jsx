import React from "react";
import { useRef } from "react";

function Contact() {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      email: emailRef.current.value,
      message: messageRef.current.value,
    };
  };
  return (
    <div className="contactContainer">
      <div class="col-lg-5">
        <h1 class="font-weight-light">Contact</h1>
        <form onSubmit={handleSubmit} className="form">
          <div className="name">
            <label for="firstName">First name</label>
            <input
              type="text"
              name="firstName"
              className="firstName"
              tabIndex="1"
            />
            <label for="lastName">Last name</label>
            <input
              type="text"
              name="lastName"
              className="lastName"
              tabIndex="2"
            />
            <label for="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="email"
              placeholder="example@corp.com"
              tabIndex="3"
            />
            <label for="message">Message</label>

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
  );
}

export default Contact;
