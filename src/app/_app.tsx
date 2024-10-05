import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import customTheme from "./public/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={customTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
