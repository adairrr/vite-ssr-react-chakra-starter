import React from "react";
import { renderToStream } from "react-streaming/server";
import type { PageContextBuiltIn } from "vite-plugin-ssr";
import { escapeInject } from "vite-plugin-ssr";

import getPageTitle from "./getPageTitle";
import PageWrapper from "./PageWrapper";
import type { PageContext } from "./types";

export { render };
export { passToClient };

const passToClient = ["pageProps", "documentProps", "someAsyncProps"];

async function render(pageContext: PageContextBuiltIn & PageContext) {
  const { Page, pageProps } = pageContext;

  const stream = await renderToStream(
    <PageWrapper pageContext={pageContext}>
      <Page {...pageProps} />
    </PageWrapper>,
    // We don't need streaming for a pre-rendered app.
    // (We still use react-streaming to enable <Suspsense>.)
    { disable: true }
  );

  const title = getPageTitle(pageContext);

  const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/assets/favicon.svg" />
        <link rel='apple-touch-icon' href='/assets/favicon.svg'/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>${title}</title>
        <meta name='description' content='This is a vite app rendered with SSR'/>
      </head>
      <body>
        <div id="page-view">${stream}</div>
        <noscript>You need to enable JavaScript to run this app.</noscript>
      </body>
    </html>`;

  return {
    documentHtml,
    // We can return a `pageContext` promise
    pageContext: (async () => {
      return {
        someAsyncProps: 42,
      };
    })(),
  };
}
