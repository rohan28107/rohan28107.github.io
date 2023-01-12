import { Box, Flex, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import Styles from "./Project.module.css";
import desire from "./Images/desire_cart_page.png";
import first from "./Images/first_post_page.png";
import grow from "./Images/grow_smarter_page.png";
// import { Link } from 'react-router-dom';
// import { BsGithub, BsLink45Deg } from 'react-icons/bs';


const projectData = [
  { 
    id: 1,
    name: "Desire Cart",
    git_url: "https://github.com/HANUMAT-SHARAN/wicked-edge-6587",
    live_url: "https://dazzling-buttercream-31808d.netlify.app/index.html",
    description: "lorem Ipsum is simply",
    technologies: ["html", "javasccript", "css"],
    image:desire
  },
  { 
    id: 2,
    name: "First Post",
    git_url: "https://github.com/HANUMAT-SHARAN/wicked-edge-6587",
    live_url: "https://dazzling-buttercream-31808d.netlify.app/index.html",
    description: "lorem Ipsum is simply",
    technologies: ["html", "javasccript", "css"],
    image:first
  },
  { 
    id: 3,
    name: "Grow Smarter",
    git_url: "https://github.com/HANUMAT-SHARAN/wicked-edge-6587",
    live_url: "https://dazzling-buttercream-31808d.netlify.app/index.html",
    description: "lorem Ipsum is simply",
    technologies: ["html", "javasccript", "css"],
    image:grow
  }
]

const Project = () => {

  return (
    <div className={Styles.project}>
        <Heading as='h1'>Projects</Heading>
        <Heading as='h3'>
          My projects make use of a vast variety of latest technology tools. My best experience is to create React Project and JavaScript Projects. Below are some of my projects. All of the mentioned projects are on GitHub and have Live link.
        </Heading>
        <SimpleGrid columns={[2, null, 1]} spacing='40px'>
          {projectData.map((project) => (
            <Flex key={project.id} height='600px'>
              <Box>
                <Image src={project.image} alt={project.name} width="90%" height='80%'/>
              </Box>
              <Box alignItems='center'>
                <Heading as='h2'>{project.name}</Heading>
                <Text>{project.description}</Text>
                <Text>{project.technologies}</Text>
                {/* <Stack direction='row' spacing={8} >
                  <Link to={project.git_url} target='_blank' textDecoration='none'>
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
                    <Link to={project.live_url} target='_blank' textDecoration='none'>
                      <Button 
                        leftIcon={<BsLink45Deg />} 
                        bg='#234a84' 
                        variant='solid'
                        size='xlarge'
                        height='48px'
                        width='150px'
                        fontSize='20px'
                        color='aliceblue;'
                        // border='3px' 
                      >
                        Demo
                      </Button>
                    </Link>
                </Stack> */}
               
              </Box>
            </Flex>
          ))}  
        </SimpleGrid>
    </div>
  )
}

export default Project