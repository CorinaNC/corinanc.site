"use client";
import Image from "next/image";
import { ChakraProvider,
  Heading,
  Box
 } from "@chakra-ui/react";
import Homepage from ".";
import customTheme from "./public/theme";

export default function Home() {
  return (
        <ChakraProvider theme={customTheme}>
          <Homepage />
        </ChakraProvider>
    );
}
