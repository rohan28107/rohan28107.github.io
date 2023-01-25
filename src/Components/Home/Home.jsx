import { Box, Button, Center, chakra, Heading, Image, Link, shouldForwardProp, SimpleGrid, Stack, VStack } from '@chakra-ui/react'
import React from 'react'
import { BsGithub } from "react-icons/bs"
import Resume from "../../Files/Rohan_Gajare_Resume.pdf";
import Styles from "./Home.module.css";
import { motion, isValidMotionProp } from "framer-motion";
import { AiOutlineFilePdf } from 'react-icons/ai';

const ChakraBox = chakra(motion.div, {
  /**
   * Allow motion props and non-Chakra props to be forwarded.
   */
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});
const Home = () => {

  const handleDownloadNewPageResume = () => {
    const newWindow = window.open("https://drive.google.com/file/d/1dW4RpRe9nvD8pbw7erbV9NUjNx1O0S-Z/view?usp=share_link", "_blank", "noopener,noreferrer");

    if (newWindow) newWindow.opener = null;

    fetch(Resume).then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'Rohan_Gajare_Resume.pdf';
          alink.click();
      })
  })
  };


  return (
    <Box id="home" className={Styles.home} width="100%" height={["1000px","700px"]} paddingTop="250px">
      {/*   */}
        <ChakraBox
          initial={{ opacity: 0 }}
          whileInView={{ y: [-15, 0], opacity: 1 }}
          transition={{
            duration: 1,
            delay: 0.3,
          }}
        >
          <SimpleGrid  columns={[1, 2, 2]} gap="20" >
          {/* padding='20%'  */}
              <VStack height='100%' width="100%" margin='auto' spacing={10} w={"90%"}>
              {/* padding='50px' size='4xl' border='1px solid red' */}
                  <Heading as='h1' fontSize='4xl' >Hello 👋,<span > I'm Rohan Gajare </span> </Heading>
                  {/* <Image src='https://media.tenor.com/2CC_MxnlCwEAAAAM/shake-hand.gif' alt='wave' height={50} width={60}/> */}
                  <Heading as='h4' size='sm'>Aspiring Full Stack Web Developer at Masai School, Life Long Learner.</Heading>
                  
                  <Center>
                  <Stack direction='row' spacing={8} >
                    {/* <Link href='https://drive.google.com/file/d/1dW4RpRe9nvD8pbw7erbV9NUjNx1O0S-Z/view?usp=share_link' target='_blank' textDecoration='none' download>
                      <Button 
                        size={['sm','md','xl']}
                        height='48px'
                        width='150px'
                        border='none' 
                        leftIcon={<BsFileEarmarkPerson />} 
                        bg='#234a84' 
                        // variant='outline' 
                        colorScheme='teal'
                        variant='outline'
                        fontSize='20px'
                        // color='aliceblue'
                        color='black'
                        // textDecoration="none"
                      >
                        Resume
                      </Button>
                    </Link> */}

                    <Link
                        onClick={handleDownloadNewPageResume}
                        to="https://drive.google.com/file/d/1dW4RpRe9nvD8pbw7erbV9NUjNx1O0S-Z/view?usp=share_link"
                        target="_blank"
                        download
                        cursor="pointer"
                    >
                      <Button
                        // colorScheme={'teal'}
                        bg='#234a84'
                        mr={4}
                        variant='solid'
                        size={['sm','md','xl']}
                        height='48px'
                        width='150px'
                        fontSize='20px'
                        // color='aliceblue;'
                        color='black'
                        border='none'
                        leftIcon={<AiOutlineFilePdf  />}
                      >
                        Resume
                      </Button>
                    </Link> 

                    <Link href='https://github.com/rohan28107' target='_blank' textDecoration='none'>
                      <Button 
                        leftIcon={<BsGithub />} 
                        bg='#234a84' 
                        variant='solid'
                        size={['sm','md','xl']}
                        height='48px'
                        width='150px'
                        fontSize='20px'
                        // color='aliceblue;'
                        color='black'
                        border='none' 
                      >
                        GitHub
                      </Button>
                    </Link>
                  </Stack>
                  </Center>
              </VStack>
              <Box  alignItems='center' w={"90%"}>
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
                  // src='https://avatars.githubusercontent.com/u/112626910?v=4'
                  src='https://avatars.githubusercontent.com/u/112626910?v=4'
                  alt='Rohan Gajare'
                />
              </Box>
              
          </SimpleGrid>
        </ChakraBox>
      </Box>
  )
}

export default Home