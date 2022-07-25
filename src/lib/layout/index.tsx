import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import type { ReactNode, FC, PropsWithChildren } from "react";

import Footer from "./Footer";
import Meta from "./Meta";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box margin="0 auto" maxWidth={800} transition="0.5s ease-out">
      <Meta />
      <Flex wrap="wrap" margin="8" minHeight="90vh">
        <Box
          as="main"
          width="full"
          my={22}
          transition="opacity 0.1s ease-in"
          id="page-content"
        >
          {children}
        </Box>
        <Footer />
      </Flex>
    </Box>
  );
};

export default Layout;
