// Importação das cartas de Copas
import copas1 from "../assets/deck/copas1.svg";
import copas2 from "../assets/deck/copas2.svg";
import copas3 from "../assets/deck/copas3.svg";
import copas4 from "../assets/deck/copas4.svg";
import copas5 from "../assets/deck/copas5.svg";
import copas6 from "../assets/deck/copas6.svg";
import copas7 from "../assets/deck/copas7.svg";
import copas8 from "../assets/deck/copas8.svg";
import copas9 from "../assets/deck/copas9.svg";
import copas10 from "../assets/deck/copas10.svg";
import copasJ from "../assets/deck/copasJ.png";
import copasQ from "../assets/deck/copasQ.png";
import copasK from "../assets/deck/copasK.png";
import copasA from "../assets/deck/copasA.jpg";

// Importação das cartas de Ouros
import ouros1 from "../assets/deck/ouros1.svg";
import ouros2 from "../assets/deck/ouros2.svg";
import ouros3 from "../assets/deck/ouros3.svg";
import ouros4 from "../assets/deck/ouros4.svg";
import ouros5 from "../assets/deck/ouros5.svg";
import ouros6 from "../assets/deck/ouros6.svg";
import ouros7 from "../assets/deck/ouros7.svg";
import ouros8 from "../assets/deck/ouros8.svg";
import ouros9 from "../assets/deck/ouros9.svg";
import ouros10 from "../assets/deck/ouros10.svg";
import ourosJ from "../assets/deck/ourosJ.png";
import ourosQ from "../assets/deck/ourosQ.png";
import ourosK from "../assets/deck/ourosK.svg";
import ourosA from "../assets/deck/ourosA.jpg";

// Importação das cartas de Paus
import paus1 from "../assets/deck/paus1.svg";
import paus2 from "../assets/deck/paus2.svg";
import paus3 from "../assets/deck/paus3.svg";
import paus4 from "../assets/deck/paus4.svg";
import paus5 from "../assets/deck/paus5.svg";
import paus6 from "../assets/deck/paus6.svg";
import paus7 from "../assets/deck/paus7.svg";
import paus8 from "../assets/deck/paus8.svg";
import paus9 from "../assets/deck/paus9.svg";
import paus10 from "../assets/deck/paus10.svg";
import pausJ from "../assets/deck/pausJ.svg";
import pausQ from "../assets/deck/pausQ.png";
import pausK from "../assets/deck/pausK.png";
import pausA from "../assets/deck/pausA.jpg";

// Importação das cartas de Espadas
import espadas1 from "../assets/deck/espadas1.svg";
import espadas2 from "../assets/deck/espadas2.svg";
import espadas3 from "../assets/deck/espadas3.svg";
import espadas4 from "../assets/deck/espadas4.svg";
import espadas5 from "../assets/deck/espadas5.svg";
import espadas6 from "../assets/deck/espadas6.svg";
import espadas7 from "../assets/deck/espadas7.svg";
import espadas8 from "../assets/deck/espadas8.svg";
import espadas9 from "../assets/deck/espadas9.svg";
import espadas10 from "../assets/deck/espadas10.svg";
import espadasJ from "../assets/deck/espadasJ.png";
import espadasQ from "../assets/deck/espadasQ.png";
import espadasK from "../assets/deck/espadasK.png";
import espadasA from "../assets/deck/espadasA.jpg";

// Importação do coringa
import joker from "../assets/deck/joker.jpg";

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

  const handleIncreaseCards = (name: string, suit: string) => {
    const updateSuit = suitHandler[suit];
    if (!updateSuit) return;
    console.log("11", name);
    updateSuit((oldValue) => {
      const newCard = getImportByName(name);
      let newCardValue = "";

      if (newCard.startsWith("/assets/")) {
        newCardValue = newCard.split("/assets/")[1].split("-")[0];
      } else {
        newCardValue = newCard.split("/deck/")[1].split(".")[0];
      }
      console.log("Card :", newCardValue);
      newCardValue.trim();

      console.log("suit: ", suit);
      console.log("suit: ", suit);
      if (suit === "joker") {
        const countJokers = oldValue.filter(
          (value) => value.split("/deck/")[1].split(".")[0] === "joker"
        ).length;

        console.log(countJokers);

        if (countJokers < 4) {
          return [...oldValue, newCard];
        } else {
          return oldValue;
        }
      }
      console.log("AAA");

      const countSpecificCard = oldValue.filter(
        (value) => value.split("/deck/")[1].split(".")[0] === newCardValue
      ).length;

      console.log("BBB");
      const canAddCard =
        countSpecificCard === 0 ||
        (newCardValue.endsWith("A") && countSpecificCard < 2);

      if (canAddCard) {
        return [...oldValue, newCard];
      }

      return oldValue;
    });
  };

  const handleDecreaseCards = (name: string, suit: string) => {
    const updateSuit = suitHandler[suit];
    if (!updateSuit) return;

    updateSuit((oldValue) => {
      const cardToRemove = getImportByName(name);
      const cardValueToRemove = cardToRemove.split("/deck/")[1].split(".")[0];

      const countSpecificCard = oldValue.filter(
        (value) => value.split("/deck/")[1].split(".")[0] === cardValueToRemove
      ).length;

      if (countSpecificCard === 0) {
        return oldValue;
      }

      const isAce = cardValueToRemove.endsWith("A");

      if ((isAce && countSpecificCard <= 2) || !isAce) {
        const indexToRemove = oldValue.findIndex(
          (value) =>
            value.split("/deck/")[1].split(".")[0] === cardValueToRemove
        );
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
