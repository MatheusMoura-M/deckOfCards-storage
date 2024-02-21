import { Button, Flex, useDisclosure } from "@chakra-ui/react";
import { useRef } from "react";
import fundoVerde from "../assets/fundo_verde.jpg";
import DrawerChoice from "../components/drawerChoice";
import ImageCard from "../components/imageCard";
import { copas, espadas, ouros, paus } from "../utils";
import { ContainerHomePage } from "./style";

const Home = () => {
  const { onOpen, isOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement>(null);

  return (
    <Flex
      flexDir={"column"}
      alignItems={"flex-start"}
      bgImage={fundoVerde}
      bgSize={"200%"}
      bgPos={"center center"}
      bgRepeat={"no-repeat"}
      h={"100vh"}
      gap={10}
      p={5}
    >
      <ContainerHomePage>
        <Flex
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          overflowY={"auto"}
          maxH={400}
          flexWrap={"wrap"}
        >
          <h2>Copas: </h2>
          {copas.map((image, i) => (
            <ImageCard key={i} image={image} />
          ))}
        </Flex>

        <Flex
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          maxH={400}
          flexWrap={"wrap"}
        >
          <h2>Ouros: </h2>
          {ouros.map((image, i) => (
            <ImageCard key={i} image={image} />
          ))}
        </Flex>

        <Flex
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          overflowY={"auto"}
          maxH={400}
          flexWrap={"wrap"}
        >
          <h2>Paus: </h2>
          {paus.map((image, i) => (
            <ImageCard key={i} image={image} />
          ))}
        </Flex>

        <Flex
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          overflowY={"auto"}
          maxH={400}
          flexWrap={"wrap"}
        >
          <h2>Espadas: </h2>
          {espadas.map((image, i) => (
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
