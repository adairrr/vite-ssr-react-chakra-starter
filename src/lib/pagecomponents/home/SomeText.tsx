import { Grid, Heading, Text } from "@chakra-ui/react";
import type { FC } from "react";
import React from "react";

const SomeText: FC = () => {
  return (
    <Grid textAlign="center" gap={2}>
      <Heading fontSize="2xl" fontWeight="extrabold">
        vite-react-chakra-starter
      </Heading>
      <Text color="gray.500" fontSize="sm">
        This is a vite react template with Chakra-UI and TypeScript setup.
      </Text>
    </Grid>
  );
};

export default SomeText;
