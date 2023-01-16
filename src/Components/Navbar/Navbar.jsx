import React from 'react'
import {Box, Flex,Image,ListItem, UnorderedList} from "@chakra-ui/react";
import Styles from "./Navbar.module.css";
import Resume from "./Rohan_Gajare_Resume.pdf";
// import {Link as RouterLink } from "react-router-dom";
import {Link} from 'react-scroll';
import Rohan from "./Rohan.png";




const Navbar = () => {
    
    const handleDownloadNewPageResume = () => {
        const newWindow = window.open(Resume, "_blank", "noopener,noreferrer");
        if (newWindow) newWindow.opener = null;
      };
  return (
    <div className={Styles.navbar}>
        <Box width="100%" h={{sm:"40px",md:"50px",lg:"70px"}} bgColor="#234a84" p={3} >
            <Flex justifyContent="space-between">
                {/* <Box p={{sm:2,md:2,lg:2}} w={{sm:"40%",md:"10%",lg:"10%"}} border="1px solid red"> */}

                      <Image src={Rohan} alt="Rohan Gajare" width='6%' height="20%" marginLeft='20px'/>

                {/* </Box> */}
                <Box  w={{sm:"70%",md:"60%",lg:"50%"}} h={{sm:"50%",md:"60%",lg:"70%"}} marginRight="20px">
                    <UnorderedList listStyleType="none">
                        <Flex justifyContent="space-around" alignItems={"center"}>

                        <Link to="home"  smooth duration={500} activeClass="active" spy={true} offset={-100} >
                            <ListItem textStyle="Navbar" p="12px" _hover={{backgroundColor: "#fafcf9",borderRadius:"10px",color:"black"}}>HOME</ListItem>
                        </Link>
                        
                        <Link to="about" smooth duration={500} activeClass="active"  offset={-100}  >
                            <ListItem textStyle="Navbar" p="12px" _hover={{backgroundColor: "#fafcf9",borderRadius:"10px",color:"black"}}>ABOUT</ListItem>
                        </Link>

                        <Link to="projects" smooth duration={500}  spy={true} offset={-100} >
                            <ListItem textStyle="Navbar" p="12px" _hover={{backgroundColor: "#fafcf9",borderRadius:"10px",color:"black"}}>PROJECTS</ListItem>
                        </Link>

                        {/* <Link to="skills" spy={true} offset={-100} smooth duration={500}>
                            <ListItem textStyle="Navbar" p="12px" _hover={{backgroundColor: "#fafcf9",borderRadius:"10px",color:"black"}}>SKILLS</ListItem>
                        </Link> */}

                        <Link to="skills" spy={true} offset={-100} smooth duration={500}>
                            <ListItem textStyle="Navbar" p="12px" _hover={{backgroundColor: "#fafcf9",borderRadius:"10px",color:"black"}}>SKILLS</ListItem>
                        </Link>

                        <Link to="contact" spy={true} offset={-100} smooth duration={500}>
                            <ListItem textStyle="Navbar" p="12px" _hover={{backgroundColor: "#fafcf9",borderRadius:"10px",color:"black"}}>CONTACTS</ListItem>
                        </Link>
                        
                        <Link
                            onClick={handleDownloadNewPageResume}
                            to={Resume}
                            target="_blank"
                            download
                            cursor="pointer"
                        >
                        
                        <ListItem textStyle="Navbar" p="12px" _hover={{backgroundColor: "#fafcf9",borderRadius:"10px",color:"black"}}>RESUME</ListItem>
                        </Link>
                        </Flex>
                    </UnorderedList>

                </Box>
            </Flex>
        </Box>
    </div>
  )
}

export default Navbar

