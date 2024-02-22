export interface iAuthProviderData {
  copas: string[];
  setCopas: React.Dispatch<React.SetStateAction<string[]>>;
  espadas: string[];
  setEspadas: React.Dispatch<React.SetStateAction<string[]>>;
  ouros: string[];
  setOuros: React.Dispatch<React.SetStateAction<string[]>>;
  paus: string[];
  setPaus: React.Dispatch<React.SetStateAction<string[]>>;
  coringas: string[];
  setCoringas: React.Dispatch<React.SetStateAction<string[]>>;
  handleIncreaseCards: (newCard: string, suit: string) => void;
}
