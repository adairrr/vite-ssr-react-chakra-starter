import type { FC, PropsWithChildren } from "react";
import React, { useContext } from "react";

import type { PageContext as PageContextType } from "./types";

const PageContext = React.createContext<PageContextType>(undefined as any);

interface PageContextProviderProps {
  pageContext: PageContextType;
}
const PageContextProvider: FC<PropsWithChildren<PageContextProviderProps>> = ({
  pageContext,
  children,
}) => {
  return (
    <PageContext.Provider value={pageContext}>{children}</PageContext.Provider>
  );
};

function usePageContext() {
  const ctx = useContext(PageContext);
  if (!ctx)
    throw new Error(`PageContext must be inside a provider with a value`);
  return ctx;
}

export { PageContextProvider, usePageContext };
