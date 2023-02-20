import { Box, Heading, Image, shouldForwardProp, chakra, SimpleGrid, Grid  } from '@chakra-ui/react'
import React from 'react'
import amazonaws from "./Images/amazon-aws.png";
import chakraui from "./Images/ChakraUi.png";
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

const skillsData = [
    {
        id:1,
        skillName:"Javascript",
        img: javascript
    },
    {
        id:2,
        skillName:"React",
        img: react
    },
    {
        id:3,
        skillName:"HTML",
        img: html
    },
    {
        id:4,
        skillName:"CSS",
        img: css
    },
    {
        id:5,
        skillName:"ChakraUi",
        img: chakraui
    },
    {
        id:6,
        skillName:"Express",
        img: express
    },
    {
        id:7,
        skillName:"Typescript",
        img: typescript
    },
    {
        id:8,
        skillName:"Nodejs",
        img: nodejs
    },
    {
        id:9,
        skillName:"Redux",
        img: redux
    },
    {
        id:10,
        skillName:"MongoDB",
        img: mongodb
    },
    {
        id:11,
        skillName:"Git",
        img: git

    },
    {
        id:12,
        skillName:"AWS",
        img: amazonaws
    },
    {
        id:13,
        skillName:"Jest",
        img: jest
    },
    {
        id:14,
        skillName:"Github Actions",
        img: githubactions
    },
    {
        id:15,
        skillName:"NPM",
        img: npm
    }
]


const ChakraBox = chakra(motion.div, {
  /**
   * Allow motion props and non-Chakra props to be forwarded.
   */
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

const Skills = () => {
  return (
    <Box id="skills"height={["1000px","950px","750px"]} className={Styles.Skills} padding="10px">
        <ChakraBox
        initial={{ opacity: 0 }}
        whileInView={{ y: [-15, 0], opacity: 1 }}
        transition={{
          duration: 1,
          delay: 0.3,
        }}
        >
        <Heading as='h2' textAlign={"center"}  marginTop={"25px"}  marginBottom="5%" >Languages & Technologies</Heading>
        <SimpleGrid columns={[3, 4, 5]} width="100%" height={["850px","800px","500px"]} gap="30px" justifyContent={"center"}>
                 {
                    skillsData.map((skills) => (
                        <Grid textAlign="center" justifyContent="center" id={skills.id} >
                            {/* justifyContent={"center"}  alignItems="center" */}
                            <Image src={skills.img} alt='css' width={90} height={90} />
                            <Heading as='h5' fontSize={"xl"}>{skills.skillName}</Heading>
                        </Grid>
                    ))
                 }
        </SimpleGrid>
        </ChakraBox>
    </Box>
  )
}

export default Skills