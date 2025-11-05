import { Card, Heading, Image, Text, HStack, Stack } from "@chakra-ui/react";

interface Course {
  id: number;
  name: string;
  description: string;
  duration: string;
  Price: string;
  img: string;
}

interface Props {
  product: Course;
}

const ProductCard = ({ product }: Props) => {
  return (
    <>
      <Card.Root borderRadius={"1rem"} overflow={"hidden"}>
        <Image h={"14rem"} src={product.img} w={"100%"} objectFit={"cover"} />
        <Card.Body p={"1rem"}>
          <Stack>
            <HStack justifyContent={"space-between"}>
              <Heading fontWeight={"700"} fontSize={"xl"}>
                {product.name}
              </Heading>
              <Text
                color={{ _dark: "#c4c4c4ff", _light: "gray.500" }}
                fontSize={"md"}
                p={".2rem .7rem"}
                borderRadius={".5rem"}
                bg={"#1A1919"}
                fontWeight={'700'}
              >
                {product.duration}
              </Text>
            </HStack>
            <Text maxW={"30ch"}>{product.description}</Text>
            <Heading>{product.Price}</Heading>
          </Stack>
        </Card.Body>
      </Card.Root>
    </>
  );
};

export default ProductCard;
