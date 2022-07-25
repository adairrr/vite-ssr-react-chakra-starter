import { Grid } from "@chakra-ui/react";
import React from "react";

import CTASection from "../lib/pagecomponents/home/CTASection";
import SomeImage from "../lib/pagecomponents/home/SomeImage";
import SomeText from "../lib/pagecomponents/home/SomeText";

function Page() {
  return (
    <Grid gap={4}>
      <SomeText />
      <SomeImage />
      <CTASection />
    </Grid>
  );
}

export default { Page };
