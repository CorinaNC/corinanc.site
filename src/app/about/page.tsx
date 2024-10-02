"use client";

import { ChakraProvider } from "@chakra-ui/react"
import Homepage from "../pages"
import customTheme from "../public/theme"
export default function About() {
    return (
        <ChakraProvider theme={customTheme}>
            <Homepage />
        </ChakraProvider>
    )
}