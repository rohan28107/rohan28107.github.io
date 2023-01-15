import { Box, Heading, Image, shouldForwardProp, chakra, SimpleGrid  } from '@chakra-ui/react'
import React from 'react'
// import amazonaws from "../Files/Images/amazon-aws.png";
import amazonaws from "./Images/amazon-aws.png";
import chakras from "./Images/ChakraUi.png";
import css from "./Images/css.png";
import express from "./Images/express.png";
import git from "./Images/git.png";
import html from "./Images/html.png";
import javascript from "./Images/javascript.png";
import jest from "./Images/jest.png";
import mongodb from "./Images/mongodb.png";
import nodejs from "./Images/nodejs.png";
import react from "./Images/react.png";
import redux from "./Images/redux.png";
import typescript from "./Images/typescript.png";
import githubactions from "./Images/githubaction.png";
import npm from "./Images/npm.png";
import Styles from "./Skills.module.css";
import { motion, isValidMotionProp } from "framer-motion";

const ChakraBox = chakra(motion.div, {
  /**
   * Allow motion props and non-Chakra props to be forwarded.
   */
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

const Skills = () => {
  return (
    <div className={Styles.Skills}>
        <ChakraBox
        initial={{ opacity: 0 }}
        whileInView={{ y: [-15, 0], opacity: 1 }}
        transition={{
          duration: 1,
          delay: 0.3,
        }}
      >
        <Heading as='h2'>Languages & Technologies</Heading>
        <SimpleGrid columns={[3, null, 5]} spacing='25px'>
            <Box>
                <Image src={javascript} alt='javascript' width={90} height={90}/>
                <Heading as='h3'>JavaScript</Heading>
            </Box>
            <Box>
                <Image src={react} alt='react' width={90} height={90}/>
                <Heading as='h3'>React</Heading>
            </Box>
            <Box>
                <Image src={html} alt='html' width={90} height={90}/>
                <Heading as='h3'>HTML</Heading>
            </Box>
            <Box>
                <Image src={css} alt='css' width={90} height={90}/>
                <Heading as='h3'>CSS</Heading>
            </Box>
            <Box>
                <Image src={git} alt='git' width={90} height={90}/>
                <Heading as='h3'>Git</Heading>
            </Box>
            <Box>
                <Image src={express} alt='express' width={90} height={90}/>
                <Heading as='h3'>Express</Heading>
            </Box>
            <Box>
                <Image src={typescript} alt='typescript'width={90} height={90} />
                <Heading as='h3'>TypeScript</Heading>
            </Box>
            <Box>
                <Image src={nodejs} alt='nodejs' width={90} height={90}/>
                <Heading as='h3'>Nodejs</Heading>
            </Box>
            <Box>
                <Image src={chakras} alt='ChakraUi' width={90} height={90}/>
                <Heading as='h3'>ChakraUi</Heading>
            </Box>
            <Box>
                <Image src={mongodb} alt='mongodb' width={90} height={90}/>
                <Heading as='h3'>MongoDB</Heading>
            </Box>
            <Box>
                <Image src={redux} alt='redux' width={90} height={90}/>
                <Heading as='h3'>Redux</Heading>
            </Box>
            <Box>
                <Image src={amazonaws} alt='amazonaws' width={90} height={90}/>
                <Heading as='h3'>AWS</Heading>
            </Box>
            <Box>
                <Image src={jest} alt='jest' width={90} height={90}/>
                <Heading as='h3'>Jest</Heading>
            </Box>
            <Box>
                <Image src={githubactions} alt='githubactions' width={90} height={90} />
                <Heading as='h3'>Github Actions</Heading>
            </Box>
            <Box>
                <Image src={npm} alt='npm' width={90} height={90}/>
                <Heading as='h3'>NPM</Heading>
            </Box>            
        </SimpleGrid>
        </ChakraBox>
    </div>
  )
}

export default Skills