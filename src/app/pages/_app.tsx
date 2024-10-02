import { ChakraProvider } from "@chakra-ui/react";
import customTheme from "../public/theme";
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={customTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;