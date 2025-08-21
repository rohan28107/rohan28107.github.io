import { Box, chakra, Flex, Heading, Image, shouldForwardProp } from '@chakra-ui/react';
import React from 'react'
import GitHubCalendar from 'react-github-calendar';
import Styles from "./GitStats.module.css";
import { motion, isValidMotionProp } from "framer-motion";

const ChakraBox = chakra(motion.div, {
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
          <Box w={["100%","80%"]}  margin={"auto"} p={7} h={{sm:"auto",md:"auto",lg:"auto"}} gap="30px" textAlign="center">
              <Heading as='h2' size={["sm", "lg"]} textStyle="AboutHead" >Github Calendar & Stats</Heading>
              <Box w={["100%","90%","70%"]} margin={"auto"} marginBottom='2%' p={5} padding={['10px','20px']} marginTop={"20px"}  h="auto" border="1px solid black" borderRadius="15px">
                <Heading as='h3' size={["sm", "md"]} textStyle="AboutSubHead" >Git Calendar</Heading>
                <GitHubCalendar w={["60%","90%","70%"]} marginTop="10px" username="rohan28107" />
              </Box>

              <Box w="90%" margin={"auto"} p={5}  h="auto" border="1px solid black" borderRadius="15px">
                <Heading as='h3' size={["sm", "md"]} textStyle="AboutSubHead" >Git Stats</Heading>
                <Flex direction={{base:"column", sm:"column",md:"column",lg:"row"}} marginTop="10px" justifyContent="space-around" gap="10px">
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