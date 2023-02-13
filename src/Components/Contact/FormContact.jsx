import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
// import styled from "styled-components";
import Styles from "./Contact.module.css";
// npm i @emailjs/browser

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
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
        
      </form>

  );
};

export default FormContact;

// Styles
