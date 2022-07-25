import { Flex } from "@chakra-ui/react";
import React from "react";

import Link from "../../renderer/Link";

import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <Flex
      as="header"
      width="full"
      align="center"
      alignSelf="flex-start"
      justifyContent="center"
      gridGap={2}
    >
      <Flex
        w="50%"
        h="full"
        px="6"
        maxW="700px"
        align="center"
        justify="space-between"
      >
        <Link href="/">Welcome</Link>
        <Link href="/star-wars">Data Fetching</Link>
        <Link href="/hello/alice">Routing</Link>
        <ThemeToggle />
      </Flex>
    </Flex>
  );
};

export default Header;
