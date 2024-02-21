import { Flex } from "@chakra-ui/react";
import ImageCard from "../components/imageCard";
import { copas, espadas, ouros, paus } from "../utils";
import { ContainerHomePage } from "./style";
import fundoVerde from "../assets/fundo_verde.jpg";

const Home = () => {
  return (
    <Flex
      alignItems={"flex-start"}
      bgImage={fundoVerde}
      bgSize={"200%"}
      bgPos={"center center"}
      bgRepeat={"no-repeat"}
      h={"100vh"}
      py={5}
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
    </Flex>
  );
};

export default Home;
