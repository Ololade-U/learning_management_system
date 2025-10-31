import { Box, Heading, HStack, Image, Stack, Text } from "@chakra-ui/react";
import { MdVideoLibrary } from "react-icons/md";
import structure from "../assets/Structure.webp";
import straight from "../assets/Straightforward.webp";
import deep from "../assets/Deep.webp";
import real from "../assets/RealWorld.webp";
import experience from "../assets/Experience.webp";
import { FaClock } from "react-icons/fa6";
import { TiSpanner } from "react-icons/ti";
import { TfiWorld } from "react-icons/tfi";
import { FaUsers } from "react-icons/fa";

const Learn = () => {
  return (
    <Box
      mb={"4rem"}
      mt={{ mdDown: "15rem" }}
      display={"flex"}
      flexDirection={"column"}
      gap={{mdTo2xl : "6rem", mdDown : '4rem'}}
    >
      <Stack gap={"1.5rem"}>
        <Heading
          fontSize={{ mdTo2xl: "2xl", mdDown: "xl" }}
          backgroundImage={"linear-gradient(to right, #c50404ff, #ffffff)"}
          backgroundClip={"text"}
          textAlign={"center"}
          className="red-hat-display-bold"
        >
          Why You'll Love Learning Here
        </Heading>
        <Heading
          textAlign={"center"}
          className="red-hat-display-bold"
          fontSize={{ mdTo2xl: "4xl", mdDown: "2xl" }}
        >
          Quality, Structure, and Real Results
        </Heading>
      </Stack>
      <HStack
        justifyContent={"center"}
        gap={"7rem"}
        flexDirection={{ mdDown: "column" }}
        px={{ mdDown: "2rem" }}
      >
        <Stack gap={"1rem"}>
          <Box
            p={".6rem .5rem"}
            w={"3rem"}
            borderRadius={"50%"}
            bg={"rgba(124, 6, 6, .2)"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <MdVideoLibrary fill="#7c0606" size={"1.5rem"} />
          </Box>
          <Text
            backgroundImage={"linear-gradient(to right, #c50404ff, #e3e3e3)"}
            backgroundClip={"text"}
            fontSize={{mdTo2xl : "xl", mdDown : 'larger'}}
            className="red-hat-display-bold"
          >
            A clear path to master coding
          </Text>
          <Heading
            fontSize={{ mdTo2xl: "3xl", mdDown: "2xl" }}
            className="red-hat-display-bold"
          >
            Perfectly Structured Courses
          </Heading>
          <Text
            maxW={"35ch"}
            fontSize={{mdTo2xl : "xl", mdDown : 'larger'}}
            color={{ _dark: "#c4c4c4ff", _light: "gray.500" }}
          >
            No more jumping between random YouTube tutorials. Follow a clear,
            logical path designed to build your skills step-by-step.
          </Text>
        </Stack>
        <Image src={structure} h={{ mdTo2xl: "20rem", mdDown: "10rem" }} />
      </HStack>
      <HStack
        justifyContent={"center"}
        gap={"7rem"}
        flexDirection={{ mdDown: "column-reverse" }}
        px={{ mdDown: "2rem" }}
      >
        <Image src={straight} h={{ mdTo2xl: "20rem", mdDown: "10rem" }} />
        <Stack gap={"1rem"}>
          <Box
            p={".6rem .5rem"}
            w={"3rem"}
            borderRadius={"50%"}
            bg={"rgba(124, 6, 6, .2)"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <FaClock fill="#7c0606" size={"1.5rem"} />
          </Box>
          <Text
            backgroundImage={"linear-gradient(to right, #c50404ff, #e3e3e3)"}
            backgroundClip={"text"}
            fontSize={{mdTo2xl : "xl", mdDown : 'larger'}}
            className="red-hat-display-bold"
          >
            Straightforward and to the point
          </Text>
          <Heading
            className="red-hat-display-bold"
            fontSize={{ mdTo2xl: "3xl", mdDown: "2xl" }}
          >
            Clear and Bite-Sized Lessons
          </Heading>
          <Text
            maxW={"35ch"}
            fontSize={{mdTo2xl : "xl", mdDown : 'larger'}}
            color={{ _dark: "#c4c4c4ff", _light: "gray.500" }}
          >
            Each lesson is focused and fluff-free, so you can make real
            progress—even with a busy schedule. Get exactly what you need
            without wasting a minute.
          </Text>
        </Stack>
      </HStack>
      <HStack
        justifyContent={"center"}
        gap={"7rem"}
        flexDirection={{ mdDown: "column" }}
        px={{ mdDown: "2rem" }}
      >
        <Stack gap={"1rem"}>
          <Box
            p={".6rem .5rem"}
            w={"3rem"}
            borderRadius={"50%"}
            bg={"rgba(124, 6, 6, .2)"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <TiSpanner fill="#7c0606" size={"1.5rem"} />
          </Box>
          <Text
            backgroundImage={"linear-gradient(to right, #c50404ff, #e3e3e3)"}
            backgroundClip={"text"}
            fontSize={{mdTo2xl : "xl", mdDown : 'larger'}}
            className="red-hat-display-bold"
          >
            Deep understanding, not just shortcuts
          </Text>
          <Heading
            className="red-hat-display-bold"
            fontSize={{ mdTo2xl: "3xl", mdDown: "2xl" }}
          >
            More than Just Code
          </Heading>
          <Text
            maxW={"35ch"}
            fontSize={{mdTo2xl : "xl", mdDown : 'larger'}}
            color={{ _dark: "#c4c4c4ff", _light: "gray.500" }}
          >
            We go beyond the “what” and show you the “why” and “how” behind
            every concept, so you can code with real understanding.
          </Text>
        </Stack>
        <Image src={deep} h={{ mdTo2xl: "20rem", mdDown: "10rem" }} />
      </HStack>
      <HStack
        justifyContent={"center"}
        gap={"7rem"}
        flexDirection={{ mdDown: "column-reverse" }}
        px={{ mdDown: "2rem" }}
      >
        <Image src={real} h={{ mdTo2xl: "20rem", mdDown: "10rem" }} />
        <Stack gap={"1rem"}>
          <Box
            p={".6rem .5rem"}
            w={"3rem"}
            borderRadius={"50%"}
            bg={"rgba(124, 6, 6, .2)"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <TfiWorld fill="#7c0606" size={"1.5rem"} />
          </Box>
          <Text
            backgroundImage={"linear-gradient(to right, #c50404ff, #e3e3e3)"}
            backgroundClip={"text"}
            fontSize={{mdTo2xl : "xl", mdDown : 'larger'}}
            className="red-hat-display-bold"
          >
            Get ready for real-world work
          </Text>
          <Heading
            className="red-hat-display-bold"
            fontSize={{ mdTo2xl: "3xl", mdDown: "2xl" }}
          >
            Hands-on Projects You'll Love
          </Heading>
          <Text
            maxW={"35ch"}
            fontSize={{mdTo2xl : "xl", mdDown : 'larger'}}
            color={{ _dark: "#c4c4c4ff", _light: "gray.500" }}
          >
            We’ll build real-world projects together, giving you the confidence
            to tackle real challenges on the job.
          </Text>
        </Stack>
      </HStack>
      <HStack
        justifyContent={"center"}
        gap={"7rem"}
        flexDirection={{ mdDown: "column" }}
        px={{ mdDown: "2rem" }}
      >
        <Stack gap={"1rem"} ml={{ mdTo2xl: "2rem" }}>
          <Box
            p={".6rem .5rem"}
            w={"3rem"}
            borderRadius={"50%"}
            bg={"rgba(124, 6, 6, .2)"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <FaUsers fill="#7c0606" size={"1.5rem"} />
          </Box>
          <Text
            backgroundImage={"linear-gradient(to right, #c50404ff, #e3e3e3)"}
            backgroundClip={"text"}
            fontSize={{mdTo2xl : "xl", mdDown : 'larger'}}
            className="red-hat-display-bold"
          >
            Decades of coding, shared with you
          </Text>
          <Heading
            className="red-hat-display-bold"
            fontSize={{ mdTo2xl: "3xl", mdDown: "2xl" }}
          >
            Built on 20+ Years of Experience
          </Heading>
          <Text
            maxW={"35ch"}
            fontSize={{mdTo2xl : "xl", mdDown : 'larger'}}
            color={{ _dark: "#c4c4c4ff", _light: "gray.500" }}
          >
            With over two decades in the industry, We've seen it all. I'll share
            insights and lessons that you won't find in any textbook.
          </Text>
        </Stack>
        <Image src={experience} h={{ mdTo2xl: "20rem", mdDown: "10rem" }} />
      </HStack>
    </Box>
  );
};

export default Learn;
