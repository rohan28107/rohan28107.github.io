import { Box, Heading, Image, SimpleGrid  } from '@chakra-ui/react'
import React from 'react'
import amazonaws from "../Files/Images/amazon-aws.png";
import chakra from "../Files/Images/ChakraUi.png";
import css from "../Files/Images/css.png";
import express from "../Files/Images/express.png";
import github from "../Files/Images/github.png";
import html from "../Files/Images/html.png";
import javascript from "../Files/Images/javascript.png";
import jest from "../Files/Images/jest.png";
import mongodb from "../Files/Images/mongodb.png";
import nodejs from "../Files/Images/nodejs.png";
import react from "../Files/Images/react.png";
import redux from "../Files/Images/redux.png";
import typescript from "../Files/Images/typescript.png";
import githubactions from "../Files/Images/githubaction.png";
import npm from "../Files/Images/npm.png";

const Skills = () => {
  return (
    <div>
        <Heading as='h2'>Skills</Heading>
        <SimpleGrid columns={[3, null, 5]} spacing='40px'>
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
                <Image src={github} alt='github' width={90} height={90}/>
                <Heading as='h3'>Github</Heading>
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
                <Image src={chakra} alt='ChakraUi' width={90} height={90}/>
                <Heading as='h3'>ChakraUi</Heading>
            </Box>
            <Box>
                <Image src={mongodb} alt='mongodb' width={90} height={90}/>
                <Heading as='h3'>Mongodb</Heading>
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
        
    </div>
  )
}

export default Skills