// // // import { ReactNode } from 'react';
// // import { useColorMode } from '@chakra-ui/color-mode';
// import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
// import {
//   Box,
//   Flex,
//   HStack,
//   Link,
//   IconButton,
// //   Button,
//   useColorModeValue,
// //   ButtonProps,
//   useDisclosure,
// } from '@chakra-ui/react';
// // import { BsSun, BsMoonStarsFill } from 'react-icons/bs';

// // import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

// const Links = ['About Me', 'Skills', 'Projects', 'Contact', 'Resume'];

// const NavLink = ({ children }) => (
//   <Link
//     px={2}
//     py={1}
//     rounded={'md'}
//     _hover={{
//       textDecoration: 'none',
//       bg: useColorModeValue('gray.200', 'gray.700'),
//     }}
//     href={'#'}>
//     {children}
//   </Link>
// );

// export default function Navbar() {
//     // const { colorMode, toggleColorMode } = useColorMode();
//   const { isOpen, onOpen, onClose } = useDisclosure();
// //   
//   return (
//     <>
//       <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} >
//         <Flex h={16} alignItems={'center'} justifyContent={'space-between'} margin="20px">
//             <Box>Rohan Gajare</Box>
//           <HStack spacing={8} alignItems={'center'}>
            
//             <Box>
//                 <IconButton
//                     size={"md"}
//                     icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
//                     aria-label={"Open Menu"}
//                     display={["inherit", "inherit", "none"]}
//                     onClick={isOpen ? onClose : onOpen}
//                 />
//                 <HStack
//                 as={'nav'}
//                 spacing={4}
//                 display={{ base: 'none', md: 'flex' }}>
//                 {Links.map((link) => (
//                     <NavLink key={link}>{link}</NavLink>
//                 ))}
//                 </HStack>
//             </Box>
            
//           </HStack>
//         </Flex>

//         {/* {isOpen ? (
//           <Box pb={4} display={{ md: 'none' }}>
//             <Stack as={'nav'} spacing={4}>
//               {Links.map((link) => (
//                 <NavLink key={link}>{link}</NavLink>
//               ))}
//             </Stack>
//           </Box>
//         ) : null} */}
//       </Box>
//     </>
//   );
// }

// // import { ReactNode } from 'react';
// // import {
// //   Box,
// //   Flex,

// //   HStack,
// //   Link,
// //   IconButton,
// //   useDisclosure,
// //   useColorModeValue,
// // } from '@chakra-ui/react';
// // import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

// // const Links = ['Dashboard', 'Projects', 'Team'];

// // const NavLink = ({ children }) => (
// //   <Link
// //     px={2}
// //     py={1}
// //     rounded={'md'}
// //     _hover={{
// //       textDecoration: 'none',
// //       bg: useColorModeValue('gray.200', 'gray.700'),
// //     }}
// //     href={'#'}>
// //     {children}
// //   </Link>
// // );

// // export default function Navbar() {
// //   const { isOpen, onOpen, onClose } = useDisclosure();

// //   return (
// //     <>
// //       <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
// //         <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
// //           <IconButton
// //             size={'md'}
// //             icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
// //             aria-label={'Open Menu'}
// //             display={{ md: 'none' }}
// //             onClick={isOpen ? onClose : onOpen}
// //           />
// //           <HStack spacing={8} alignItems={'center'}>
// //             <Box>Logo</Box>
// //             <HStack
// //               as={'nav'}
// //               spacing={4}
// //               display={{ base: 'none', md: 'flex' }}>
// //               {Links.map((link) => (
// //                 <NavLink key={link}>{link}</NavLink>
// //               ))}
// //             </HStack>
// //           </HStack>
          
// //         </Flex>

// //         {/* {isOpen ? (
// //           <Box pb={4} display={{ md: 'none' }}>
// //             <Stack as={'nav'} spacing={4}>
// //               {Links.map((link) => (
// //                 <NavLink key={link}>{link}</NavLink>
// //               ))}
// //             </Stack>
// //           </Box>
// //         ) : null} */}
// //       </Box>

// //       <Box p={4}>Main Content Here</Box>
// //     </>
// //   );
// // }


import React from 'react'
import {Box, Flex,ListItem,Text, UnorderedList} from "@chakra-ui/react";
import Styles from "./Navbar.module.css";
//import About from '../ABOUT/About';
import {Link} from "react-scroll"


const Navbar = () => {
    
  return (
    <div className={Styles.navbar}>
        <Box width="100%" h={{sm:"40px",md:"50px",lg:"70px"}} bgColor="#234a84" p={3} >
            <Flex justifyContent="space-between">
                <Box p={{sm:2,md:2,lg:2}} w={{sm:"40%",md:"30%",lg:"13%"}}>
                    <Flex justifyContent="space-around">
                      <Text textStyle="Firsthead">Rohan Gajare</Text> 
                      {/* <Text textStyle="Secondhead">Gajare</Text>  */}
                    </Flex>
                </Box>
                <Box  w={{sm:"70%",md:"60%",lg:"50%"}} h={{sm:"50%",md:"60%",lg:"70%"}}>
                    <UnorderedList listStyleType="none">
                        <Flex justifyContent="space-around" alignItems={"center"}>

                        <Link to="home" activeClass="active" spy={true} smooth={true} offset={-100} duration={200} >
                            <ListItem textStyle="Navbar" p="12px" _hover={{backgroundColor: "#fafcf9",borderRadius:"10px",color:"black"}}>HOME</ListItem>
                        </Link>
                        
                        <Link to="about" activeClass="active" spy={true} smooth={true} offset={-100} duration={500} >
                            <ListItem textStyle="Navbar" p="12px" _hover={{backgroundColor: "#fafcf9",borderRadius:"10px",color:"black"}}>ABOUT</ListItem>
                        </Link>

                        <Link to="projects" spy={true} smooth={true} offset={-100} duration={500} >
                            <ListItem textStyle="Navbar" p="12px" _hover={{backgroundColor: "#fafcf9",borderRadius:"10px",color:"black"}}>PROJECTS</ListItem>
                        </Link>

                        <Link to="skills" spy={true} smooth={true} offset={-100} duration={500} >
                            <ListItem textStyle="Navbar" p="12px" _hover={{backgroundColor: "#fafcf9",borderRadius:"10px",color:"black"}}>SKILLS</ListItem>
                        </Link>

                        <Link to="contact" spy={true} smooth={true} offset={-100} duration={500} >
                            <ListItem textStyle="Navbar" p="12px" _hover={{backgroundColor: "#fafcf9",borderRadius:"10px",color:"black"}}>CONTACTS</ListItem>
                        </Link>

                        <ListItem textStyle="Navbar" p="12px" _hover={{backgroundColor: "#fafcf9",borderRadius:"10px",color:"black"}}>RESUME</ListItem>
                        
                        </Flex>
                    </UnorderedList>

                </Box>
            </Flex>
        </Box>
    </div>
  )
}

export default Navbar

