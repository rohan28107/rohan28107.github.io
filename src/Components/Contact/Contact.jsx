import {
  Box,
  Heading,
  Text,
  chakra,
  shouldForwardProp,
  Flex,
  Center,
} from "@chakra-ui/react";
import { FiCodepen } from "react-icons/fi";
import {  BsGithub, BsLinkedin} from "react-icons/bs";
import { motion, isValidMotionProp } from "framer-motion";
import { SiGmail } from "react-icons/si";
import { FaMobileAlt } from "react-icons/fa"
import FormContact from "./FormContact";

const ChakraBox = chakra(motion.div, {
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

  const handleOpenCodeSandbox = () => {
    window.open(`https://codesandbox.io/u/rohan28107`, "_blank");
  };


  return (
    <Box id="contact" height="700px"  margin={"auto"}>
      <Heading as='h2' textAlign="center" marginTop={"20px"}>
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
        <Box
          display="flex"
          flexDirection={{ base: "column", md: "row" }}
          justifyContent="space-around"
          alignItems="center"
          padding="10px"
          m="auto"
          width={{ base: "100%", md: "87%", lg: "80%" }}
          borderRadius={"20px"}
          mt={{ base: "30px", md: "40px" }}
        >
          <Box
            width={["80%","60%"]}
            padding={{ base: "5px", md: "20px" }}
            height={"40%"}
          >
            
            <Text textAlign={"justify"}  padding='5%' fontSize={["md", "xl"]} >
              I am open to talk regarding Full-Time or Freelancing
              opportunities. Feel free to contact me using your preferred
              medium. Get in Touch I'd happy to hear from you.
            </Text>

            <Box  padding='5%' textAlign={["center", "start"]} fontSize={["md", "xl"]}>
              <Flex width="100%" alignItems={"center"} mt="10px" >
                <SiGmail fontSize={["40px","20px"]} />
                <Text ml={"10px"} fontSize="15px">
                  rohangajre21@gmail.com
                </Text>
              </Flex>
              <Flex width="100%" alignItems={"center"} mt="10px">
                <FaMobileAlt  fontSize={"20px"} />
                <Text ml={"10px"} fontSize="15px">
                  +91 8850906630
                </Text>
              </Flex>
              {/* social Media Links */}
              <Flex width="100%" alignItems={"center"} mt="10px" onClick={handleOpenLinkdin}>
                  <BsLinkedin
                    
                    cursor={"pointer"}
                    fontSize={{ base: "none", lg: "20px" }}
                  />
                <Text ml={"10px"} fontSize="15px">
                  rohan28107
                </Text>
              </Flex>
              <Flex width="100%" alignItems={"center"} mt="10px" onClick={handleOpenGithub}>
                <BsGithub
                      cursor={"pointer"}
                      
                      fontSize={{ base: "none", lg: "20px" }}
                    />
                <Text ml={"10px"} fontSize="15px">
                 rohan28107
                </Text>
              </Flex>
              <Flex width="100%" alignItems={"center"} mt="10px" onClick={handleOpenCodeSandbox}>
                <FiCodepen
                      cursor={"pointer"}
                      
                      fontSize={{ base: "none", lg: "20px" }}
                    />
                <Text ml={"10px"} fontSize="15px">
                 rohan28107
                </Text>
              </Flex>
            </Box>
           
          </Box>
          <Box
            width={{ base: "100%", md: "50%" }}
            padding={{ base: "25px", md: "20px" }}
            color="black"
          >
            {/* <Email /> */}
            <Box borderRadius="12px" padding='10px' border='1px solid black' margin='5%' marginRight="10%">
              <Heading as='h3' textAlign={"center"}>Email Me📩</Heading>
              <FormContact />
              {/* <ContactForm /> */}
            </Box>
          </Box>
        </Box>
        <Box>
          <Center>Made by Rohan❤️</Center>
        </Box>
      </ChakraBox>{" "}
    </Box>
  );
};

export default Contact;