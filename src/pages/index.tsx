import { Button, Flex, useDisclosure } from "@chakra-ui/react";
import { useRef } from "react";
import fundoVerde from "../assets/fundo_verde.jpg";
import DrawerChoice from "../components/drawerChoice";
import ImageCard from "../components/imageCard";
import { ContainerHomePage } from "./style";
import { useWeb } from "../context/webContext";

const Home = () => {
  const { copas, espadas, paus, ouros, coringas } = useWeb();
  const { onOpen, isOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement>(null);

  return (
    <Flex
      flexDir={"column"}
      alignItems={"flex-start"}
      bgImage={fundoVerde}
      bgSize={"250%"}
      bgPos={"center center"}
      bgRepeat={"no-repeat"}
      h={"100vh"}
      gap={7}
      p={5}
    >
      <ContainerHomePage>
        <Flex
          display={"flex"}
          justifyContent={"flex-start"}
          alignItems={"center"}
          overflowX={"auto"}
        >
          {copas.map((image, i) => (
            <ImageCard key={i} image={image} />
          ))}
        </Flex>

        <Flex
          display={"flex"}
          justifyContent={"flex-start"}
          alignItems={"center"}
          overflowX={"auto"}
        >
          {ouros.map((image, i) => (
            <ImageCard key={i} image={image} />
          ))}
        </Flex>

        <Flex
          display={"flex"}
          justifyContent={"flex-start"}
          alignItems={"center"}
          overflowX={"auto"}
        >
          {paus.map((image, i) => (
            <ImageCard key={i} image={image} />
          ))}
        </Flex>

        <Flex
          display={"flex"}
          justifyContent={"flex-start"}
          alignItems={"center"}
          overflowX={"auto"}
        >
          {espadas.map((image, i) => (
            <ImageCard key={i} image={image} />
          ))}
        </Flex>
        <Flex
          display={"flex"}
          justifyContent={"flex-start"}
          alignItems={"center"}
          overflowX={"auto"}
        >
          {coringas.map((image, i) => (
            <ImageCard key={i} image={image} />
          ))}
        </Flex>
      </ContainerHomePage>
      <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
        Open
      </Button>

      <DrawerChoice btnRef={btnRef} isOpen={isOpen} onClose={onClose} />
    </Flex>
  );
};

export default Home;
