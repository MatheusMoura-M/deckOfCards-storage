import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Text,
} from "@chakra-ui/react";
import { GiCardJoker } from "react-icons/gi";
import { ImClubs, ImDiamonds, ImHeart, ImSpades } from "react-icons/im";
import HandleCards from "../handleCards";

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
            gap={3}
            maxH={200}
            overflowY={"auto"}
            px={0}
          >
            {/* Copas */}
            <Text w={"100%"} borderBottom={"1px solid"} textAlign={"center"}>
              Copas
            </Text>
            <HandleCards>
              <ImHeart color="red" />
            </HandleCards>
            {/* Paus */}
            <Text w={"100%"} borderBottom={"1px solid"} textAlign={"center"}>
              Paus
            </Text>
            <HandleCards>
              <ImClubs />
            </HandleCards>
            {/* Espadas */}
            <Text w={"100%"} borderBottom={"1px solid"} textAlign={"center"}>
              Espadas
            </Text>
            <HandleCards>
              <ImSpades />
            </HandleCards>
            {/* Ouros */}
            <Text w={"100%"} borderBottom={"1px solid"} textAlign={"center"}>
              Ouros
            </Text>
            <HandleCards>
              <ImDiamonds color="red" />
            </HandleCards>
            {/* Coringa */}
            <Text w={"100%"} borderBottom={"1px solid"} textAlign={"center"}>
              Coringa
            </Text>
            <HandleCards isJoker={true}>
              <GiCardJoker color="purple" size={22} />
            </HandleCards>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default DrawerChoice;
