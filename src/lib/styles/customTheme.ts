import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    global: {
      html: {
        scrollBehavior: "smooth",
      },
      body: {
        margin: 0,
      },
    },
  },
  fonts: {
    heading: `'Plus Jakarta Sans', sans-serif`,
    body: `'Plus Jakarta Sans', sans-serif`,
  },
  components: {
    // Button: {
    // }
  },
  config: {
    useSystemColorMode: true,
  },
});
