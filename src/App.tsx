import { ChakraProvider } from "@chakra-ui/react";
import custonTheme from "./styles/theme";

function App() {
  return (
    <ChakraProvider theme={custonTheme}>
      <h2>Olá rede</h2>
    </ChakraProvider>
  );
}

export default App;
