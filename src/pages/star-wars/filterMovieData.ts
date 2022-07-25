import type { MovieDetails } from "./types";

const filterMovieData = (
  movie: MovieDetails & Record<string, unknown>
): MovieDetails => {
  const { id, title, releaseDate, director, producer } = movie;
  return { id, title, releaseDate, director, producer };
};

export default filterMovieData;
