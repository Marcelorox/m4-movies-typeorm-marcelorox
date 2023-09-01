import { Request, Response } from "express";
import { Movie } from "../entities";
import { moviesServices } from "../services";
import { pagination } from "../interfaces";

async function create(req: Request, res: Response): Promise<Response> {
  const movie: Movie = await moviesServices.create(req.body);
  return res.status(201).json(movie);
}
async function read(req: Request, res: Response): Promise<Response> {
  const pagination = res.locals.pagination;
  const movie: pagination = await moviesServices.read(pagination);

  return res.status(200).json(movie);
}
async function updateMovie(req: Request, res: Response): Promise<Response> {
  const { foundMovie } = res.locals;

  const movie: Movie = await moviesServices.updateMovie(foundMovie, req.body);

  return res.status(200).json(movie);
}
async function deleteMovieId(req: Request, res: Response): Promise<Response> {
  await moviesServices.deleteMovie(res.locals.foundMovie);

  return res.status(204).json();
}
export default { create, read, updateMovie, deleteMovieId };
