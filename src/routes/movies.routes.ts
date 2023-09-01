import { Router } from "express";
import checkBody from "../middlewares/checkBody";
import { movieCreateSchemasOmit, movieUpdateSchemas } from "../schemas";
import { verifyId } from "../middlewares";
import { verifyName } from "../middlewares/verifyName.middlewares";
import moviesControllers from "../controllers/movies.controllers";
import { pagination } from "../middlewares/pagination.middleware";

export const movieRouter: Router = Router();

movieRouter.use("/:id", verifyId);

movieRouter.post(
  "",
  checkBody(movieCreateSchemasOmit),
  verifyName,
  moviesControllers.create
);

movieRouter.get("", pagination, moviesControllers.read);

movieRouter.patch(
  "/:id",
  checkBody(movieUpdateSchemas),
  verifyName,
  moviesControllers.updateMovie
);
movieRouter.delete("/:id", moviesControllers.deleteMovieId);
