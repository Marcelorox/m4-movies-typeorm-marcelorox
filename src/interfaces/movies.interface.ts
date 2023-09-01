import { z } from "zod";
import { Movie } from "../entities";
import { DeepPartial, Repository } from "typeorm";
import { movieCreateSchemasOmit } from "../schemas";

type MovieCreate = z.infer<typeof movieCreateSchemasOmit>;
type MovieRead = Array<Movie>;
type MovieUpdate = DeepPartial<Movie>;

type MovieRepos = Repository<Movie>;

export { MovieRead, MovieUpdate, MovieRepos, MovieCreate };
