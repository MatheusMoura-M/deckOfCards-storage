import { Flex } from "@chakra-ui/react";
import ImageCard from "../components/imageCard";
import { copas, espadas, ouros, paus } from "../utils";
import { ContainerHomePage } from "./style";

const Home = () => {
  return (
    <ContainerHomePage>
      <h2>Copas: </h2>
      <Flex
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        overflowY={"auto"}
        maxH={400}
        flexWrap={"wrap"}
      >
        {copas.map((image, i) => (
          <ImageCard key={i} image={image} />
        ))}
      </Flex>
      <h2>Ouros: </h2>
      <Flex
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        maxH={400}
        flexWrap={"wrap"}
      >
        {ouros.map((image, i) => (
          <ImageCard key={i} image={image} />
        ))}
      </Flex>
      <h2>Paus: </h2>
      <Flex
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        overflowY={"auto"}
        maxH={400}
        flexWrap={"wrap"}
      >
        {paus.map((image, i) => (
          <ImageCard key={i} image={image} />
        ))}
      </Flex>

      <h2>Espadas: </h2>
      <Flex
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        overflowY={"auto"}
        maxH={400}
        flexWrap={"wrap"}
      >
        {espadas.map((image, i) => (
          <ImageCard key={i} image={image} />
        ))}
      </Flex>
    </ContainerHomePage>
  );
};

export default Home;
