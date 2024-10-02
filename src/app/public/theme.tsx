import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "#252127",
        color: "white",

      },
    },
  },
  components: {
    Link: {
      baseStyle: {
        _hover: {
          textDecoration: "underline",
        },

      },
    },
    Text: {
        baseStyle: {

        }
    },
    Heading: {
      baseStyle: {

      },
    },
  },
});

export default customTheme;