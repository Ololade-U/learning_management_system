import {
  Field,
  Heading,
  HStack,
  Input,
  NativeSelect,
  SimpleGrid,
  Stack,
} from "@chakra-ui/react";
import python from "../assets/Python.webp";
import react from "../assets/React.webp";
import sql from "../assets/Sql.webp";
import Next from "../assets/NextJS.webp";
import js from "../assets/Js.webp";
import html from "../assets/Html.webp";
import git from "../assets/Git.webp";
import django from "../assets/Django.webp";
import ProductCard from "./ProductCard";
import Footer from "./Footer";

const Courses = () => {
  const Courses = [
    {
      id: 1,
      name: "Complete Python Mastery",
      description:
        "Everything you need to program in Python in one course (includes 3 real-world projects)",
      Price: "NGN 57,000",
      duration: "11h",
      img: python,
    },
    {
      id: 2,
      name: "React 18 for  Beginners",
      description:
        "A step-by-step guide to building web apps with React 18+ and TypeScript",
      Price: "NGN 37,000",
      duration: "12h",
      img: react,
    },
    {
      id: 3,
      name: "Complete SQL Mastery",
      description:
        "Everything you need to design and query databases—without the fluff.",
      Price: "NGN 45,000",
      duration: "11h",
      img: sql,
    },
    {
      id: 4,
      name: "The Ultimate Next.js Series",
      description:
        "Everything you need to build fast, full-stack web apps with Next.js 13+ (App Router) and TypeScript",
      Price: "NGN 36,000",
      duration: "12h",
      img: Next,
    },
    {
      id: 5,
      name: "The Ultimate JavaScript Series",
      description:
        "Master JavaScript: Go from Novice to Professional. Everything you need to code in JavaScript in one bundle!",
      Price: "NGN 16,000",
      duration: "10h",
      img: js,
    },
    {
      id: 6,
      name: "The Ultimate Git Course",
      description:
        "Everything you need to know to use Git & GitHub to work effectively as a team",
      Price: "NGN 12,000",
      duration: "6h",
      img: git,
    },
    {
      id: 7,
      name: "The Ultimate HTML5 & CSS3 Series",
      description:
        "Everything you need to build fast and stunning websites with HTML5 and CSS3 in one bundle",
      Price: "NGN 36,000",
      duration: "14h",
      img: html,
    },
    {
      id: 8,
      name: "The Ultimate Django Series",
      description:
        "From zero to hero: Learn to build fast and secure APIs with Django and MySQL",
      Price: "NGN 36,000",
      duration: "14h",
      img: django,
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
          Build Real-World Skills
        </Heading>
        <Heading
          fontSize={{ mdTo2xl: "3xl", mdDown: "xl" }}
          textAlign={"center"}
          className="red-hat-display-bold"
          fontWeight={"400"}
          mt={".5rem"}
          color={{ _dark: "#c4c4c4ff", _light: "gray.500" }}
        >
          Master tech skills with structured courses designed to make you
          job-ready.
        </Heading>

        <HStack
          alignItems={"flex-start"}
          color={"white"}
          fontWeight={"600"}
          mt={"1.5rem"}
          w={"100%"}
          flexDirection={{ mdDown: "column" }}
        >
          <Field.Root w={{ mdTo2xl: "25%", mdDown: "100%" }}>
            <Input
              name="storeName"
              placeholder="Search"
              p={"0 .5rem"}
              bg={{ _dark: "#1C1C1C", _light: "#e3e3e3" }}
            />
          </Field.Root>
          <Field.Root
            w={{ mdTo2xl: "20%", mdDown: "40%" }}
            color={{ _dark: "white", _light: "black" }}
            fontWeight={"600"}
            bg={{ _dark: "#1C1C1C", _light: "#e3e3e3" }}
          >
            <NativeSelect.Root>
              <NativeSelect.Field
                name="LGA"
                placeholder="All Courses"
                p={"0 .5rem"}
              >
                {Courses.map((product) => (
                  <option key={product.id} value={product.name}>
                    {product.name}
                  </option>
                ))}
              </NativeSelect.Field>
              <NativeSelect.Indicator />
            </NativeSelect.Root>
          </Field.Root>
        </HStack>

        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xlTo2xl: 3 }} gap={"1rem"}>
          {Courses.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </SimpleGrid>
      </Stack>
      <Footer />
    </>
  );
};

export default Courses;
