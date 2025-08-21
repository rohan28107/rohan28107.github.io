import {
  Box,
  Button,
  chakra,
  Flex,
  Heading,
  Image,
  Link,
  shouldForwardProp,
  Text,
} from "@chakra-ui/react";
import Styles from "./Project.module.css";
import team_sync from "./Images/team_sync.png"
import desire from "./Images/desire_cart_page.png";
import first from "./Images/first_post_page.png";
import grow from "./Images/grow_smarter_page.png";
import nutribest from "./Images/nurtibest.png";
import nearbuy from "./Images/nearbuy.png";
import { Fade } from "react-awesome-reveal";
import { BsGithub } from "react-icons/bs";
import {
  SiChakraui,
  SiCss3,
  SiExpress,
  SiHtml5,
  SiJavascript,
  SiJsonwebtokens,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPassport,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";
import { motion, isValidMotionProp } from "framer-motion";

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

const projectData = [
  {
    id: 1,
    name: "Team Sync",
    git_url: "https://github.com/rohan28107/teamSync-frontend",
    live_url: "https://team-sync-rohan.vercel.app/",
    description:
      "Team Sync is a full-stack project management tool that helps teams organize projects, assign tasks, and track progress within a shared workspace for seamless collaboration.",
    technologies: [
      <SiReact />, // React (Frontend)
      <SiTypescript />, // TypeScript
      <SiTailwindcss />, // Tailwind CSS
      <SiExpress />, // Express (Backend)
      <SiMongodb />, // MongoDB
      <SiJsonwebtokens />, // JWT Authentication
      <SiPassport />, // Passport.js (Auth)
      <SiNodedotjs />, // Node.js runtime
    ],
    image: team_sync,
  },
  {
    id: 2,
    name: "Desire Cart",
    git_url:
      "https://github.com/rohan28107/efficient-wool-4085/tree/master/desire_cart",
    live_url: "https://desire-cart.vercel.app/",
    description:
      "Desire Cart is a E-commerce Website. Where users can browse various products. You can search various products also filter the products by category. Has Pagination with 10 products per page.It has Dark and light mode.",
    technologies: [
      <SiHtml5 />,
      <SiCss3 />,
      <SiJavascript />,
      <SiReact />,
      <SiChakraui />,
    ],
    image: desire,
  },
  {
    id: 3,
    name: "Grow Smarter",
    git_url: "https://github.com/HANUMAT-SHARAN/wicked-edge-6587",
    live_url: "https://dazzling-buttercream-31808d.netlify.app/index.html",
    description:
      "Grow Smarter is a SAAS company which provides various service. It has Customer support chat-box. It has pricing page with different pricing for different countries.",
    technologies: [<SiHtml5 />, <SiCss3 />, <SiJavascript />],
    icon1: SiJavascript,
    image: grow,
  },
  {
    id: 4,
    name: "NutriBest",
    git_url: "https://github.com/akaushik509/internal-appliance-3345",
    live_url: "https://nutribest-healthkart-rohan28107.vercel.app/",
    description:
      "NutriBest.com is collaborative project, It is a great place for people serious about health and fitness. WE created this website in 5 days.",
    technologies: [
      <SiReact />,
      <SiNextdotjs />,
      <SiRedux />,
      <SiHtml5 />,
      <SiCss3 />,
      <SiChakraui />,
      <SiJavascript />,
    ],
    image: nutribest,
  },
  {
    id: 5,
    name: "First Post",
    git_url: "https://github.com/rohan28107/apathetic-bikes-8091",
    live_url: "https://zesty-cactus-26303e.netlify.app/",
    description:
      "First Post is a News website which gives update on latest news to users. Has different topics of news with each separate page. It has a carousel of images on Home page. Links to all the social media pages of First Post.",
    technologies: [<SiHtml5 />, <SiCss3 />, <SiJavascript />],
    image: first,
  },
  {
    id: 6,
    name: "Near Buy",
    git_url: "https://github.com/vinaybarve/lying-blade-5948",
    live_url: "https://just-buy-phi.vercel.app/",
    description:
      "A group project that is made during the time span of 5 days.NearBuy helps you discover the best things to do, eat and buy – wherever you are! Make every day awesome with NearBuy",
    technologies: [
      <SiReact />,
      <SiRedux />,
      <SiNodedotjs />,
      <SiExpress />,
      <SiMongodb />,
      <SiHtml5 />,
      <SiCss3 />,
      <SiChakraui />,
      <SiJavascript />,
    ],
    image: nearbuy,
  },
];

const Project = () => {
  return (
    <Box id="projects">
      <ChakraBox
        initial={{ opacity: 0 }}
        whileInView={{ y: [-15, 0], opacity: 1 }}
        transition={{
          duration: 1,
          delay: 0.3,
        }}
      >
        <div className={Styles.project}>
          <Box
            w="80%"
            margin={"auto"}
            p={7}
            h={{ sm: "auto", md: "auto", lg: "auto" }}
            textAlign="center"
          >
            <Heading
              as="h2"
              marginBottom="2%"
              mt={{ sm: "40px", md: "40px", lg: "30px" }}
            >
              Projects
            </Heading>
            <Text fontSize={["md", "xl"]} marginBottom={"5%"}>
              {" "}
              My projects make use of a vast variety of latest technology tools.
              My best experience is to create React Project and JavaScript
              Projects. Below are some of my projects. All of the mentioned
              projects are on GitHub and have Live link.
            </Text>

            <Fade direction="left" cascade>
              {projectData.map((project) => (
                <Box
                  key={project.id}
                  w={["100%", "90%", "90%", "90%"]}
                  margin={"auto"}
                  marginBottom="5%"
                  px={["20px", "20px", "10px"]}
                  p={5}
                  mt={{ sm: "50px", md: "50px", lg: "40px" }}
                  backgroundColor="#e2ebee"
                  h="auto"
                  border="1px solid black"
                  borderRadius="15px"
                >
                  <Flex
                    direction={["column", "column", "column", "row"]}
                    justifyContent="space-evenly"
                  >
                    <Image
                      width={["100%", "100%", "100%", "70%"]}
                      src={project.image}
                      alt={project.name}
                    />
                    <Box width={["100%", "100%", "100%", "45%"]} padding="2%">
                      <Heading
                        as="h2"
                        mt={{ sm: "10px", md: "10px", lg: "10px" }}
                      >
                        {project.name}
                      </Heading>
                      <Text
                        textStyle="AboutPara"
                        fontSize={["sm", "sm", "md", "xl"]}
                      >
                        {project.description}
                      </Text>

                      <Flex justifyContent="space-evenly" marginTop={"10px"}>
                        {project.technologies.map((language) => (
                          <Box>{language}</Box>
                        ))}
                      </Flex>

                      <Flex justifyContent="space-around" mt="30px">
                        <Link
                          href={project.live_url}
                          target="_blank"
                          textDecoration="none"
                        >
                          <Button
                            leftIcon={<FiExternalLink />}
                            bg="#234a84"
                            size={["sm", "sm", "md", "xl"]}
                            height={["30px", "40px"]}
                            width={["90px", "110px"]}
                            color="black"
                            border="none"
                            variant="outline"
                            padding="10px"
                          >
                            Demo
                          </Button>
                        </Link>
                        <Link
                          href={project.git_url}
                          target="_blank"
                          textDecoration="none"
                        >
                          <Button
                            leftIcon={<BsGithub />}
                            bg="#234a84"
                            size={["sm", "sm", "md", "xl"]}
                            height={["20px", "40px"]}
                            width={["90px", "110px"]}
                            color="black"
                            border="none"
                            variant="outline"
                            padding="10px"
                          >
                            GitHub
                          </Button>
                        </Link>
                      </Flex>
                    </Box>
                  </Flex>
                </Box>
              ))}
            </Fade>
          </Box>
        </div>
      </ChakraBox>
    </Box>
  );
};

export default Project;
