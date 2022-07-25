import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import React from "react";
import type { FC, PropsWithChildren } from "react";

import { PageContextProvider } from "./usePageContext";

import "./PageWrapper.css";
import Layout from "../lib/layout";
import Footer from "../lib/layout/Footer";
import Header from "../lib/layout/Header";
import { theme } from "../lib/styles/customTheme";

import type { PageContext } from "./types";

import "@fontsource/plus-jakarta-sans/latin.css";

interface PageWrapperProps {
  pageContext: PageContext;
}

const PageWrapper: FC<PropsWithChildren<PageWrapperProps>> = ({
  pageContext,
  children,
}) => {
  return (
    <React.StrictMode>
      <ColorModeScript initialColorMode={theme.config?.initialColorMode} />
      <PageContextProvider pageContext={pageContext}>
        <ChakraProvider theme={theme}>
          <Header />
          <Layout>{children}</Layout>
          <Footer />
        </ChakraProvider>
      </PageContextProvider>
    </React.StrictMode>
  );
};

export default PageWrapper;
