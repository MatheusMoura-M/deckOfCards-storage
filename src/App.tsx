import { ChakraProvider } from "@chakra-ui/react";
import Home from "./pages";
import custonTheme from "./styles/theme";
import { WebProvider } from "./context/webContext";

function App() {
  return (
    <ChakraProvider theme={custonTheme}>
      <WebProvider>
        <Home />
      </WebProvider>
    </ChakraProvider>
  );
}

export default App;
