import { Box, Button, Center, Heading, Image, Link, SimpleGrid, Stack } from '@chakra-ui/react'
import React from 'react'
import {BsFileEarmarkPerson, BsGithub} from "react-icons/bs"

const Home = () => {
  return (
    <SimpleGrid columns={[2, null, 2]} spacing='40px' marginTop={30} height='450px'>
        <Box border='1px solid red' height='auto' margin='auto'  padding='60px'>
        {/* padding='50px' size='4xl' */}
            <Heading as='h1' fontSize='9xl' >Hello 👋,<span > I'm Rohan Gajare </span> </Heading>
            {/* <Image src='https://media.tenor.com/2CC_MxnlCwEAAAAM/shake-hand.gif' alt='wave' height={50} width={60}/> */}
            <Heading as='h2' size='3xl'>Aspiring Full Stack Web Developer at Masai School, Life Long Learner.</Heading>
            
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
                  // border='3px' 
                >
                  GitHub
                </Button>
              </Link>
            </Stack>
            </Center>
        </Box>
        <Box border='1px solid red' height='auto' alignItems='center' paddingTop='15%'>
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
            borderRadius='150px'
            boxSize='250px'
            src='https://avatars.githubusercontent.com/u/112626910?v=4'
            alt='Rohan Gajare'
          />
        </Box>
        
    </SimpleGrid>
  )
}

export default Home