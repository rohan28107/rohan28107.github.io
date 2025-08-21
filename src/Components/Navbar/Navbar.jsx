import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  Stack,
  useDisclosure,
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { AiOutlineFilePdf } from "react-icons/ai";
import Resume from "../../Files/fw21_0913_Rohan_Gajare_Resume.pdf";
import Logo from "./Rohan.png";
import Styles from "./Navbar.module.css";
import { Link } from "react-scroll";

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleDownloadNewPageResume = () => {
    const newWindow = window.open(
      "https://drive.google.com/file/d/1CO1K2ENrICmiK4ptpOgs6Fwuz386cd7x/view?usp=drive_link",
      "_blank",
      "noopener,noreferrer"
    );

    if (newWindow) newWindow.opener = null;

    fetch(Resume).then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Rohan_Gajare_Resume.pdf";
        alink.click();
      });
    });
  };

  const navLinks = [
    { name: "HOME", to: "home" },
    { name: "ABOUT", to: "about" },
    { name: "SKILLS", to: "skills" },
    { name: "PROJECTS", to: "projects" },
    { name: "CONTACTS", to: "contact" },
  ];

  return (
    <>
      <Box className={Styles.navbar} px={4} h="90px" paddingTop={3}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"sm"}
            icon={
              isOpen ? (
                <CloseIcon color={"black"} />
              ) : (
                <HamburgerIcon color={"black"} />
              )
            }
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Link
              to="home"
              smooth
              duration={500}
              activeClass="active"
              spy={true}
              offset={-100}
            >
              <Image src={Logo} alt="Rohan" w={["60px", "90px"]} />
            </Link>

            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  smooth
                  duration={500}
                  offset={-100}
                >
                  <Button
                    bg="#234a84"
                    p="12px"
                    _hover={{
                      bg: "#fafcf9",
                      borderRadius: "10px",
                      color: "black",
                    }}
                  >
                    {link.name}
                  </Button>
                </Link>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Link
              onClick={handleDownloadNewPageResume}
              to="https://drive.google.com/file/d/1CO1K2ENrICmiK4ptpOgs6Fwuz386cd7x/view?usp=drive_link"
              target="_blank"
              download
              cursor="pointer"
            >
              <Button
                variant={"solid"}
                bg="#234a84"
                size={["sm", "lg"]}
                mr={4}
                leftIcon={<AiOutlineFilePdf />}
                _hover={{
                  backgroundColor: "#fafcf9",
                  borderRadius: "10px",
                  color: "black",
                }}
              >
                Resume
              </Button>
            </Link>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box
            pb={4}
            w="100%"
            display={{ md: "none" }}
            padding="15px"
            color={{ sm: "color:black" }}
            bgColor="#234a84"
          >
            <Stack as={"nav"} spacing={4}>
              <Link
                to="home"
                smooth
                duration={500}
                activeClass="active"
                spy={true}
                offset={-100}
              >
                <Button
                  bg="#234a84"
                  textStyle="Navbar"
                  p="12px"
                  _hover={{
                    backgroundColor: "#fafcf9",
                    borderRadius: "10px",
                    color: "black",
                  }}
                >
                  HOME
                </Button>
              </Link>

              <Link
                to="about"
                smooth
                duration={500}
                activeClass="active"
                offset={-100}
              >
                <Button
                  bg="#234a84"
                  textStyle="Navbar"
                  p="12px"
                  _hover={{
                    backgroundColor: "#fafcf9",
                    borderRadius: "10px",
                    color: "black",
                  }}
                >
                  ABOUT
                </Button>
              </Link>

              <Link to="skills" spy={true} offset={-100} smooth duration={500}>
                <Button
                  bg="#234a84"
                  textStyle="Navbar"
                  p="12px"
                  _hover={{
                    backgroundColor: "#fafcf9",
                    borderRadius: "10px",
                    color: "black",
                  }}
                >
                  SKILLS
                </Button>
              </Link>

              <Link
                to="projects"
                smooth
                duration={500}
                spy={true}
                offset={-100}
              >
                <Button
                  bg="#234a84"
                  textStyle="Navbar"
                  p="12px"
                  _hover={{
                    backgroundColor: "#fafcf9",
                    borderRadius: "10px",
                    color: "black",
                  }}
                >
                  PROJECTS
                </Button>
              </Link>

              <Link to="contact" spy={true} offset={-100} smooth duration={500}>
                <Button
                  bg="#234a84"
                  textStyle="Navbar"
                  p="12px"
                  _hover={{
                    backgroundColor: "#fafcf9",
                    borderRadius: "10px",
                    color: "black",
                  }}
                >
                  CONTACTS
                </Button>
              </Link>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
