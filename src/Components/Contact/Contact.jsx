import {
  Box,
  Heading,
  Text,
  chakra,
  shouldForwardProp,
  Flex,
} from "@chakra-ui/react";
// import styles from "./Contact.module.css";
import React from "react";
// import { GrLinkedinOption } from "react-icons/gr";
import { FiMail } from "react-icons/fi";
import { motion, isValidMotionProp } from "framer-motion";
import ContactForm from "./ContactForm";
import { BsFillPhoneFill, BsGithub, BsLinkedin} from "react-icons/bs";

const ChakraBox = chakra(motion.div, {
  /**
   * Allow motion props and non-Chakra props to be forwarded.
   */
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

const Contact = () => {
  const handleOpenLinkdin = () => {
    window.open(`https://www.linkedin.com/in/rohan-gajare/`, "_blank");
  };
  const handleOpenGithub = () => {
    window.open(`https://github.com/rohan28107`, "_blank");
  };
  return (
    <Box id="contact" height="700px">
      <Heading as='h2' textAlign="center" >
      {/* className={styles.contact_Text} */}
        Contact Me
      </Heading>
      <ChakraBox
        initial={{ opacity: 0 }}
        whileInView={{ y: [-15, 0], opacity: 1 }}
        transition={{
          duration: 1,
          delay: 0.3,
        }}
      >
        {/* <Box> */}

        <Box
          display="flex"
          flexDirection={{ base: "column", md: "row" }}
          justifyContent="space-around"
          alignItems="center"
          padding="10px"
          m="auto"
          width={{ base: "90%", md: "87%", lg: "80%" }}
          borderRadius={"20px"}
          mt={{ base: "30px", md: "40px" }}
          // className={styles.contact_form}
        >
          <Box
            width={{ base: "80%", md: "50%" }}
            padding={{ base: "5px", md: "20px" }}
            height={"100%"}
          >
            
            <Text textAlign={"justify"} fontSize="16px" padding='5%'>
              I am open to talk regarding freelancing or full-time
              opportunities. Feel free to contact me using your preferred
              medium. Get in Touch I'd love to hear from you.
            </Text>

            <Box  padding='5%'>
            {/* border='1px solid red' */}
              <Flex width="100%" alignItems={"center"} mt="10px" >
                <FiMail fontSize={"20px"} />
                <Text ml={"10px"} fontSize="15px">
                  rohangajre21@gmail.com
                </Text>
              </Flex>
              <Flex width="100%" alignItems={"center"} mt="10px">
                <BsFillPhoneFill  fontSize={"20px"} />
                <Text ml={"10px"} fontSize="15px">
                  +91 8850906630
                </Text>
              </Flex>
              {/* social Media Links */}
              <Box
                display={"flex"}
                alignItems={"center"}
                mt={{ base: "40px", md: "75px", lg: "135px" }}
                marginTop="20px"
              >
                <Box borderRadius={"full"} >
                  <BsLinkedin
                    onClick={handleOpenLinkdin}
                    // color="white"
                    cursor={"pointer"}
                    fontSize={{ base: "none", lg: "20px" }}
                  />
                  {/* </a> */}
                </Box>
                <Box ml={"10px"} borderRadius={"full"} >
                  <BsGithub
                    cursor={"pointer"}
                    onClick={handleOpenGithub}
                    fontSize={{ base: "none", lg: "20px" }}
                  />
                  {/* </a> */}
                </Box>
              </Box>
            </Box>
           
          </Box>
          <Box
            width={{ base: "100%", md: "50%" }}
            padding={{ base: "25px", md: "20px" }}
            color="black"
          >
            <Box borderRadius="12px" padding='10px' border='1px solid black' margin='5%' marginRight="10%">
              <Heading as='h3'>Email Me📩</Heading>
              {/* Contact Form */}
              <ContactForm />
            </Box>
          </Box>
        </Box>
        {/* </Box> */}
      </ChakraBox>{" "}
    </Box>
  );
};

export default Contact;