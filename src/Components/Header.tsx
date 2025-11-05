import { Box, Button, HStack, Image, Stack, Text } from "@chakra-ui/react";
import darkLogo from "../assets/Logo_Dark-removebg-preview.png";
import lightLogo from "../assets/Logo_Light-removebg-preview.png";

import { ColorModeButton, useColorMode } from "./ui/color-mode";
import { IoIosMenu } from "react-icons/io";
import useStoreQuery from "./Store";
import { Link } from "react-router-dom";

const Header = () => {
  const { colorMode } = useColorMode();
  const setOpenNav = useStoreQuery((s) => s.setOpenNav);
  const openNav = useStoreQuery((s) => s.openNav);
  const activePage = useStoreQuery((s) => s.activePage);
  const setActivePage = useStoreQuery((s) => s.setActivePage);
  return (
    <>
      <Box
        pos={"fixed"}
        w={"100%"}
        h={"15vh"}
        bg={{ _dark: "rgba(0, 0, 0, .7)", _light: "rgba(255, 255, 255, .7)" }}
        backdropFilter={"blur(5px)"}
        zIndex={"5"}
      >
        <HStack
          p={"1rem"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Link to={"/"}>
            <Box>
              <Image
                src={colorMode === "dark" ? darkLogo : lightLogo}
                alt="Academy Logo"
                w={"8rem"}
                onClick={() => setActivePage("")}
              />
            </Box>
          </Link>
          <HStack
            gap={"1rem"}
            fontSize={"1.1rem"}
            color={{ _dark: "#7b7b7bff" }}
            fontWeight={"500"}
            mdDown={{ display: "none" }}
          >
            <Link to={"/courses"}>
              <Text
                cursor={"pointer"}
                transitionProperty={"color"}
                transitionDuration={"slow"}
                _hover={{ _dark: { color: "white" } }}
                onClick={() => setActivePage("courses")}
                color={activePage === "courses" ? "white" : ""}
              >
                Courses
              </Text>
            </Link>
            <Link to={"learning-path"}>
              <Text
                cursor={"pointer"}
                transitionProperty={"color"}
                transitionDuration={"slow"}
                _hover={{ _dark: { color: "white" } }}
                onClick={() => setActivePage("learning-path")}
                color={activePage === "learning-path" ? "white" : ""}
              >
                Learning Paths
              </Text>
            </Link>
            <Text
              cursor={"pointer"}
              transitionProperty={"color"}
              transitionDuration={"slow"}
              _hover={{ _dark: { color: "white" } }}
            >
              Subscription
            </Text>
            <Text
              cursor={"pointer"}
              transitionProperty={"color"}
              transitionDuration={"slow"}
              _hover={{ _dark: { color: "white" } }}
            >
              Forum
            </Text>
            <Text
              cursor={"pointer"}
              transitionProperty={"color"}
              transitionDuration={"slow"}
              _hover={{ _dark: { color: "white" } }}
            >
              Contact
            </Text>
          </HStack>
          <HStack>
            <Button hideBelow={"md"} borderRadius={"1rem"}>
              Members Area
            </Button>
            <ColorModeButton />
          </HStack>
          <Box
            cursor={"pointer"}
            border={{ _dark: "1px solid white", _light: "1px solid black" }}
            p={".3rem"}
            borderRadius={"50%"}
            display={{ mdDown: "block", mdTo2xl: "none" }}
            onClick={() => (openNav ? setOpenNav(false) : setOpenNav(true))}
          >
            <IoIosMenu size={"1.5rem"} />
          </Box>
        </HStack>
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
        bg={{ _dark: "rgba(0,0,0,.7)", _light: "rgba(227, 227, 227, .8)" }}
        zIndex={"10"}
        p={"1rem"}
        className={openNav ? "navOpen" : "closeNav"}
      >
        <Stack gap={"1.5rem"}>
          <Link to={"/courses"}>
            <Text
              cursor={"pointer"}
              fontSize={"xl"}
              fontWeight={"700"}
              transitionProperty={"color"}
              transitionDuration={"slow"}
              _hover={{
                transform: "Scale(1.02)",
                borderBottom: "1px solid #b6b6b6ff",
              }}
              onClick={()=> setOpenNav(false)}
            >
              Courses
            </Text>
          </Link>
          <Link to={"learning-path"}>
            <Text
              cursor={"pointer"}
              transitionProperty={"color"}
              transitionDuration={"slow"}
              fontWeight={"700"}
              _hover={{
                transform: "Scale(1.02)",
                borderBottom: "1px solid #b6b6b6ff",
              }}
              fontSize={"xl"}
              onClick={()=> setOpenNav(false)}
            >
              Learning Paths
            </Text>
          </Link>
          <Text
            cursor={"pointer"}
            transitionProperty={"color"}
            transitionDuration={"slow"}
            fontWeight={"700"}
            fontSize={"xl"}
            _hover={{
              transform: "Scale(1.02)",
              borderBottom: "1px solid #b6b6b6ff",
            }}
          >
            Subscription
          </Text>
          <Text
            cursor={"pointer"}
            transitionProperty={"color"}
            transitionDuration={"slow"}
            fontWeight={"700"}
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
            fontWeight={"700"}
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
    </>
  );
};

export default Header;
