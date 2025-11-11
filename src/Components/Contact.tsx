import { Flex, Heading, Stack, Text } from "@chakra-ui/react";

const Contact = () => {
  return (
    <>
      <Stack alignItems={"center"} pos={"relative"} top={"15vh"} p={"2rem"}>
        <Flex gap={"2rem"} flexDirection={"column"}>
          <Heading
            fontSize={{ mdTo2xl: "5xl", mdDown: "3xl" }}
            textAlign={"center"}
            className="red-hat-display-bold"
            fontWeight={"700"}
          >
            Contact Us
          </Heading>
          <Text
            fontSize={{ mdTo2xl: "3xl", mdDown: "xl" }}
            textAlign={"center"}
            className="red-hat-display-bold"
            fontWeight={"600"}
            mt={".5rem"}
            color={{ _dark: "#c4c4c4ff", _light: "gray.500" }}
          >
            We're here for you: Connect with us for any questions or concerns.
          </Text>
        </Flex>
        <Flex p={'2rem'} border={'1px solid #e3e3e3'} flexDirection={'column'} w={"70%"}>
          <Text>
            For technical questions, please post your questions on our forum
            where you can get help from fellow students.
          </Text>
          <Text>
            For course suggestions and career advice, check out our learning
            paths.
          </Text>
        </Flex>
      </Stack>
    </>
  );
};

export default Contact;
