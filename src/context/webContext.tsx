// Importação das cartas de Copas
import copas1 from "../assets/copas1.svg";
import copas2 from "../assets/copas2.svg";
import copas3 from "../assets/copas3.svg";
import copas4 from "../assets/copas4.svg";
import copas5 from "../assets/copas5.svg";
import copas6 from "../assets/copas6.svg";
import copas7 from "../assets/copas7.svg";
import copas8 from "../assets/copas8.svg";
import copas9 from "../assets/copas9.svg";
import copas10 from "../assets/copas10.png";
import copasJ from "../assets/copasJ.png";
import copasQ from "../assets/copasQ.png";
import copasK from "../assets/copasK.png";
import copasA from "../assets/copasA.jpg";

// Importação das cartas de Ouros
import ouros1 from "../assets/ouros1.svg";
import ouros2 from "../assets/ouros2.svg";
import ouros3 from "../assets/ouros3.svg";
import ouros4 from "../assets/ouros4.svg";
import ouros5 from "../assets/ouros5.png";
import ouros6 from "../assets/ouros6.svg";
import ouros7 from "../assets/ouros7.svg";
import ouros8 from "../assets/ouros8.svg";
import ouros9 from "../assets/ouros9.svg";
import ouros10 from "../assets/ouros10.svg";
import ourosJ from "../assets/ourosJ.png";
import ourosQ from "../assets/ourosQ.png";
import ourosK from "../assets/ourosK.svg";
import ourosA from "../assets/ourosA.jpg";

// Importação das cartas de Paus
import paus1 from "../assets/paus1.png";
import paus2 from "../assets/paus2.svg";
import paus3 from "../assets/paus3.svg";
import paus4 from "../assets/paus4.svg";
import paus5 from "../assets/paus5.svg";
import paus6 from "../assets/paus6.svg";
import paus7 from "../assets/paus7.svg";
import paus8 from "../assets/paus8.svg";
import paus9 from "../assets/paus9.svg";
import paus10 from "../assets/paus10.svg";
import pausJ from "../assets/pausJ.svg";
import pausQ from "../assets/pausQ.png";
import pausK from "../assets/pausK.png";
import pausA from "../assets/pausA.jpg";

// Importação das cartas de Espadas
import espadas1 from "../assets/espadas1.svg";
import espadas2 from "../assets/espadas2.png";
import espadas3 from "../assets/espadas3.svg";
import espadas4 from "../assets/espadas4.svg";
import espadas5 from "../assets/espadas5.svg";
import espadas6 from "../assets/espadas6.svg";
import espadas7 from "../assets/espadas7.svg";
import espadas8 from "../assets/espadas8.svg";
import espadas9 from "../assets/espadas9.svg";
import espadas10 from "../assets/espadas10.svg";
import espadasJ from "../assets/espadasJ.png";
import espadasQ from "../assets/espadasQ.png";
import espadasK from "../assets/espadasK.png";
import espadasA from "../assets/espadasA.jpg";

// Importação do coringa
import joker from "../assets/joker.jpg";

import { createContext, useContext, useState } from "react";
import { iProviderProps } from "../interfaces";
import { iAuthProviderData } from "./interface";

