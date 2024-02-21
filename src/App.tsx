import { ChakraProvider } from "@chakra-ui/react";
import Home from "./pages";
import custonTheme from "./styles/theme";

function App() {
  return (
    <ChakraProvider theme={custonTheme}>
      <Home />
    </ChakraProvider>
  );
}

export default App;
