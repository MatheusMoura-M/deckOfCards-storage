import { Button, Flex, Text } from "@chakra-ui/react";
import { ReactNode } from "react";
import { allSymbols } from "../../utils";
import { useWeb } from "../../context/webContext";

interface iHandleCards {
  children: ReactNode;
  isJoker?: boolean;
  suit: string;
}

const RenderCards = ({ children, isJoker, suit }: iHandleCards) => {
  const { handleIncreaseCards, handleDecreaseCards } = useWeb();

  return (
    <Flex
      gap={2}
      flexWrap={"wrap"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      {isJoker ? (
        <Flex
          gap={1}
          flexDir={"column"}
          w={"19%"}
          alignItems={"center"}
          mr={2.5}
        >
          <Flex alignItems={"center"} gap={"3px"}>
            {children}
          </Flex>
          <Flex gap={2}>
            <Button
              minW={"14px"}
              w={"38px"}
              h={"35px"}
              p={0}
              fontSize={17}
              borderRadius={3}
              onClick={() => {
                handleDecreaseCards("joker", suit);
              }}
            >
              -
            </Button>
            <Button
              minW={"14px"}
              w={"38px"}
              h={"35px"}
              p={0}
              fontSize={17}
              borderRadius={3}
              onClick={() => {
                handleIncreaseCards("joker", suit);
              }}
            >
              +
            </Button>
          </Flex>
        </Flex>
      ) : (
        allSymbols.map((symbol, i) => (
          <Flex
            key={i}
            gap={1}
            flexDir={"column"}
            w={"19%"}
            alignItems={"center"}
            mr={2.5}
          >
            <Flex alignItems={"center"} gap={"3px"}>
              <Text fontSize={25}>{symbol}</Text>
              {children}
            </Flex>
            <Flex gap={2}>
              <Button
                minW={"14px"}
                w={"38px"}
                h={"35px"}
                p={0}
                fontSize={17}
                borderRadius={3}
                onClick={() => {
                  const nameImage = `${suit}${symbol}`;
                  handleDecreaseCards(nameImage, suit);
                }}
              >
                -
              </Button>
              <Button
                minW={"14px"}
                w={"38px"}
                h={"35px"}
                p={0}
                fontSize={17}
                borderRadius={3}
                onClick={() => {
                  const nameImage = `${suit}${symbol}`;
                  handleIncreaseCards(nameImage, suit);
                }}
              >
                +
              </Button>
            </Flex>
          </Flex>
        ))
      )}
    </Flex>
  );
};

export default RenderCards;