import { Movie } from "../entities";
import {
  MovieCreate,
  MovieRead,
  MovieUpdate,
  pagination,
  paginationParams,
} from "../interfaces";
import { movieRepositorie } from "../repositories";

async function create(payload: MovieCreate): Promise<Movie> {
  const createMovie: Movie = await movieRepositorie.save(payload);
  return createMovie;
}

async function read({
  nextPage,
  order,
  page,
  prevPage,
  perPage,
  sort,
}: paginationParams): Promise<pagination> {
  const [movie, count]: Array<MovieRead | number> =
    await movieRepositorie.findAndCount({
      order: { [sort]: order },
      skip: page,
      take: perPage,
    });
  return {
    prevPage: page <= 1 ? null : prevPage,
    nextPage: count - page < perPage ? null : nextPage,
    count,
    data: movie,
  };
}

async function updateMovie(movie: Movie, payload: MovieUpdate): Promise<Movie> {
  const updateMovie: Movie = await movieRepositorie.save({
    ...movie,
    ...payload,
  });
  return updateMovie;
}

async function deleteMovie(id: Movie): Promise<Movie> {
  const deleteMovie: Movie = await movieRepositorie.remove(id);

  return deleteMovie;
}

export default { create, read, updateMovie, deleteMovie };
