import { Flex, Image } from "@chakra-ui/react";

interface iImageCard {
  image: string;
}

const ImageCard = ({ image }: iImageCard) => {
  return (
    <Flex as="figure" minW={55} w={55} maxH={79} mr={1}>
      <Image src={image} />
    </Flex>
  );
};

export default ImageCard;
