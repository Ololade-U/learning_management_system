import front from "../assets/Front-end.svg";
import back from "../assets/Back-end.svg";
import game from "../assets/Game.svg";
import fundamental from "../assets/Fundamentals.svg";
import mobile from "../assets/Mobile dev.svg";
import { Stack, Heading, SimpleGrid } from "@chakra-ui/react";
import PathCard from "./PathCard";

const LearningPath = () => {
  const Path = [
    {
      id: 1,
      name: "Fundamentals",
      description:
        "Essential courses that anyone pursuing a career as a professional software engineer should take. Data structures, algorithms, design patterns, and more!",
      img: fundamental, 
    },
    {
      id: 2,
      name: "Front-end Development",
      description:
        "All the courses you need to build beautiful websites. HTML, CSS, JavaScript, React, and more!",
      img: front,
    },
    {
      id: 3,
      name: "Back-end Development",
      description:
        "All the courses you need to build powerful APIs for web and mobile apps. Node, Django, ASP.NET MVC, MySQL, and more!",
      img: back,
    },
    {
      id: 4,
      name: "Mobile Development",
      description:
        "All the courses you need to build professional, cross-platform mobile apps using React Native.",
      img: mobile,
    },
    {
      id: 5,
      name: "Cyber Security",
      description:
        "Master essential network security, ethical hacking, and incident response. Get certified.",
      img: game,
    },
  ];
  return (
    <>
      <Stack
        p={{ mdTo2xl: "0 5rem", mdDown: "0 1rem" }}
        gap={"2rem"}
        pos={"relative"}
        top={"15vh"}
        pt={{ mdTo2xl: "2.5rem", mdDown: "3rem" }}
        mb={"7rem"}
      >
        <Heading
          fontSize={{ mdTo2xl: "5xl", mdDown: "3xl" }}
          textAlign={"center"}
          className="red-hat-display-bold"
          fontWeight={"700"}
        >
          No More Guesswork
        </Heading>
        <Heading
          fontSize={{ mdTo2xl: "3xl", mdDown: "xl" }}
          textAlign={"center"}
          className="red-hat-display-bold"
          fontWeight={"400"}
          mt={".5rem"}
          color={{ _dark: "#c4c4c4ff", _light: "gray.500" }}
        >
          Follow a proven path to build real coding skills and land your dream
          job.
        </Heading>
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xlTo2xl: 3 }} gap={"1rem"}>
          {Path.map((product) => (
            <PathCard key={product.id} product={product} />
          ))}
        </SimpleGrid>
      </Stack>
    </>
  );
};

export default LearningPath;
