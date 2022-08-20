import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

// WHEN I am presented with the Contact section
// THEN I see a contact form with fields for a name, an email address, and a message
function ContactForm() {
  const [errorMessage, setErrorMessage] = useState("");
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = formState;

  // WHEN I move my cursor out of one of the form fields without entering text
  // THEN I receive a notification that this field is required
  function handleChange(e) {
    // WHEN I enter text into the email address field
    // THEN I receive a notification if I have entered an invalid email address
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      console.log(isValid);
      // isValid conditional statement
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
    // console.log("errorMessage", errorMessage);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }

  //   console.log(formState);

  // JSX
  return (
    <section>
      <h2 data-testid="ContactForm" className="center">
        Reach Out
      </h2>
      <div className="flex flex-row space-around">
        {/* <section>
          <h3>(Does not yet work!)</h3>
          <form id="contact" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                defaultValue={name}
                onBlur={handleChange}
                name="name"
              />
            </div>
            <div>
              <label htmlFor="email">Email address:</label>
              <input
                type="email"
                defaultValue={email}
                onBlur={handleChange}
                name="email"
              />
            </div>
            <div>
              <label htmlFor="message">Message:</label>
              <textarea
                name="message"
                defaultValue={message}
                onBlur={handleChange}
                rows="5"
              />
            </div>
            {errorMessage && (
              <div>
                <p className="error-text">{errorMessage}</p>
              </div>
            )}
            <button type="submit" data-testid="Submit">
              Submit
            </button>
          </form>
        </section> */}
        <section>
          <button type="button" className="">
            <a
              href="mailto:jason.a.arritt@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send Me an Email
            </a>
          </button>
        </section>
      </div>
    </section>
  );
}

export default ContactForm;
