import { Box, Heading, Image, ListItem, SimpleGrid, Spacer, UnorderedList } from '@chakra-ui/react'
import React from 'react'
import Styles from "./About.module.css";

const About = () => {
  return (
    <div className={Styles.about} >
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
            <Box  padding={50}>
              {/* border='1px solid red' */}
                <Heading as='h2' >About Me ✍</Heading>
                <UnorderedList textAlign='left'>
                    <ListItem>I am a passionate web developer who loves to solve real life problems & I love to learn new things specially related to web development </ListItem>
                    <Spacer />
                    <ListItem>I'm skilled in both Frontend & Backend technologies with immense desire & motivation to work & excel as Full Stack web developer.</ListItem>
                    <Spacer />
                    <ListItem>Building responsive website front end using ReactJS</ListItem>
                    <Spacer />
                    <ListItem>I love to play Football</ListItem>
                </UnorderedList>
            </Box>
        </SimpleGrid>
       
    </div>
  )
}

export default About