import { NextFunction, Request, Response } from "express";
import { paginationParams } from "../interfaces";

export function pagination(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  const queryPage: number = Number(req.query.page);
  const queryPerPage: number = Number(req.query.perPage);

  const page: number = !queryPage || queryPage < 1 ? 1 : queryPage;
  const perPage: number =
    queryPerPage && queryPerPage <= 5 && queryPerPage > 0 ? queryPerPage : 5;
  const baseURL: string = "http://localhost:3000/movies";
  const prevPage: string = `${baseURL}?page=${page - 1}&perPage=${perPage}`;
  const nextPage: string = `${baseURL}?page=${page + 1}&perPage=${perPage}`;

  const querySort: any = req.query.sort;
  const queryOrder: any = req.query.order;

  const orderOptions: Array<string> = ["asc", "desc"];
  const sortOptions: Array<string> = ["price", "duration"];

  let sort: string;
  let order: string;

  if (!(querySort && sortOptions.includes(querySort))) {
    sort = "id";
  } else {
    sort = querySort;
  }

  if (!querySort || !(queryOrder && orderOptions.includes(queryOrder))) {
    order = "asc";
  } else {
    order = queryOrder;
  }

  const pagination: paginationParams = {
    page: perPage * (page - 1),
    perPage,
    order,
    sort,
    prevPage,
    nextPage,
  };

  res.locals = { ...res.locals, pagination };

  return next();
}
