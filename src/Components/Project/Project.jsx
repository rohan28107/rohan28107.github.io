import { Box, Button, chakra, Flex, Heading, Image, Link, shouldForwardProp, Text,} from '@chakra-ui/react'
import React from 'react'
import Styles from "./Project.module.css";
import desire from "./Images/desire_cart_page.png";
import first from "./Images/first_post_page.png";
import grow from "./Images/grow_smarter_page.png";
// import {BsLink45Deg } from 'react-icons/bs';
import { Fade } from "react-awesome-reveal";
import { BsGithub } from 'react-icons/bs';
import { SiChakraui, SiCss3, SiHtml5, SiJavascript, SiReact } from "react-icons/si"
import { FiExternalLink } from "react-icons/fi";
import { motion, isValidMotionProp } from "framer-motion";

const ChakraBox = chakra(motion.div, {
  /**
   * Allow motion props and non-Chakra props to be forwarded.
   */
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

const projectData = [
  { 
    id: 1,
    name: "Desire Cart",
    git_url: "https://github.com/rohan28107/efficient-wool-4085/tree/master/desire_cart",
    live_url: "https://desire-cart.vercel.app/",
    description: "Desire Cart is a E-commerce Website. Where users can browse various products. You can search various products also filter the products by category. Has Pagination with 10 products per page.It has Dark and light mode.",
    technologies: [<SiHtml5 />, <SiCss3 />, <SiJavascript />, <SiReact />, <SiChakraui />],
    image:desire
  },
  { 
    id: 2,
    name: "Grow Smarter",
    git_url: "https://github.com/HANUMAT-SHARAN/wicked-edge-6587",
    live_url: "https://dazzling-buttercream-31808d.netlify.app/index.html",
    description: "Grow Smarter is a SAAS company which provides various service. It has Customer support chat-box. Has pricing page with different pricing for different countries.",
    technologies: [<SiHtml5 />, <SiCss3 />, <SiJavascript />],
    icon1: SiJavascript,
    image:grow
  },
  { 
    id: 3,
    name: "First Post",
    git_url: "https://github.com/rohan28107/apathetic-bikes-8091",
    live_url: "https://zesty-cactus-26303e.netlify.app/",
    description: "First Post is a News website which gives update on latest news to users. Has different topics of news with each separate page. Has a carousel of images on Home page. Links to all the social media pages of First Post.",
    technologies: [<SiHtml5 />, <SiCss3 />, <SiJavascript />],
    image:first
  }
];


const Project = () => {

  return (
    <ChakraBox
        initial={{ opacity: 0 }}
        whileInView={{ y: [-15, 0], opacity: 1 }}
        transition={{
          duration: 1,
          delay: 0.3,
        }}
      >
    <div className={Styles.project}>
      
        <Box w="80%" margin={"auto"} p={7} h={{sm:"auto",md:"auto",lg:"auto"}} textAlign={{sm:"center",md:"center",lg:"initial"}}>
            <Heading as='h2' mt={{sm:"40px",md:"40px",lg:"30px"}}>Projects</Heading>
            <Heading as='h4'> My projects make use of a vast variety of latest technology tools. My best experience is to create React Project and JavaScript Projects. Below are some of my projects. All of the mentioned projects are on GitHub and have Live link.</Heading>
        
        <Fade direction='left' cascade >
        {
          projectData.map((project) => (
            
            <Box key={project.id} w="80%" margin={"auto"} marginBottom="5%" p={5} mt={{sm:"50px",md:"50px",lg:"40px"}} backgroundColor="#e2ebee" h="auto" border="1px solid black" borderRadius="15px">
                <Flex direction={{sm:"column",md:"column",lg:"row"}} justifyContent="space-evenly">

                 <Image width="70%" src={project.image} alt={project.name} />
                 <Box w={{sm:"90%",md:'90%',lg:'45%'}} padding="2%">
                    <Heading as="h2" mt={{sm:"10px",md:'10px',lg:'10px'}}>{project.name}</Heading>
                    <Text textStyle="AboutPara">{project.description}</Text>

                    <Flex justifyContent="space-evenly">
                      {project.technologies.map((language) => (
                        <Box>{language}</Box>
                      ))}
                    </Flex>

                    
                    <Flex justifyContent="space-around" mt="30px">
                      <Link href={project.live_url} target="_blank" textDecoration='none'>
                        <Button 
                          leftIcon={<FiExternalLink />} 
                          bg='#234a84' 
                          height='40px'
                          width='110px'
                          fontSize='20px'
                          color='black'
                          border='none' 
                          variant='outline'
                          // color='aliceblue'
                          padding='10px'
                        >
                          Demo
                        </Button>
                      </Link>
                      <Link href={project.git_url} target="_blank" textDecoration='none'>
                        <Button
                          leftIcon={<BsGithub />} 
                          bg='#234a84' 

                          height='40px'
                          width='110px'
                          fontSize='20px'
                          color='black'
                          border='none'  
                          // color='aliceblue'
                          variant='outline'
                          padding='20px'
                        >
                          GitHub
                        </Button>
                      </Link>
                    </Flex>
                 </Box>
                </Flex>
            </Box>
            
          ))
        }
        </Fade>
        </Box>
        
    </div>
    </ChakraBox>
  )
}

// const Project = () => {

//   return (
//     <div className={Styles.project}>
//         <Heading as='h1'>Projects</Heading>
//         <Heading as='h3'>
//           My projects make use of a vast variety of latest technology tools. My best experience is to create React Project and JavaScript Projects. Below are some of my projects. All of the mentioned projects are on GitHub and have Live link.
//         </Heading>
//         <SimpleGrid columns={[2, null, 1]} spacing='40px'>
//           {projectData.map((project) => (
//             <Flex key={project.id} height='600px'>
//               <Box>
//                 <Image src={project.image} alt={project.name} width="90%" height='80%'/>
//               </Box>
//               <Box alignItems='center'>
//                 <Heading as='h2'>{project.name}</Heading>
//                 <Text>{project.description}</Text>
//                 <Text>{project.technologies}</Text>
//                 {/* <Stack direction='row' spacing={8} >
//                   <Link to={project.git_url} target='_blank' textDecoration='none'>
//                       <Button
//                         leftIcon={<BsGithub />} 
//                         bg='#234a84' 
//                         variant='solid'
//                         size='xlarge'
//                         height='48px'
//                         width='150px'
//                         fontSize='20px'
//                         color='aliceblue;'
//                         // border='3px' 
//                       >
//                         GitHub
//                       </Button>
//                     </Link>
//                     <Link to={project.live_url} target='_blank' textDecoration='none'>
//                       <Button 
//                         leftIcon={<BsLink45Deg />} 
//                         bg='#234a84' 
//                         variant='solid'
//                         size='xlarge'
//                         height='48px'
//                         width='150px'
//                         fontSize='20px'
//                         color='aliceblue;'
//                         // border='3px' 
//                       >
//                         Demo
//                       </Button>
//                     </Link>
//                 </Stack> */}
               
//               </Box>
//             </Flex>
//           ))}  
//         </SimpleGrid>
//     </div>
//   )
// }

export default Project

