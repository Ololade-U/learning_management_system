import { useObserve } from "../hooks/Observe";
import { Box, Heading, HStack, Separator, Stack, Text } from "@chakra-ui/react";

const About = () => {
  const { componentRef, isInView } = useObserve();
  return (
    <>
      <Box
        ref={componentRef}
        pos={"relative"}
        top={"15vh"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        gap={"2.5rem"}
        w={"100%"}
        h={"100vh"}
        pt={"3rem"}
        bg={{ _light: "#ffffffff" }}
        mb={"2rem"}
        px={{ mdDown: "1rem" }}
        data-state={isInView ? "open" : "close"}
        _open={{
          animation: "up 1s ease-out",
          animationFillMode: "forwards",
        }}
      >
        <Heading
          textAlign={"center"}
          fontSize={{ mdTo2xl: "4xl", mdDown: "2xl" }}
          className="red-hat-display-bold"
        >
          About Us
        </Heading>
        <Text
          color={{ _dark: "#c4c4c4ff", _light: "gray.500" }}
          fontSize={{ mdTo2xl: "xl", mdDown: "sm" }}
          mb={"2rem"}
          textAlign={"center"}
          maxW={{ mdTo2xl: "80ch", mdDown: "100ch" }}
          pos={'relative'}
          top={'4vh'}
          data-state={isInView ? "open" : "close"}
          opacity={0}
          _open={{
            animation: "appear 1s linear",
            animationDelay: ".3s",
            animationFillMode: "forwards",
          }}
        >
          Arravo Academy is dedicated to delivering world-class digital and
          business education, equipping young people with the skills needed for
          the future. Through programs like IT Training and Placement, Arravo
          Business Masterclasses, versatile Spaces & Events, and the engaging
          Arravo Kids & Teens, the Academy creates pathways to success across
          age groups and experience levels. Each program is designed to foster
          real-world skills, industry knowledge, and personal growth, preparing
          participants for the competitive landscape ahead.
        </Text>
        <HStack
          mb={"2rem"}
          gap={{ mdTo2xl: "1rem", mdDown: "2.5rem" }}
          w={"100%"}
          alignItems={{ mdDown: "center" }}
          flexDirection={{ mdDown: "column" }}
          justifyContent={"center"}
        >
          <HStack
            w={"100%"}
            justifyContent={{ mdTo2xl: "flex-end", mdDown: "center" }}
          >
            <Stack
              alignItems={"center"}
              border={"1.5px solid #212121ff"}
              p={"2rem 2.5rem"}
              w={{ mdTo2xl: "40%", mdDown: "50%" }}
              borderRadius={".6rem"}
              borderImage={
                "linear-gradient(to right,transparent 10%, #c20808ff, transparent 90%) 1 1 1 1/ 1.5px 1px 1px 1px / 0;"
              }
              //   bg={{_light: '#f2f2f2ff'}}
            >
              <Heading
                fontSize={{ mdTo2xl: "3xl", mdDown: "xl" }}
                className="red-hat-display-bold"
                color={"#c20808ff"}
              >
                50k+
              </Heading>
              <Text
                fontSize={{ mdDown: "xs" }}
                color={{ _dark: "#CFCFCF", _light: "black" }}
                textWrap={"nowrap"}
              >
                Students taught
              </Text>
            </Stack>
            <Stack
              alignItems={"center"}
              border={"1.5px solid #212121ff"}
              p={"2rem 2.5rem"}
              borderRadius={".6rem"}
              w={{ mdTo2xl: "40%", mdDown: "50%" }}
              borderImage={
                "linear-gradient(to right,transparent 10%, #FFD700, transparent 90%) 1 1 1 1/ 1.5px 1px 1px 1px / 0;"
              }
            >
              <Heading
                fontSize={{ mdTo2xl: "3xl", mdDown: "xl" }}
                className="red-hat-display-bold"
                color={"#FFD700"}
              >
                15+
              </Heading>
              <Text
                fontSize={{ mdDown: "xs" }}
                color={{ _dark: "#CFCFCF", _light: "black" }}
                textWrap={"nowrap"}
              >
                Years of experience
              </Text>
            </Stack>
          </HStack>
          <HStack
            w={"100%"}
            justifyContent={{ mdTo2xl: "flex-start", mdDown: "center" }}
          >
            <Stack
              id="stack-line"
              //   className="fancy-frame"
              alignItems={"center"}
              borderTopWidth={"2px"}
              borderTopStyle={"solid"}
              borderTopColor={"transparent"}
              p={"2rem 2.5rem"}
              w={{ mdTo2xl: "40%", mdDown: "50%" }}
              borderRadius={".6rem"}
              borderImage={
                "linear-gradient(to right,transparent 10%, #50C878, transparent 90%) 1 1 1 1/ 1.5px 1px 1.5px 1px / 0;"
              }
              //   border={'1px solid red'}
            >
              <Heading
                fontSize={{ mdTo2xl: "3xl", mdDown: "xl" }}
                className="red-hat-display-bold"
                color={"#50C878"}
              >
                25+
              </Heading>
              <Text
                fontSize={{ mdDown: "xs" }}
                color={{ _dark: "#CFCFCF", _light: "black" }}
                textWrap={"nowrap"}
              >
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
              w={{ mdTo2xl: "40%", mdDown: "50%" }}
              p={"2rem 2.5rem"}
              borderRadius={".6rem"}
              borderImage={
                "linear-gradient(to right,transparent 10%, #FF9F24, transparent 90%) 1 1 1 1/ 1.5px 1px 1.5px 1px / 0;"
              }
              //   border={'1px solid red'}
            >
              <Heading
                fontSize={{ mdTo2xl: "3xl", mdDown: "xl" }}
                className="red-hat-display-bold"
                color={"#FF9F24"}
              >
                100%
              </Heading>
              <Text
                fontSize={{ mdDown: "xs" }}
                color={{ _dark: "#CFCFCF", _light: "black" }}
                textWrap={"nowrap"}
              >
                Industry Impact
              </Text>
            </Stack>
          </HStack>
        </HStack>
        <Separator
          mb={{ mdDown: "4rem" }}
          w={"100%"}
          size={"md"}
          colorPalette={"blue"}
        />
      </Box>
    </>
  );
};

export default About;
