import { Button } from "@chakra-ui/react";
import React, { useState } from "react";

export { Counter };

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <Button onClick={() => setCount((prevCount) => prevCount + 1)}>
      Counter {count}
    </Button>
  );
}
