import { Box, Button, Grid, Heading, Image, Link } from "@chakra-ui/react";
import type { FC } from "react";
import React from "react";
import { navigate } from "vite-plugin-ssr/client/router";

interface ErrorWrapperProps {
  errorInfo?: string;
  asset: string;
}

export const ErrorWrapper: FC<ErrorWrapperProps> = ({ errorInfo, asset }) => {
  const handleBackToHome = () => navigate("/");

  return (
    <Grid gap={4} textAlign="center">
      <Heading>Page not Found</Heading>
      <p>{errorInfo}</p>

      <Box maxWidth={[280, 400]} marginX="auto">
        <Image width={400} src={`/assets/${asset}`} />
        <Link fontSize="xs" href="https://storyset.com/" isExternal>
          Illustration by Freepik Stories
        </Link>
      </Box>

      <Box>
        <Button onClick={handleBackToHome}>Let&apos;s Head Back</Button>
      </Box>
    </Grid>
  );
};
