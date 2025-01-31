// The `pageContext` that are available in both on the server-side and browser-side
import type React from "react";

export type PageContext = {
  Page: React.ReactNode;
  exports: {
    documentProps?: {
      title: string;
    };
  };
  urlPathname: string;
  pageProps: Record<string, unknown>;
  documentProps?: {
    title: string;
  };
};
