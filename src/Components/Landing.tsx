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

const Landing = () => {
  return (
    <HStack
      justifyContent={"space-between"}
      alignItems={"center"}
      pos={"relative"}
      top={"15vh"}
      p={{mdTo2xl :"3rem", mdDown: "1rem"}}
      pt={{mdDown : '3rem'}}
      mdDown={{flexDirection: "column", gap: "3rem"}}
    >
      <Stack gap={"2rem"}>
        <Heading
          className="red-hat-display-bold"
          fontSize={{mdTo2xl : "7xl", mdDown: "5xl"}}
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
          w={{ mdTo2xl: "30%" , mdDown: "50%"}}
          p={"1.5rem"}
          borderRadius={"2rem"}
          fontWeight={"900"}
        >
          Sign Up for Free <FaArrowRightLong />
        </Button>
      </Stack>
      <Box display={'flex'} justifyContent={'center'} w={{mdTo2xl : "40%", mdDown: "100%"}}>
        <Image src={Hero} alt="Hero" h={"70vh"} />
      </Box>
    </HStack>
  );
};

export default Landing;
