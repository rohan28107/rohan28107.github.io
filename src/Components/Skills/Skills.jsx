import {
  Box,
  Heading,
  Image,
  shouldForwardProp,
  chakra,
  SimpleGrid,
  Grid,
  Flex,
} from "@chakra-ui/react";
import React from "react";
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
import github from "./Images/github.png";
import vscode from "./Images/vscode.png";
import netlify from "./Images/netlify.png";
import bycryt from "./Images/bycryt.png";
import swagger from "./Images/swagger.png";
import cypress from "./Images/cypress.jfif";
import jwt from "./Images/jwt3.png";
import postman from "./Images/postman.png";
import vercel from "./Images/vercel.png";

import Styles from "./Skills.module.css";
import { motion, isValidMotionProp } from "framer-motion";

const FrontEnd = [
  {
    id: 1,
    skillName: "Javascript",
    img: javascript,
  },
  {
    id: 2,
    skillName: "React",
    img: react,
  },
  {
    id: 3,
    skillName: "HTML",
    img: html,
  },
  {
    id: 4,
    skillName: "CSS",
    img: css,
  },
  {
    id: 5,
    skillName: "ChakraUi",
    img: chakraui,
  },
  {
    id: 6,
    skillName: "Redux",
    img: redux,
  },
  {
    id: 7,
    skillName: "Jest",
    img: jest,
  },
  {
    id: 8,
    skillName: "Cypress",
    img: cypress,
  },
];

const Backend = [
  {
    id: 6,
    skillName: "Nodejs",
    img: nodejs,
  },
  {
    id: 8,
    skillName: "Express",
    img: express,
  },
  {
    id: 9,
    skillName: "MongoDB",
    img: mongodb,
  },
  {
    id: 7,
    skillName: "Typescript",
    img: typescript,
  },
  {
    id: 10,
    skillName: "Bycryt",
    img: bycryt,
  },
  {
    id: 15,
    skillName: "NPM",
    img: npm,
  },
  {
    id: 11,
    skillName: "JWT",
    img: jwt,
  },
  {
    id: 11,
    skillName: "Swagger",
    img: swagger,
  },
];

const tools = [
  {
    id: 11,
    skillName: "Git",
    img: git,
  },
  {
    id: 12,
    skillName: "AWS",
    img: amazonaws,
  },
  {
    id: 13,
    skillName: "Vscode",
    img: vscode,
  },
  {
    id: 16,
    skillName: "Github",
    img: github,
  },
  {
    id: 19,
    skillName: "Postman",
    img: postman,
  },
  {
    id: 14,
    skillName: "Github Actions",
    img: githubactions,
  },
  {
    id: 20,
    skillName: "Vercel",
    img: vercel,
  },
  {
    id: 18,
    skillName: "Netlify",
    img: netlify,
  },
];

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

const Skills = () => {
  return (
    <Box
      id="skills"
      height={["1250px", "1200px", "1200px", "750px"]}
      className={Styles.Skills}
      padding="10px"
    >
      <ChakraBox
        initial={{ opacity: 0 }}
        whileInView={{ y: [-15, 0], opacity: 1 }}
        transition={{
          duration: 1,
          delay: 0.3,
        }}
      >
        <Heading
          as="h2"
          textAlign={"center"}
          marginTop={"25px"}
          marginBottom="3%"
        >
          Languages & Technologies
        </Heading>
        <SimpleGrid
          columns={[1, 2, 2, 3]}
          width="100%"
          height={["850px", "800px", "500px"]}
          gap={["10px", "20px", "30px"]}
          justifyContent={"center"}
        >
          <Box
            textAlign={"center"}
            border="1px solid black"
            borderRadius="15px"
            padding={"15px"}
          >
            <Heading as="h2" fontSize={["md", "2xl"]} marginBottom={"20px"}>
              FrontEnd
            </Heading>
            <SimpleGrid columns={3} gap="40px" textAlign={"center"}>
              {FrontEnd.map((skills) => (
                <Grid textAlign="center" justifyContent="center" id={skills.id}>
                  <Image
                    src={skills.img}
                    alt="css"
                    width={["40px", "50px", "90px"]}
                    height={["40px", "50px", "90px"]}
                  />
                  <Heading as="h5" fontSize={["sm", "lg", "xl"]}>
                    {skills.skillName}
                  </Heading>
                </Grid>
              ))}
            </SimpleGrid>
          </Box>
          <Box
            textAlign={"center"}
            border="1px solid black"
            borderRadius="15px"
            padding={"15px"}
          >
            <Heading as="h2" fontSize={["md", "2xl"]} marginBottom={"20px"}>
              BackEnd
            </Heading>
            <SimpleGrid columns={3} gap="40px">
              {Backend.map((skills) => (
                <Grid textAlign="center" justifyContent="center" id={skills.id}>
                  <Image
                    src={skills.img}
                    alt="css"
                    width={["40px", "60px", "90px"]}
                    height={["40px", "60px", "90px"]}
                  />
                  <Heading as="h5" fontSize={["sm", "lg", "xl"]}>
                    {skills.skillName}
                  </Heading>
                </Grid>
              ))}
            </SimpleGrid>
          </Box>
          <Box
            textAlign={"center"}
            border="1px solid black"
            borderRadius="15px"
            padding={"15px"}
          >
            <Heading as="h2" fontSize={["md", "2xl"]} marginBottom={"20px"}>
              Tools
            </Heading>
            <SimpleGrid columns={3} gap="40px">
              {tools.map((skills) => (
                <Grid textAlign="center" justifyContent="center" id={skills.id}>
                  <Image
                    src={skills.img}
                    alt="css"
                    width={["40px", "60px", "90px"]}
                    height={["40px", "60px", "90px"]}
                  />
                  <Heading as="h5" fontSize={["sm", "lg", "xl"]}>
                    {skills.skillName}
                  </Heading>
                </Grid>
              ))}
            </SimpleGrid>
          </Box>
        </SimpleGrid>
      </ChakraBox>
    </Box>
  );
};

export default Skills;
