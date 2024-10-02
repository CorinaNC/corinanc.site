import {
    ChakraProvider,
} from "@chakra-ui/react";
import theme from "../public/theme";
import { ReactNode } from "react";

interface ChakraProps {

    children: ReactNode;
}

export default function Chakra({ children }: ChakraProps) {
    return (
        <ChakraProvider theme={theme}>
            {children}
        </ChakraProvider>
    );
}