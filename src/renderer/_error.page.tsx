import React from "react";

import { ErrorWrapper } from "../lib/components/error/ErrorWrapper";

function Page({ is404, errorInfo }: { is404: boolean; errorInfo?: string }) {
  if (is404) {
    return <ErrorWrapper asset="404-error-rafiki.svg" errorInfo={errorInfo} />;
  }
  return <ErrorWrapper asset="500-error-cuate.svg" errorInfo={errorInfo} />;
}

export default Page;
