import { Box, Button, useToast } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
// import styles from "./Contact.module.css";

import { IoSend } from "react-icons/io5";

const Service_ID = process.env.REACT_APP_SERVICE_ID;
const Template_ID = process.env.REACT_APP_TEMPLATE_ID;
const Public_Key = process.env.REACT_APP_PUBLIC_KEY;
const ContactForm = () => {
  const [inputMail, setInputEmail] = useState({});
  const [loadingStatus, setLoadingStatus] = useState(false);
  const toast = useToast();
  const form = useRef();
  const handleSendQuery = (e) => {
    e.preventDefault();
    setLoadingStatus(true);
    emailjs.sendForm(Service_ID, Template_ID, form.current, Public_Key).then(
      (result) => {
        toast({
          title: "Sent",
          description: "I will get in touch with you Shrotly !",
          status: "success",
          duration: 4000,
          isClosable: true,
        });
        setLoadingStatus(false);
        e.target.reset();
      },
      (error) => {
        toast({
          title: "Failed to Send",
          description: "It seems to be Server issue !",
          status: "error",
          duration: 4000,
          isClosable: true,
        });
        setLoadingStatus(false);
        console.log(error.text);
      }
    );
  };
  return (
        <form ref={form} onSubmit={handleSendQuery}>
        <Box
            style={{
            display: "flex",
            justifyContent: "space-evenly",
            marginBottom: "20px",
            marginLeft:"10px",
            padding:"auto",
            width:"95%",
            // border: "1px solid black"
            }}
        >
            <input
                style={{
                    backgroundColor: "#f3f3f3",
                    width: "45%",
                    padding: "10px",
                    borderRadius: "10px",
                }}
                type="text"
                name="firstName"
                placeholder="First Name"
                required
                onChange={(e) => {
                    setInputEmail({
                    ...inputMail,
                    [e.target.name]: e.target.value,
                    });
                }}
            />
            <input
                style={{
                    backgroundColor: "#f3f3f3",
                    width: "45%",
                    padding: "10px",
                    borderRadius: "10px",
                }}
                type="text"
                required
                placeholder="Last Name"
                name="lastName"
                onChange={(e) => {
                    setInputEmail({
                    ...inputMail,
                    [e.target.name]: e.target.value,
                    });
                }}
            />
        </Box>
        <div>
            <input
                style={{
                    backgroundColor: "#f3f3f3",
                    marginBottom: "20px",
                    width: "90%",
                    padding: "10px",
                    borderRadius: "10px",
                }}
                type="email"
                placeholder="Email"
                name="email"
                required
                onChange={(e) => {
                    setInputEmail({
                    ...inputMail,
                    [e.target.name]: e.target.value,
                    });
                }}
            />{" "}
            <br />
            <textarea
            required
            style={{
                backgroundColor: "#f3f3f3",
                marginBottom: "20px",
                height: "150px",
                width: "90%",
                padding: "10px",
                borderRadius: "10px",
            }}
            placeholder="Message"
            name="message"
            onChange={(e) => {
                setInputEmail({
                ...inputMail,
                [e.target.name]: e.target.value,
                });
            }}
            />
            <Button
                type="submit"
                isLoading={loadingStatus ? true : false}
                loadingText="Sending"
                // className={styles.contact_form_btn}
                leftIcon={<IoSend />}
                backgroundColor={"#009aa3"}
                cursor={"pointer"}
                // size={"md"}
                bg='#234a84' 
                    variant='solid'
                    // size='large'
                    height='40px'
                    width='110px'
                    fontSize='20px'
                    // color='aliceblue;'
                    color='black'
                    border='none' 
                _hover={{
                    backgroundColor: "#157277",
                }}
                // style={{
                //   backgroundColor: "#009aa3",
                //   color: "white",
                //   padding: "10px 25px",
                //   borderRadius: "10px",
                //   cursor: "pointer",
                // }}
                >
                Send
            </Button>
        </div>
        {/* Send
        </input> */}
        </form>
  );
};

export default ContactForm;