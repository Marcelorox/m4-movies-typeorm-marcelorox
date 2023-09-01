import { AppDataSource } from "./data-source";
import { Movie } from "./entities";
import { MovieRepos } from "./interfaces";

const movieRepositorie: MovieRepos = AppDataSource.getRepository(Movie);

export { movieRepositorie };