export const WebContext = createContext<iAuthProviderData>(
  {} as iAuthProviderData
);
export const WebProvider = ({ children }: iProviderProps) => {
  const [copas, setCopas] = useState<string[]>([
    // copas1,
    // copas2,
    // copas3,
    // copas4,
    // copas5,
    // copas6,
    // copas7,
    // copas8,
    // copas9,
    // copas10,
    // copasJ,
    // copasQ,
    // copasK,
    // copasA,
  ]);

  const [ouros, setOuros] = useState<string[]>([
    // ouros1,
    // ouros2,
    // ouros3,
    // ouros4,
    // ouros5,
    // ouros6,
    // ouros7,
    // ouros8,
    // ouros9,
    // ouros10,
    // ourosJ,
    // ourosQ,
    // ourosK,
    // ourosA,
  ]);

  const [paus, setPaus] = useState<string[]>([
    // paus1,
    // paus2,
    // paus3,
    // paus4,
    // paus5,
    // paus6,
    // paus7,
    // paus8,
    // paus9,
    // paus10,
    // pausJ,
    // pausQ,
    // pausK,
    // pausA,
  ]);

  const [espadas, setEspadas] = useState<string[]>([
    // espadas1,
    // espadas2,
    // espadas3,
    // espadas4,
    // espadas5,
    // espadas6,
    // espadas7,
    // espadas8,
    // espadas9,
    // espadas10,
    // espadasJ,
    // espadasQ,
    // espadasK,
    // espadasA,
  ]);

  const [coringas, setCoringas] = useState<string[]>([joker]);

  const imageImports: { [key: string]: string } = {
    copas1,
    copas2,
    copas3,
    copas4,
    copas5,
    copas6,
    copas7,
    copas8,
    copas9,
    copas10,
    copasJ,
    copasQ,
    copasK,
    copasA,
    ouros1,
    ouros2,
    ouros3,
    ouros4,
    ouros5,
    ouros6,
    ouros7,
    ouros8,
    ouros9,
    ouros10,
    ourosJ,
    ourosQ,
    ourosK,
    ourosA,
    paus1,
    paus2,
    paus3,
    paus4,
    paus5,
    paus6,
    paus7,
    paus8,
    paus9,
    paus10,
    pausJ,
    pausQ,
    pausK,
    pausA,
    espadas1,
    espadas2,
    espadas3,
    espadas4,
    espadas5,
    espadas6,
    espadas7,
    espadas8,
    espadas9,
    espadas10,
    espadasJ,
    espadasQ,
    espadasK,
    espadasA,
    joker,
  };

  const getImportByName = (name: string) => {
    return imageImports[name];
  };

  const suitHandler: {
    [key: string]: React.Dispatch<React.SetStateAction<string[]>>;
  } = {
    copas: setCopas,
    paus: setPaus,
    ouros: setOuros,
    espadas: setEspadas,
    joker: setCoringas,
  };

  const cardOrder: { [key: string]: number } = {
    A: 1,
    "1": 2,
    "2": 3,
    "3": 4,
    "4": 5,
    "5": 6,
    "6": 7,
    "7": 8,
    "8": 9,
    "9": 10,
    "10": 11,
    J: 12,
    Q: 13,
    K: 14,
  };

  // Função para extrair o valor da carta do caminho do arquivo
  const extractCardValue = (cardPath: string) => {
    const parts = cardPath.startsWith("/assets/")
      ? cardPath.split("/assets/")[1].split("-")[0]
      : cardPath.split("/assets/")[1].split(".")[0];

    return parts.match(/\d+|[A-Z]+/gm)![0]; // Extrai números ou letras maiúsculas
  };

  const sortCards = (cards: string[]) => {
    const orderedCards = cards.sort((a, b) => {
      const aValue = extractCardValue(a);
      const bValue = extractCardValue(b);
      return cardOrder[aValue] - cardOrder[bValue];
    });

    const aceIndexes = orderedCards.reduce((acc: number[], card, index) => {
      if (extractCardValue(card) === "A") acc.push(index);
      return acc;
    }, [] as number[]);

    if (aceIndexes.length > 1) {
      const secondAceIndex = aceIndexes[1]; // Obtém o índice do segundo Ás
      const secondAce = orderedCards.splice(secondAceIndex, 1); // Remove o segundo Ás do array

      orderedCards.push(secondAce[0]); // Adiciona o segundo Ás removido ao final do array
    }

    return orderedCards;
  };

  const manipulationSplit = (value: string, withCondition?: string) => {
    if (withCondition) {
      const valueFormatted =
        withCondition === "/assets/"
          ? value.split("/assets/")[1].split("-")[0]
          : value.split("/assets/")[1].split(".")[0];

      return valueFormatted;
    } else {
      const valueFormatted = value.startsWith("/assets/")
        ? value.split("/assets/")[1].split("-")[0]
        : value.startsWith("/src/")
        ? value.split("/assets/")[1].split(".")[0]
        : "";

      return valueFormatted;
    }
  };

  const handleIncreaseCards = (name: string, suit: string) => {
    const updateSuit = suitHandler[suit];
    if (!updateSuit) return;

    updateSuit((oldValue) => {
      const newCard = getImportByName(name);
      let newCardValue = "";

      console.log(newCard);
      if (manipulationSplit(newCard)) {
        newCardValue = manipulationSplit(newCard);
      } else {
        return sortCards(oldValue);
      }

      if (suit === "joker") {
        let countJokers = 0;

        if (newCard.startsWith("/assets/")) {
          console.log("old", oldValue);
          countJokers = oldValue.filter(
            (value) => manipulationSplit(value, "/assets/") === "joker"
          ).length;
        } else {
          console.log("oldElse", oldValue);
          countJokers = oldValue.filter(
            (value) => manipulationSplit(value, "/") === "joker"
          ).length;
        }

        return countJokers < 4 ? [...oldValue, newCard] : oldValue;
      }

      let countSpecificCard = 0;

      if (newCard.startsWith("/assets/")) {
        countSpecificCard = oldValue.filter(
          (value) => manipulationSplit(value, "/assets/") === newCardValue
        ).length;
      } else {
        countSpecificCard = oldValue.filter(
          (value) => manipulationSplit(value, "/") === newCardValue
        ).length;
      }

      const canAddCard =
        countSpecificCard === 0 ||
        (newCardValue.endsWith("A") && countSpecificCard < 2);

      const sortedCards = sortCards([...oldValue, newCard]);

      return canAddCard ? sortedCards : sortCards(oldValue);
    });
  };

  const handleDecreaseCards = (name: string, suit: string) => {
    const updateSuit = suitHandler[suit];
    if (!updateSuit) return;

    updateSuit((oldValue) => {
      const cardToRemove = getImportByName(name);
      let cardValueToRemove = "";

      if (manipulationSplit(cardToRemove)) {
        cardValueToRemove = manipulationSplit(cardToRemove);
      } else {
        return sortCards(oldValue);
      }

      let countSpecificCard = 0;

      if (cardToRemove.startsWith("/assets/")) {
        countSpecificCard = oldValue.filter(
          (value) => manipulationSplit(value, "/assets/") === cardValueToRemove
        ).length;
      } else {
        countSpecificCard = oldValue.filter(
          (value) => manipulationSplit(value, "/") === cardValueToRemove
        ).length;
      }

      if (countSpecificCard === 0) {
        return oldValue;
      }

      const isAce = cardValueToRemove.endsWith("A");

      if ((isAce && countSpecificCard <= 2) || !isAce) {
        let indexToRemove = 0;

        if (cardToRemove.startsWith("/assets/")) {
          indexToRemove = oldValue.findIndex(
            (value) =>
              manipulationSplit(value, "/assets/") === cardValueToRemove
          );
        } else {
          indexToRemove = oldValue.findIndex(
            (value) => manipulationSplit(value, "/") === cardValueToRemove
          );
        }

        if (countSpecificCard === 2) {
          indexToRemove = oldValue.length - 1;
        }

        if (indexToRemove > -1) {
          return [
            ...oldValue.slice(0, indexToRemove),
            ...oldValue.slice(indexToRemove + 1),
          ];
        }
      }

      return oldValue;
    });
  };

  return (
    <WebContext.Provider
      value={{
        copas,
        setCopas,
        espadas,
        setEspadas,
        paus,
        setPaus,
        ouros,
        setOuros,
        coringas,
        setCoringas,
        handleIncreaseCards,
        handleDecreaseCards,
      }}
    >
      {children}
    </WebContext.Provider>
  );
};

export const useWeb = () => useContext(WebContext);
