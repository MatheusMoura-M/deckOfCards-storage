import { Button, Flex, Text } from "@chakra-ui/react";
import { ReactNode } from "react";
import { allSymbols } from "../../utils";

interface iHandleCards {
  children: ReactNode;
  isJoker?: boolean;
}

const HandleCards = ({ children, isJoker }: iHandleCards) => {
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
              w={"30px"}
              h={"30px"}
              p={0}
              fontSize={17}
              borderRadius={3}
            >
              +
            </Button>
            <Button
              minW={"14px"}
              w={"30px"}
              h={"30px"}
              p={0}
              fontSize={17}
              borderRadius={3}
            >
              -
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
                w={"30px"}
                h={"30px"}
                p={0}
                fontSize={17}
                borderRadius={3}
              >
                +
              </Button>
              <Button
                minW={"14px"}
                w={"30px"}
                h={"30px"}
                p={0}
                fontSize={17}
                borderRadius={3}
              >
                -
              </Button>
            </Flex>
          </Flex>
        ))
      )}
    </Flex>
  );
};

export default HandleCards;
