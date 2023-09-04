import { z } from "zod";

const movieSchemas = z.object({
  id: z.number().positive(),
  name: z.string().max(50),
  description: z.string().nullish(),
  duration: z.number().positive(),
  price: z.number().positive().int(),
});

const movieCreateSchemasOmit = movieSchemas.omit({ id: true });
const movieUpdateSchemas = movieCreateSchemasOmit.partial();

export { movieUpdateSchemas, movieCreateSchemasOmit };
