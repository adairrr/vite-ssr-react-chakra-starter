import type { FC } from "react";
import React from "react";

interface HelloPageProps {
  name: string;
}

const Page: FC<HelloPageProps> = ({ name }) => (
  <>
    <h1>Hello</h1>
    <p>
      Hi <b>{name}</b>.
    </p>
    <ul>
      <li>
        <a href="/hello/eli">/hello/eli</a>
      </li>
      <li>
        <a href="/hello/jon">/hello/jon</a>
      </li>
    </ul>
    <p>
      Parameterized routes can be defined by exporting a route string in{" "}
      <code>*.page.route.js</code>.
    </p>
  </>
);

export default { Page };
