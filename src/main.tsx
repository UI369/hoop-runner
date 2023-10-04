import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./hooprunner/themes/theme"; // Adjust the path based on your directory structure
import App from "./App";

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element not found");
}
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </StrictMode>
);
