import { Box, Button, Center, Heading, Image, Link, SimpleGrid, Stack } from '@chakra-ui/react'
import React from 'react'
import {BsFileEarmarkPerson, BsGithub} from "react-icons/bs"
import Styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={Styles.home}>
      <SimpleGrid  columns={[2, null, 2]} spacing='40px' marginTop={20} height='500px' padding='10%'>
          <Box  height='auto' margin='auto'  padding='60px'>
          {/* padding='50px' size='4xl' border='1px solid red' */}
              <Heading as='h1' fontSize='9xl' >Hello 👋,<span > I'm Rohan Gajare </span> </Heading>
              {/* <Image src='https://media.tenor.com/2CC_MxnlCwEAAAAM/shake-hand.gif' alt='wave' height={50} width={60}/> */}
              <Heading as='h2' size='2xl'>Aspiring Full Stack Web Developer at Masai School, Life Long Learner.</Heading>
              
              <Center>
              <Stack direction='row' spacing={8} >
                <Link href='https://drive.google.com/file/d/1dW4RpRe9nvD8pbw7erbV9NUjNx1O0S-Z/view?usp=share_link' target='_blank' textDecoration='none' download>
                  <Button 
                    size='xlarge'
                    height='48px'
                    width='150px'
                    // border='3px' 
                    leftIcon={<BsFileEarmarkPerson />} 
                    bg='#234a84' 
                    // variant='outline' 
                    colorScheme='teal'
                    variant='outline'
                    fontSize='20px'
                    color='aliceblue;'
                    // textDecoration="none"
                  >
                    Resume
                  </Button>
                </Link>

                <Link href='https://github.com/rohan28107' target='_blank' textDecoration='none'>
                  <Button 
                    leftIcon={<BsGithub />} 
                    bg='#234a84' 
                    variant='solid'
                    size='xlarge'
                    height='48px'
                    width='150px'
                    fontSize='20px'
                    color='aliceblue;'
                    // border='3px' 
                  >
                    GitHub
                  </Button>
                </Link>
              </Stack>
              </Center>
          </Box>
          <Box  height='auto' alignItems='center' paddingTop='10%' >
            {/* border='1px solid red' paddingTop='30%'*/}
            {/* <Image 
            // https://www.alexanderkays.com/content/images/size/w2000/2022/06/how-to-become-a-software-engineer-without-a-degree.webp
                src='https://avatars.githubusercontent.com/u/112626910?v=4' 
                alt="Rohan"
                // width='60%'
                // height='60%'
                borderRadius='full'
                boxSize='150px'
            /> */}
            <Image
              borderRadius='250px'
              boxSize='350px'
              src='https://avatars.githubusercontent.com/u/112626910?v=4'
              alt='Rohan Gajare'
            />
          </Box>
          
      </SimpleGrid>
      </div>
  )
}

export default Home