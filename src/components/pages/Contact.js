import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0znj3im",
        "template_odmzh8n",
        form.current,
        "QZmR8uuIISovg6tAr"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" className="form-control" name="user_name" />
      <label>Email</label>
      <input type="email" className="form-control" name="user_email" />
      <label>Message</label>
      <textarea name="message"  className="form-control"/>
      <input type="submit" value="Send" className="btn btn-primary"/>
    </form>
  );
}

export default Contact;
