import { NextFunction, Request, Response } from "express";
import { movieRepositorie } from "../repositories";
import { AppError } from "../errors";

export async function verifyName(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const name = req.body.name;

  const existsMovie = await movieRepositorie.findOne({ where: { name } });
  if (!name) {
    return next();
  }
  if (existsMovie) {
    throw new AppError("Movie already exists.", 409);
  }

  return next();
}
