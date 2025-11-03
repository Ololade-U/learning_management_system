import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import Hero from "../assets/Hero-bg.png";
import { FaArrowRightLong } from "react-icons/fa6";
import useStoreQuery from "./Store";

const Landing = () => {
  const setOpenNav = useStoreQuery((s) => s.setOpenNav);
  const openNav = useStoreQuery((s) => s.openNav);
  return (
    <HStack
      justifyContent={"space-between"}
      alignItems={"center"}
      pos={"relative"}
      top={"15vh"}
      p={{ mdTo2xl: "3rem", mdDown: "1rem" }}
      pt={{ mdDown: "3rem" }}
      mdDown={{ flexDirection: "column", gap: "3rem" }}
      mb={"4rem"}
    >
      <Stack gap={"2rem"}>
        <Heading
          className="red-hat-display-bold"
          fontSize={{ mdTo2xl: "7xl", mdDown: "5xl" }}
          maxW={"15ch"}
          lineHeight={"1"}
        >
          Unlock Your Potential. Learn Without Limits.
        </Heading>
        <Text
          color={{ _dark: "#c4c4c4ff", _light: "gray.500" }}
          fontSize={"2xl"}
          maxW={"40ch"}
        >
          Structured, no-fluff courses that teach you the skills you need to
          succeed in the real world.
        </Text>
        <Button
          display={"flex"}
          variant={"outline"}
          border={{ _light: "1.5px solid #E62727" }}
          bg={{ _dark: "white" }}
          _hover={{
            _light: {
              bg: "black",
              border: "none",
              color: "white",
              w: "31%",
              gap: "1rem",
            },
            _dark: {
              bg: "black",
              border: "1.5px solid white",
              color: "white",
              w: "31%",
              gap: "1rem",
            },
          }}
          color={{ _light: "#E62727", _dark: "black" }}
          transitionProperty={"width, margin"}
          transitionDuration={".3s"}
          w={{ mdTo2xl: "30%", mdDown: "50%" }}
          p={"1.5rem"}
          borderRadius={"2rem"}
          fontWeight={"900"}
        >
          Sign Up for Free <FaArrowRightLong />
        </Button>
      </Stack>
      <Box
        display={"flex"}
        justifyContent={"center"}
        w={{ mdTo2xl: "40%", mdDown: "100%" }}
      >
        <Image src={Hero} alt="Hero" h={"70vh"} />
      </Box>

      <Box
        pos={"fixed"}
        top={"15vh"}
        right={"0"}
        height={"85vh"}
        w={"100%"}
        bg={"rgba(0,0,0,.3)"}
        zIndex={"5"}
        backdropFilter={"blur(5px)"}
        display={openNav ? "block" : "none"}
        onClick={() => setOpenNav(false)}
      ></Box>

      <Box
        pos={"fixed"}
        top={"15vh"}
        right={"-65%"}
        height={"85vh"}
        w={"65%"}
        bg={{_dark : "rgba(0,0,0,.7)", _light : 'rgba(227, 227, 227, .8)'}}
        zIndex={"10"}
        p={"1rem"}
        className={openNav ? "navOpen" : ""}
      >
        <Stack gap={"1.5rem"}>
          <Text
            cursor={"pointer"}
            fontSize={"xl"}
            fontWeight={'700'}
            transitionProperty={"color"}
            transitionDuration={"slow"}
            _hover={{
              transform: "Scale(1.02)",
              borderBottom: "1px solid #b6b6b6ff",
            }}
          >
            Courses
          </Text>
          <Text
            cursor={"pointer"}
            transitionProperty={"color"}
            transitionDuration={"slow"}
            fontWeight={'700'}
            _hover={{
              transform: "Scale(1.02)",
              borderBottom: "1px solid #b6b6b6ff",
            }}
            fontSize={"xl"}
          >
            Learning Paths
          </Text>
          <Text
            cursor={"pointer"}
            transitionProperty={"color"}
            transitionDuration={"slow"}
            fontWeight={'700'}
            fontSize={"xl"}
            _hover={{
              transform: "Scale(1.02)",
              borderBottom: "1px solid #b6b6b6ff",
            }}
          >
            Lifetime Access
          </Text>
          <Text
            cursor={"pointer"}
            transitionProperty={"color"}
            transitionDuration={"slow"}
            fontWeight={'700'}
            fontSize={"xl"}
            _hover={{
              transform: "Scale(1.02)",
              borderBottom: "1px solid #b6b6b6ff",
            }}
          >
            Forum
          </Text>
          <Text
            cursor={"pointer"}
            transitionProperty={"color"}
            transitionDuration={"slow"}
            fontWeight={'700'}
            _hover={{
              transform: "Scale(1.02)",
              borderBottom: "1px solid #b6b6b6ff",
            }}
            fontSize={"xl"}
          >
            Contact
          </Text>
          <Button borderRadius={"1rem"}>Members Area</Button>
        </Stack>
      </Box>
    </HStack>
  );
};

export default Landing;
