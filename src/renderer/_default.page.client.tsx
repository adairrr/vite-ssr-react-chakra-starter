import React from "react";
import ReactDOM from "react-dom/client";
import type { PageContextBuiltInClient } from "vite-plugin-ssr/client/router";

import getPageTitle from "./getPageTitle";
import PageWrapper from "./PageWrapper";
import type { PageContext } from "./types";

export const clientRouting = true;
export { render };
export { onHydrationEnd };
export { onPageTransitionStart };
export { onPageTransitionEnd };

let root: ReactDOM.Root;
async function render(pageContext: PageContextBuiltInClient & PageContext) {
  const { Page, pageProps } = pageContext;
  const page = (
    <PageWrapper pageContext={pageContext}>
      <Page {...pageProps} />
    </PageWrapper>
  );
  const container = document.getElementById("page-view")!;
  if (pageContext.isHydration) {
    root = ReactDOM.hydrateRoot(container, page);
  } else {
    if (!root) {
      root = ReactDOM.createRoot(container);
    }
    root.render(page);
  }
  document.title = getPageTitle(pageContext);
}

function onHydrationEnd() {
  console.log("Hydration finished; page is now interactive.");
}
function onPageTransitionStart() {
  console.log("Page transition start");
  document.querySelector("#page-content")!.classList.add("page-transition");
}
function onPageTransitionEnd() {
  console.log("Page transition end");
  document.querySelector("#page-content")!.classList.remove("page-transition");
}
