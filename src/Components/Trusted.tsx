import { Box, Button, Heading, HStack, Stack, Text } from "@chakra-ui/react";

const Trusted = () => {
  return (
    <Box my={"4rem"} p={{ mdDown: "0 1rem" }}>
      <Stack gap={"1.5rem"} alignItems={"center"}>
        <Heading
          fontSize={{ mdTo2xl: "2xl", mdDown: "xl" }}
          backgroundImage={"linear-gradient(to right, #c50404ff, #000)"}
          backgroundClip={"text"}
          textAlign={"center"}
          className="red-hat-display-bold"
        >
          Recognized by Professionals
        </Heading>
        <Heading
          textAlign={"center"}
          className="red-hat-display-bold"
          fontSize={{ mdTo2xl: "4xl", mdDown: "2xl" }}
        >
          Trusted by Employees at Leading Companies
        </Heading>

        <Text
          color={{ _dark: "#c4c4c4ff", _light: "gray.500" }}
          fontSize={{ mdTo2xl: "xl", mdDown: "larger" }}
          textAlign={"center"}
          maxW={"40ch"}
        >
          Our courses are used by professionals from top companies like MTN,
          NNPC, and Huawei, helping them sharpen their skills and stay ahead in
          their fields.
        </Text>
        <HStack gap={{mdTo2xl : "1.2rem", mdDown : '.8rem'}}>
          <Button
            borderRadius={"2rem"}
            bg={"#c50404ff"}
            color={"#e3e3e3"}
            fontWeight={"700"}
            p={".7rem 1rem"}
            fontSize={{ mdTo2xl: "1.1rem", mdDown: "md" }}
          >
            Browse Courses
          </Button>
          <Button
            fontWeight={"700"}
            fontSize={{ mdTo2xl: "1.1rem", mdDown: "md" }}
            borderRadius={"2rem"}
            p={".7rem 1rem"}
          >
            Join for Free
          </Button>
        </HStack>
      </Stack>
    </Box>
  );
};

export default Trusted;
