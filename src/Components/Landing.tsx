import { Box, Heading, HStack, Image, Stack, Text } from "@chakra-ui/react";
import Hero from "../assets/Hero-bg.png";

const Landing = () => {
  return (
    <HStack
      justifyContent={"space-between"}
      alignItems={"center"}
      pos={"relative"}
      top={"15vh"}
      p={"3rem"}
    >
      <Stack gap={"2rem"}>
        <Heading className="red-hat-display-bold" fontSize={"7xl"} maxW={"15ch"} lineHeight={"1"}>
          Unlock Your Potential. Learn Without Limits.
        </Heading>
        <Text color={{_dark : "#c4c4c4ff", _light : 'gray.500'}} fontSize={"2xl"} maxW={"40ch"}>
          Structured, no-fluff courses that teach you the skills you need to
          succeed in the real world.
        </Text>
      </Stack>
      <Box w={"40%"}>
        <Image src={Hero} alt="Hero" h={"70vh"} />
      </Box>
    </HStack>
  );
};

export default Landing;
