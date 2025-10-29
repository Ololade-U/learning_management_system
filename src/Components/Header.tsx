import { Box, Button, HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/Academy.png";
import { ColorModeButton } from "./ui/color-mode";
import { IoIosMenu } from "react-icons/io";

const Header = () => {
  return (
    <Box
      pos={"fixed"}
      w={"100%"}
      h={"15vh"}
      bg={{_dark :"rgba(0, 0, 0, .7)", _light: "rgba(255, 255, 255, .7)"}}
      backdropFilter={"blur(5px)"}
      zIndex={"5"}
    >
      <HStack p={"1rem"} justifyContent={"space-between"} alignItems={"center"}>
        <Box bg={"white"} p={".3rem"} borderRadius={".5rem"}>
          <Image src={logo} alt="Academy Logo" w={"7rem"} />
        </Box>
        <HStack
          gap={"1rem"}
          fontSize={"1.1rem"}
          color={{ _dark: "#7b7b7bff" }}
          fontWeight={"500"}
          mdDown={{ display: "none" }}
        >
          <Text
            cursor={"pointer"}
            transitionProperty={"color"}
            transitionDuration={"slow"}
            _hover={{ _dark: { color: "white" } }}
          >
            Courses
          </Text>
          <Text
            cursor={"pointer"}
            transitionProperty={"color"}
            transitionDuration={"slow"}
            _hover={{ _dark: { color: "white" } }}
          >
            Learning Paths
          </Text>
          <Text
            cursor={"pointer"}
            transitionProperty={"color"}
            transitionDuration={"slow"}
            _hover={{ _dark: { color: "white" } }}
          >
            Lifetime Access
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
          <Button borderRadius={"1rem"}>Members Area</Button>
          <ColorModeButton />
        </HStack>
        <Box
          cursor={"pointer"}
          border={{ _dark: "1px solid white", _light: "1px solid black" }}
          p={".3rem"}
          borderRadius={"50%"}
          display={{ mdDown: "block", mdTo2xl: "none" }}
        >
          <IoIosMenu size={"2rem"} />
        </Box>
      </HStack>
    </Box>
  );
};

export default Header;
