import { Card, Heading, Image, Text, Stack } from "@chakra-ui/react";

interface Course {
  id: number;
  name: string;
  description: string;
  img: string;
}

interface Props {
  product: Course;
}

const PathCard = ({ product }: Props) => {
  return (
    <>
      <Card.Root
        cursor={"pointer"}
        borderRadius={"1rem"}
        overflow={"hidden"}
        _hover={{ border: "1px solid #e3e3e3"}}
        transitionProperty={'border'}
        transitionDuration={'.2s'}
      >
        <Image h={"14rem"} src={product.img} w={"100%"} objectFit={"cover"} />
        <Card.Body p={"1rem"}>
          <Stack>
            <Heading
              fontWeight={"700"}
              fontSize={{ mdTo2xl: "xl", mdDown: "lg" }}
            >
              {product.name}
            </Heading>
            <Text maxW={"30ch"}>{product.description}</Text>
          </Stack>
        </Card.Body>
      </Card.Root>
    </>
  );
};

export default PathCard;
