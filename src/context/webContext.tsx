// Importação das cartas de Copas
import copas1 from "../assets/deck/1_copas.svg";
import copas2 from "../assets/deck/2_copas.svg";
import copas3 from "../assets/deck/3_copas.svg";
import copas4 from "../assets/deck/4_copas.svg";
import copas5 from "../assets/deck/5_copas.svg";
import copas6 from "../assets/deck/6_copas.svg";
import copas7 from "../assets/deck/7_copas.svg";
import copas8 from "../assets/deck/8_copas.svg";
import copas9 from "../assets/deck/9_copas.svg";
import copas10 from "../assets/deck/10_copas.svg";
import copasJ from "../assets/deck/Jack_copas.png";
import copasQ from "../assets/deck/Queen_copas.png";
import copasK from "../assets/deck/King_copas.png";
import copasA from "../assets/deck/Ais_copas.jpg";

// Importação das cartas de Ouros
import ouros1 from "../assets/deck/1_ouros.svg";
import ouros2 from "../assets/deck/2_ouros.svg";
import ouros3 from "../assets/deck/3_ouros.svg";
import ouros4 from "../assets/deck/4_ouros.svg";
import ouros5 from "../assets/deck/5_ouros.svg";
import ouros6 from "../assets/deck/6_ouros.svg";
import ouros7 from "../assets/deck/7_ouros.svg";
import ouros8 from "../assets/deck/8_ouros.svg";
import ouros9 from "../assets/deck/9_ouros.svg";
import ouros10 from "../assets/deck/10_ouros.svg";
import ourosJ from "../assets/deck/Jack_ouros.png";
import ourosQ from "../assets/deck/Queen_ouros.png";
import ourosK from "../assets/deck/King_ouros.svg";
import ourosA from "../assets/deck/Ais_ouros.jpg";

// Importação das cartas de Paus
import paus1 from "../assets/deck/1_paus.svg";
import paus2 from "../assets/deck/2_paus.svg";
import paus3 from "../assets/deck/3_paus.svg";
import paus4 from "../assets/deck/4_paus.svg";
import paus5 from "../assets/deck/5_paus.svg";
import paus6 from "../assets/deck/6_paus.svg";
import paus7 from "../assets/deck/7_paus.svg";
import paus8 from "../assets/deck/8_paus.svg";
import paus9 from "../assets/deck/9_paus.svg";
import paus10 from "../assets/deck/10_paus.svg";
import pausJ from "../assets/deck/Jack_paus.svg";
import pausQ from "../assets/deck/Queen_paus.png";
import pausK from "../assets/deck/King_paus.png";
import pausA from "../assets/deck/Ais_paus.jpg";

// Importação das cartas de Espadas
import espadas1 from "../assets/deck/1_espadas.svg";
import espadas2 from "../assets/deck/2_espadas.svg";
import espadas3 from "../assets/deck/3_espadas.svg";
import espadas4 from "../assets/deck/4_espadas.svg";
import espadas5 from "../assets/deck/5_espadas.svg";
import espadas6 from "../assets/deck/6_espadas.svg";
import espadas7 from "../assets/deck/7_espadas.svg";
import espadas8 from "../assets/deck/8_espadas.svg";
import espadas9 from "../assets/deck/9_espadas.svg";
import espadas10 from "../assets/deck/10_espadas.svg";
import espadasJ from "../assets/deck/Jack_espadas.png";
import espadasQ from "../assets/deck/Queen_espadas.png";
import espadasK from "../assets/deck/King_espadas.png";
import espadasA from "../assets/deck/Ais_espadas.jpg";

// Importação do coringa
import joker from "../assets/deck/Coringa.jpg";

import { createContext, useContext, useState } from "react";
import { iProviderProps } from "../interfaces";
import { iAuthProviderData } from "./interface";

export const WebContext = createContext<iAuthProviderData>(
  {} as iAuthProviderData
);

export const WebProvider = ({ children }: iProviderProps) => {
  const [copas, setCopas] = useState<string[]>([
    copas1,
    copas2,
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
    copasA,
  ]);

  const [ouros, setOuros] = useState<string[]>([
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
  ]);

  const [paus, setPaus] = useState<string[]>([
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
  ]);

  const [espadas, setEspadas] = useState<string[]>([
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

  const handleIncreaseCards = (name: string, suit: string) => {
    suit === "copas"
      ? setCopas((oldValue) => {
          const newCard = getImportByName(name);

          return [...oldValue, newCard];
        })
      : suit === "paus"
      ? setPaus((oldValue) => {
          const newCard = getImportByName(name);

          return [...oldValue, newCard];
        })
      : suit === "ouros"
      ? setOuros((oldValue) => {
          const newCard = getImportByName(name);

          return [...oldValue, newCard];
        })
      : suit === "espadas"
      ? setEspadas((oldValue) => {
          const newCard = getImportByName(name);

          return [...oldValue, newCard];
        })
      : setCoringas((oldValue) => {
          const newCard = getImportByName(name);

          return [...oldValue, newCard];
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
      }}
    >
      {children}
    </WebContext.Provider>
  );
};

export const useWeb = () => useContext(WebContext);
