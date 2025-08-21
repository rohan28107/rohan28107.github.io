import {
  Box,
  Button,
  Center,
  chakra,
  Heading,
  Image,
  Link,
  shouldForwardProp,
  SimpleGrid,
  Stack,
  VStack,
} from "@chakra-ui/react";
import { BsGithub } from "react-icons/bs";
import Resume from "../../Files/fw21_0913_Rohan_Gajare_Resume.pdf";
import Styles from "./Home.module.css";
import { motion, isValidMotionProp } from "framer-motion";
import { AiOutlineFilePdf } from "react-icons/ai";

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});
const Home = () => {
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

  return (
    <Box
      id="home"
      className={Styles.home}
      w="100%"
      minH="100vh"
      pt={["120px", "180px", "250px"]}
    >
      <ChakraBox
        initial={{ opacity: 0 }}
        whileInView={{ y: [-15, 0], opacity: 1 }}
        transition={{
          duration: 1,
          delay: 0.3,
        }}
      >
        <SimpleGrid columns={[1, 2, 2]} gap="10px">
          <VStack
            height="100%"
            width="100%"
            margin="auto"
            spacing={10}
            w={"90%"}
            marginLeft={["15px", "20px", "80px"]}
          >
            <Heading as="h1" fontSize="4xl">
              Hello 👋,<span> I'm Rohan Gajare </span>{" "}
            </Heading>
            <Heading as="h4" size={["md", "md"]}>
              Aspiring Full Stack Web Developer at Masai School, Life Long
              Learner.
            </Heading>

            <Center>
              <Stack direction="row" spacing={8}>
                <Link
                  onClick={handleDownloadNewPageResume}
                  to="https://drive.google.com/file/d/1CO1K2ENrICmiK4ptpOgs6Fwuz386cd7x/view?usp=drive_link"
                  target="_blank"
                  download
                  cursor="pointer"
                >
                  <Button
                    bg="#234a84"
                    mr={4}
                    variant="solid"
                    size={["sm", "md", "xl"]}
                    height="48px"
                    width="150px"
                    fontSize="20px"
                    color="black"
                    border="none"
                    leftIcon={<AiOutlineFilePdf />}
                  >
                    Resume
                  </Button>
                </Link>

                <Link
                  href="https://github.com/rohan28107"
                  target="_blank"
                  textDecoration="none"
                >
                  <Button
                    leftIcon={<BsGithub />}
                    bg="#234a84"
                    variant="solid"
                    size={["sm", "md", "xl"]}
                    height="48px"
                    width="150px"
                    fontSize="20px"
                    color="black"
                    border="none"
                  >
                    GitHub
                  </Button>
                </Link>
              </Stack>
            </Center>
          </VStack>
          <Box
            alignItems="center"
            w={"95%"}
            marginLeft={["15px", "20px", "80px"]}
          >
            {/* <Image
                  borderRadius='250px'
                  boxSize='350px'
                  src='https://avatars.githubusercontent.com/u/112626910?v=4'
                  alt='Rohan Gajare'
                /> */}
            <Image
              borderRadius="full"
              boxSize={{ base: "200px", md: "300px", lg: "350px" }}
              src="https://avatars.githubusercontent.com/u/112626910?v=4"
              alt="Rohan Gajare"
            />
          </Box>
        </SimpleGrid>
      </ChakraBox>
    </Box>
  );
};

export default Home;
