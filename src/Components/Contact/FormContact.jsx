import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Styles from "./Contact.module.css";

const FormContact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zwhrbvt",
        "template_mu6x2he",
        form.current,
        "m8tvK9aopCKvfynQD"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
        
      );
      e.target.reset();
  };

  return (
      <form ref={form} onSubmit={sendEmail} className={Styles.form}>
        <label>Name</label>
        <input type="text" name="from_name" />
        <label>Email</label>
        <input type="email" name="email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
        
      </form>

  );
};

export default FormContact;
