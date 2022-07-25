import React from "react";
import type { FC } from "react";

import type { Movie } from "../types";

interface StarWarsPageProps {
  movies: Array<Movie>;
}

const Page: FC<StarWarsPageProps> = ({ movies }) => (
  <>
    <h1>Star Wars Movies</h1>
    <ol>
      {movies.map(({ id, title, releaseDate }) => (
        <li key={id}>
          <a href={`/star-wars/${id}`}>{title}</a> ({releaseDate})
        </li>
      ))}
    </ol>
    <p>
      Source:{" "}
      <a href="https://star-wars.brillout.com">star-wars.brillout.com</a>.
    </p>
    <p>
      Data can be fetched by using the <code>onBeforeRender()</code> hook.
    </p>
  </>
);

export default { Page };
