import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Text,
} from "@chakra-ui/react";
import { GiCardJoker } from "react-icons/gi";
import { ImClubs, ImDiamonds, ImHeart, ImSpades } from "react-icons/im";
import RenderCards from "../renderCards";

interface iDrawerChoice {
  btnRef: React.RefObject<HTMLButtonElement>;
  isOpen: boolean;
  onClose: () => void;
}

const DrawerChoice = ({ btnRef, isOpen, onClose }: iDrawerChoice) => {
  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="bottom"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bg={"#658565"}>
          <DrawerBody
            display={"flex"}
            flexDir={"column"}
            gap={4}
            maxH={403}
            overflowY={"auto"}
            px={0}
          >
            {/* Copas */}
            <Text
              w={"100%"}
              fontSize={22}
              fontWeight={700}
              borderBottom={"1px solid"}
              textAlign={"center"}
            >
              Copas
            </Text>
            <RenderCards suit={"copas"}>
              <ImHeart color="red" />
            </RenderCards>
            {/* Paus */}
            <Text
              w={"100%"}
              fontSize={22}
              fontWeight={700}
              borderBottom={"1px solid"}
              textAlign={"center"}
            >
              Paus
            </Text>
            <RenderCards suit={"paus"}>
              <ImClubs />
            </RenderCards>
            {/* Espadas */}
            <Text
              w={"100%"}
              fontSize={22}
              fontWeight={700}
              borderBottom={"1px solid"}
              textAlign={"center"}
            >
              Espadas
            </Text>
            <RenderCards suit={"espadas"}>
              <ImSpades />
            </RenderCards>
            {/* Ouros */}
            <Text
              w={"100%"}
              fontSize={22}
              fontWeight={700}
              borderBottom={"1px solid"}
              textAlign={"center"}
            >
              Ouros
            </Text>
            <RenderCards suit={"ouros"}>
              <ImDiamonds color="red" />
            </RenderCards>
            {/* Coringa */}
            <Text
              w={"100%"}
              fontSize={22}
              fontWeight={700}
              borderBottom={"1px solid"}
              textAlign={"center"}
            >
              Coringa
            </Text>
            <RenderCards suit={"joker"} isJoker={true}>
              <GiCardJoker color="purple" size={22} />
            </RenderCards>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default DrawerChoice;
