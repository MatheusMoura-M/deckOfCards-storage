import { Flex, Image } from "@chakra-ui/react";

interface iImageCard {
  image: string;
}

const ImageCard = ({ image }: iImageCard) => {
  return (
    <Flex as="figure" w={78}>
      <Image src={image} />
    </Flex>
  );
};

export default ImageCard;
