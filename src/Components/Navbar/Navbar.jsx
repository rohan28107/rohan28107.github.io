// import React, { useState } from 'react'
// import {FaBars , FaTimes} from "react-icons/fa"
// import {Link} from 'react-scroll'

// const Navbar = () => {
//     const [nav,setNav] = useState(false)


//     const links = [
//         {
//             id :1,
//             link : "home"
//         },
//         {
//             id :2,
//             link : "about"
//         },
//         {
//             id :3,
//             link : "skills"
//         },
//         {
//             id :4,
//             link : "projects"
//         },
//         {
//             id :5,
//             link : "contact"
//         },
        
//     ]


//   return (
//     <div className='flex justify-between items-center w-full h-20 text-white bg-black px-4 fixed'>
//         <div>
//             <h1 className='text-5xl font-signature ml-2'><Link to="/Home" smooth duration={500}>Revati</Link></h1>
//         </div>

//         <ul className='hidden md:flex'>
//            {
//            links.map(({link , id}) => (
//                 <li key={id} className='px-4 cursor-pointer capitalize font-medium text-grey-500 hover:scale-110 duration-200'><Link to={link} smooth duration={500}>{link}</Link></li>
//            ))
//            }

//         </ul>

//         <div onClick={()=> setNav(!nav)} className="cursor-pointer pr-4 z-10 text-grey-500 md:hidden">
//            {nav ? <FaTimes size={30}/> :  <FaBars size={30}/>}
//         </div>


//         {nav && (
//                <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-grey-800 text-grey-500">

//                {
//                   links.map(({link , id}) => (
//                        <li key={id} className="px-4 cursor-pointer capitalize py-6 text-4xl"><Link to={link} smooth duration={500}>{link}</Link></li>
//                   ))
//                   }
       
//                </ul>
//         )}

        
        
//     </div>
//   )
// }

// export default Navbar



// // import { ReactNode } from 'react';
// import {
//   Box,
//   Flex,
//   HStack,
//   IconButton,
//   useDisclosure,
//   useColorModeValue,
//   Image,
// //   UnorderedList,
//   ListItem,
//   Link
// } from '@chakra-ui/react';
// import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
// import Styles from "./Navbar.module.css";
// import Resume from "./Rohan_Gajare_Resume.pdf";
// import Rohan from "./Rohan.png";
// // import { Link } from 'react-router-dom';
// // import {Link} from 'react-scroll';


// // const links = [
// //     {
// //         id :1,
// //         link : "home"
// //     },
// //     {
// //         id :2,
// //         link : "about"
// //     },
// //     {
// //         id :3,
// //         link : "skills"
// //     },
// //     {
// //         id :4,
// //         link : "projects"
// //     },
// //     {
// //         id :5,
// //         link : "contact"
// //     },
    
// // ]

// // const NavLink = ({ children }) => (
// //   <Link
// //     px={2}
// //     py={1}
// //     rounded={'md'}
// //     _hover={{
// //       textDecoration: 'none',
// //       bg: useColorModeValue('gray.200', 'gray.700'),
// //     }}
// //     to={children}>
// //     {children}
// //   </Link>
// // );

// export default function Navbar() {
//   const { isOpen, onOpen, onClose } = useDisclosure();

//   return (
//     <>
//       <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} style={Styles.navbar}>
//         <Flex h={50} alignItems={'center'} justifyContent={'space-between'}>
//           <IconButton
//             size={'md'}
//             icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
//             aria-label={'Open Menu'}
//             display={{ md: 'none' }}
//             onClick={isOpen ? onClose : onOpen}
//           />
//           <HStack spacing={8} alignItems={'center'}>
//             <Box><Image src={Rohan} alt={Rohan} width='10%' height='10%'/></Box>
//             <HStack
//               as={'nav'}
//               spacing={4}
//               display={{ base: 'none', md: 'flex' }}>
//                 <Link to="home" spy={true} offset={-100} smooth duration={500}>
//                     <ListItem textStyle="Navbar" p="12px" _hover={{backgroundColor: "#fafcf9",borderRadius:"10px",color:"black"}}>HOME</ListItem>
//                 </Link>
//                 <Link to="about" spy={true} offset={-100} smooth duration={500}>
//                     <ListItem textStyle="Navbar" p="12px" _hover={{backgroundColor: "#fafcf9",borderRadius:"10px",color:"black"}}>ABOUT</ListItem>
//                 </Link>
//                 <Link to="project" spy={true} offset={-100} smooth duration={500}>
//                     <ListItem textStyle="Navbar" p="12px" _hover={{backgroundColor: "#fafcf9",borderRadius:"10px",color:"black"}}>PROJECTS</ListItem>
//                 </Link>
//                 <Link to="skills" spy={true} offset={-100} smooth duration={500}>
//                     <ListItem textStyle="Navbar" p="12px" _hover={{backgroundColor: "#fafcf9",borderRadius:"10px",color:"black"}}>SKILLS</ListItem>
//                 </Link>
//                 <Link to="contact" spy={true} offset={-100} smooth duration={500}>
//                     <ListItem textStyle="Navbar" p="12px" _hover={{backgroundColor: "#fafcf9",borderRadius:"10px",color:"black"}}>CONTACTS</ListItem>
//                 </Link>
//                 <Link to={Resume} spy={true} offset={-100} smooth duration={500}>
//                     <ListItem textStyle="Navbar" p="12px" _hover={{backgroundColor: "#fafcf9",borderRadius:"10px",color:"black"}}>RESUME</ListItem>
//                 </Link>
//                  {/* <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-grey-800 text-grey-500">
//                     {links.map((link) => (
//                         <Link key={link}>{link}</Link>
//                     ))}
//                  </ul> */}
                
//             </HStack>
//           </HStack>
//           </Flex>
//       </Box>

//     </>
//   );
// }





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

