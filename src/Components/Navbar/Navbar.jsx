import {
    Box,
    Flex,
    HStack,
    IconButton,
    Button,
    // useColorModeValue,
    Stack,
    useDisclosure,
    Image,
  } from '@chakra-ui/react';
  import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
  import { AiOutlineFilePdf } from "react-icons/ai";
  import Resume from "../../Files/fw21_0913_Rohan_Gajare_Resume.pdf";
  import Logo from "./Rohan.png";
  import Styles from "./Navbar.module.css";
  import {Link} from 'react-scroll';

  // const Links =["home", "about", "skills", "projects", "contacts"];
  
  
  // const NavLink = ({ children }) => (
  //   <Link
  //     px={2}
  //     py={1}
  //     rounded={'md'}
  //     _hover={{
  //       textDecoration: 'none',
  //       bg: useColorModeValue('gray.200', 'gray.700'),
  //     }}
  //     href={'#'}
      
  //   >
  //     {children}
  //   </Link>
  // );
  
  export default function Header() {
    const { isOpen, onOpen, onClose } = useDisclosure();
  
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
            alink.download = 'fw21_0913_Rohan_Gajare_Resume.pdf';
            alink.click();
        })
    })
    };
  
    return (
      <>
      {/* bg={useColorModeValue('gray.100', 'gray.900')} */}
        <Box className={Styles.navbar} px={4}   h="90px" paddingTop={3}>
          <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
            <IconButton
              size={'sm'}
              icon={isOpen ? <CloseIcon color={"black"}/> : <HamburgerIcon color={"black"} />}
              aria-label={'Open Menu'}
              display={{ md: 'none' }}
              onClick={isOpen ? onClose : onOpen}
            />
            <HStack spacing={8} alignItems={'center'}>
              {/* <Box> */}
              <Link to="home"  smooth duration={500} activeClass="active" spy={true} offset={-100} >
                <Image src={Logo} alt="Rohan" w={["60px", "90px"]}/>
              </Link>
                
              {/* </Box> */}
              <HStack
                as={'nav'}
                spacing={4}
                display={{ base: 'none', md: 'flex' }}>
                {/* {Links.map((link) => (
                  <NavLink key={link} to={link} spy={true} offset={-100} smooth duration={500} _hover={{backgroundColor: "#fafcf9",borderRadius:"10px",color:"black"}}>{link}</NavLink>
                ))} */}
                        <Link to="home"  smooth duration={500} activeClass="active" spy={true} offset={-100} >
                            <Button bg='#234a84' textStyle="Navbar" p="12px" _hover={{backgroundColor: "#fafcf9",borderRadius:"10px",color:"black"}}>HOME</Button>
                        </Link>
                        
                        <Link to="about" smooth duration={500} activeClass="active"  offset={-100}  >
                            <Button bg='#234a84' textStyle="Navbar" p="12px" _hover={{backgroundColor: "#fafcf9",borderRadius:"10px",color:"black"}}>ABOUT</Button>
                        </Link>
                        
                        <Link to="skills" spy={true} offset={-100} smooth duration={500}>
                            <Button bg='#234a84' textStyle="Navbar" p="12px" _hover={{backgroundColor: "#fafcf9",borderRadius:"10px",color:"black"}}>SKILLS</Button>
                        </Link>

                        <Link to="projects" smooth duration={500}  spy={true} offset={-100} >
                            <Button bg='#234a84' textStyle="Navbar" p="12px" _hover={{backgroundColor: "#fafcf9",borderRadius:"10px",color:"black"}}>PROJECTS</Button>
                        </Link>

                        <Link to="contact" spy={true} offset={-100} smooth duration={500}>
                            <Button bg='#234a84' textStyle="Navbar" p="12px" _hover={{backgroundColor: "#fafcf9",borderRadius:"10px",color:"black"}}>CONTACTS</Button>
                        </Link>
              </HStack>
            </HStack>
            <Flex alignItems={'center'}>
            <Link
                onClick={handleDownloadNewPageResume}
                to="https://drive.google.com/file/d/1dW4RpRe9nvD8pbw7erbV9NUjNx1O0S-Z/view?usp=share_link"
                target="_blank"
                download
                cursor="pointer"
            >
              <Button
                variant={'solid'}
                // colorScheme={'#234a84'}
                bg='#234a84'
                // bg='black'
                size={["sm", "lg"]}
                mr={4}
                leftIcon={<AiOutlineFilePdf />}
                _hover={{backgroundColor: "#fafcf9",borderRadius:"10px",color:"black"}}
              >
                Resume
              </Button>
              </Link>                           
              
            </Flex>
          </Flex>
  
        {isOpen ? (
              <Box pb={4} w="100%" display={{ md: 'none' }} padding="15px" color={{sm: 'color:black'}} bgColor="#234a84">
                <Stack as={'nav'} spacing={4} >
                  {/* {Links.map((link) => (
                    <NavLink key={link}>{link}</NavLink>
                  ))} */}
                  
                      <Link to="home"  smooth duration={500} activeClass="active" spy={true} offset={-100} >
                            <Button bg='#234a84' textStyle="Navbar" p="12px" _hover={{backgroundColor: "#fafcf9",borderRadius:"10px",color:"black"}}>HOME</Button>
                        </Link>
                        
                        <Link to="about" smooth duration={500} activeClass="active"  offset={-100}  >
                            <Button bg='#234a84' textStyle="Navbar" p="12px" _hover={{backgroundColor: "#fafcf9",borderRadius:"10px",color:"black"}}>ABOUT</Button>
                        </Link>
                        
                        <Link to="skills" spy={true} offset={-100} smooth duration={500}>
                            <Button bg='#234a84' textStyle="Navbar" p="12px" _hover={{backgroundColor: "#fafcf9",borderRadius:"10px",color:"black"}}>SKILLS</Button>
                        </Link>

                        <Link to="projects" smooth duration={500}  spy={true} offset={-100} >
                            <Button bg='#234a84' textStyle="Navbar" p="12px" _hover={{backgroundColor: "#fafcf9",borderRadius:"10px",color:"black"}}>PROJECTS</Button>
                        </Link>

                        <Link to="contact" spy={true} offset={-100} smooth duration={500}>
                            <Button bg='#234a84' textStyle="Navbar" p="12px" _hover={{backgroundColor: "#fafcf9",borderRadius:"10px",color:"black"}}>CONTACTS</Button>
                        </Link>
                </Stack>
              </Box>
            ) : null} 
        </Box>
      </>
    );
  }
  
