import { Box, Heading, HStack, Stack, Text } from "@chakra-ui/react";

const About = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      gap={"2.5rem"}
      w={"100%"}
      h={"100vh"}
      pt={"3rem"}
      bg={{ _light: "#ffffffff" }}
      mb={"3rem"}
    >
      <Heading
        textAlign={"center"}
        fontSize={"4xl"}
        className="red-hat-display-bold"
      >
        About Us
      </Heading>
      <Text fontSize={"xl"} mb={'2rem'} textAlign={"center"} maxW={"80ch"}>
        Arravo Academy is dedicated to delivering world-class digital and
        business education, equipping young people with the skills needed for
        the future. Through programs like IT Training and Placement, Arravo
        Business Masterclasses, versatile Spaces & Events, and the engaging
        Arravo Kids & Teens, the Academy creates pathways to success across age
        groups and experience levels. Each program is designed to foster
        real-world skills, industry knowledge, and personal growth, preparing
        participants for the competitive landscape ahead.
      </Text>
      <HStack gap={"1rem"} w={"100%"} justifyContent={"center"}>
        <Stack
          alignItems={"center"}
          border={"1.5px solid #212121ff"}
          p={"2rem 2.5rem"}
          w={"20%"}
          borderRadius={".6rem"}
          borderImage={
            "linear-gradient(to right,transparent 10%, #c20808ff, transparent 90%) 1 1 1 1/ 1.5px 1px 1px 1px / 0;"
          }
          //   bg={{_light: '#f2f2f2ff'}}
        >
          <Heading
            fontSize={"3xl"}
            className="red-hat-display-bold"
            color={"#c20808ff"}
          >
            50k+
          </Heading>
          <Text color={{ _dark: "#CFCFCF", _light: "black" }}>
            Students thought
          </Text>
        </Stack>
        <Stack
          alignItems={"center"}
          border={"1.5px solid #212121ff"}
          p={"2rem 2.5rem"}
          borderRadius={".6rem"}
          w={"20%"}
          borderImage={
            "linear-gradient(to right,transparent 10%, #FFD700, transparent 90%) 1 1 1 1/ 1.5px 1px 1px 1px / 0;"
          }
        >
          <Heading
            fontSize={"3xl"}
            className="red-hat-display-bold"
            color={"#FFD700"}
          >
            15+
          </Heading>
          <Text color={{ _dark: "#CFCFCF", _light: "black" }}>
            Years of experience
          </Text>
        </Stack>
        <Stack
          id="stack-line"
          //   className="fancy-frame"
          alignItems={"center"}
          borderTopWidth={"2px"}
          borderTopStyle={"solid"}
          borderTopColor={"transparent"}
          p={"2rem 2.5rem"}
          w={"20%"}
          borderRadius={".6rem"}
          borderImage={
            "linear-gradient(to right,transparent 10%, #50C878, transparent 90%) 1 1 1 1/ 1.5px 1px 1.5px 1px / 0;"
          }
          //   border={'1px solid red'}
        >
          <Heading
            fontSize={"3xl"}
            className="red-hat-display-bold"
            color={"#50C878"}
          >
            25+
          </Heading>
          <Text color={{ _dark: "#CFCFCF", _light: "black" }}>
            Tech Courses
          </Text>
        </Stack>
        <Stack
          id="stack-line"
          //   className="fancy-frame"
          alignItems={"center"}
          borderTopWidth={"2px"}
          borderTopStyle={"solid"}
          borderTopColor={"transparent"}
          w={"20%"}
          p={"2rem 2.5rem"}
          borderRadius={".6rem"}
          borderImage={
            "linear-gradient(to right,transparent 10%, #FF9F24, transparent 90%) 1 1 1 1/ 1.5px 1px 1.5px 1px / 0;"
          }
          //   border={'1px solid red'}
        >
          <Heading
            fontSize={"3xl"}
            className="red-hat-display-bold"
            color={"#FF9F24"}
          >
            100%
          </Heading>
          <Text color={{ _dark: "#CFCFCF", _light: "black" }}>
            Industry Impact
          </Text>
        </Stack>
      </HStack>
    </Box>
  );
};

export default About;
