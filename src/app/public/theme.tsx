import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  styles: {
    global:  {
      '@import': [
        "url('https://fonts.googleapis.com/css2?family=Courier+Prime&display=swap')",
        "url('https://fonts.googleapis.com/css2?family=Rubik&display=swap')",
        "url('https://fonts.googleapis.com/css2?family=Comfortaa&display=swap')",
        "url('https://fonts.googleapis.com/css2?family=Inter&display=swap')",
      ],

      body: {
        bg: "#252127",
        color: "white",
        fontFamily: "'Rubik', sans-serif",
      },
      Link: {
            baseStyle: {
                _hover: {
                textDecoration: "underline",
                fontFamily: "'Courier Prime', monospace",
                },
            },
        },
        Heading: {
            baseStyle: {
                fontFamily: "'Comfortaa', cursive",
            },
        }
    },
  },
});

export default customTheme