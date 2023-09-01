import { MovieRead } from "./movies.interface";

type pagination = {
  prevPage: string | null;
  nextPage: string | null;
  count: number;
  data: MovieRead;
};

type paginationParams = {
  page: number;
  perPage: number;
  order: string;
  sort: string;
  prevPage: string | null;
  nextPage: string | null;
};

export { pagination, paginationParams };
