import { Link as ChakraLink } from "@chakra-ui/react";
import type { FC, PropsWithChildren } from "react";
import React from "react";

import { usePageContext } from "./usePageContext";

interface LinkProps {
  href: string;
}

const Link: FC<PropsWithChildren<LinkProps>> = ({ href, children }) => {
  const pageContext = usePageContext();

  return (
    <ChakraLink
      href={href}
      className={pageContext.urlPathname === href ? "is-active" : undefined}
      _active={{
        backgroundColor: "#eee",
      }}
      style={{ textDecoration: "none" }}
    >
      {children}
    </ChakraLink>
  );
};

export default Link;
