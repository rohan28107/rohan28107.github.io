import { Box, chakra, Flex, Heading, Image, shouldForwardProp, Text } from '@chakra-ui/react';
import React from 'react'
import GitHubCalendar from 'react-github-calendar';
import Styles from "./GitStats.module.css";
import { motion, isValidMotionProp } from "framer-motion";

const ChakraBox = chakra(motion.div, {
  /**
   * Allow motion props and non-Chakra props to be forwarded.
   */
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});


const GitStats = () => {
  return (
    <Box id="gitstats" className={Styles.Stats}>
      <ChakraBox
        initial={{ opacity: 0 }}
        whileInView={{ y: [-15, 0], opacity: 1 }}
        transition={{
          duration: 1,
          delay: 0.3,
        }}
      >
          <Box w="80%"  margin={"auto"} p={7} h={{sm:"auto",md:"auto",lg:"auto"}} gap="30px" textAlign={{sm:"center",md:"center",lg:"initial"}}>
              <Heading as='h2' textStyle="AboutHead" mt={{sm:"40px",md:"40px",lg:"30px"}}>Git Stats</Heading>
              <Text>Checkout my GitHub Stats!!</Text>

              <Box w="70%" margin={"auto"} marginBottom='2%' p={5} padding='20px' mt={{sm:"50px",md:"50px",lg:"40px"}} h="auto" border="1px solid black" borderRadius="15px">
                <Heading as='h3' textStyle="AboutSubHead" mt={{sm:"40px",md:"40px",lg:"40px"}}>Git Calendar</Heading>
                <GitHubCalendar username="rohan28107" />
              </Box>

              <Box w="90%" margin={"auto"} p={5} mt={{sm:"50px",md:"50px",lg:"40px"}} h="auto" border="1px solid black" borderRadius="15px">
                <Heading as='h3'  textStyle="AboutSubHead" mt={{sm:"40px",md:"40px",lg:"30px"}}>Git Stats</Heading>
                <Flex direction={{sm:"column",md:"column",lg:"row"}} justifyContent="space-around" >
                  <Image src="https://github-readme-stats.vercel.app/api?username=rohan28107&show_icons=true&locale=en" alt="rohan28107" />
                  <Image src="https://github-readme-streak-stats.herokuapp.com/?user=rohan28107&" alt="rohan28107" />
                </Flex>
              </Box>
          </Box>
        </ChakraBox>
    </Box>
  )
}

export default GitStats