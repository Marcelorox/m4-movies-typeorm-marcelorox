import "express-async-errors";
import express, { Application, json } from "express";
import { errorCheck } from "./middlewares";
import { movieRouter } from "./routes/movies.routes";

const app: Application = express();
app.use(express.json());

app.use("/movies", movieRouter);
app.use(errorCheck);

export default app;
