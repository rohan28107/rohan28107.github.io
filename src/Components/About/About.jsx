import { Box, Heading, Image, ListItem, SimpleGrid, Spacer, UnorderedList, chakra, shouldForwardProp } from '@chakra-ui/react'
import React from 'react'
import Styles from "./About.module.css";
import { motion, isValidMotionProp } from "framer-motion";

const ChakraBox = chakra(motion.div, {
  /**
   * Allow motion props and non-Chakra props to be forwarded.
   */
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

const About = () => {
  return (
    <Box id="about" className={Styles.about} width="100%" height={["750px","900px","700px"]} >
      <ChakraBox
        initial={{ opacity: 0 }}
        whileInView={{ y: [-15, 0], opacity: 1 }}
        transition={{
          duration: 1,
          delay: 0.3,
        }}
      >
          <SimpleGrid columns={[1, null, 2]} spacing='30px' height="380px" padding='10%'>
              <Box > 
                {/* border='1px solid red' */}
              <Image
            // https://www.alexanderkays.com/content/images/size/w2000/2022/06/how-to-become-a-software-engineer-without-a-degree.webp
                src='https://performetris.com/wp-content/uploads/performetris-banner.png' 
                alt="SVG"
                width='100%'
                height='90%'
            />
              </Box>
              <Box  padding={"10px"} fontSize={["md", "xl"]}>
                {/* border='1px solid red' */}
                  <Heading as='h2' marginBottom={"10px"} >About Me ✍</Heading>
                  <UnorderedList textAlign='left'>
                      <ListItem >I am a passionate web developer who loves to solve real life problems & learn new things specially related to web development </ListItem>
                      <Spacer />
                      <ListItem>I'm skilled in both Frontend & Backend technologies with immense desire & motivation to work & excel as Full Stack web developer.</ListItem>
                      <Spacer />
                      <ListItem>Building responsive Front-End website using ReactJS</ListItem>
                      <Spacer />
                      <ListItem>I love to play Football</ListItem>
                  </UnorderedList>
              </Box>
          </SimpleGrid>
        </ChakraBox>
       
    </Box>
  )
}

export default About