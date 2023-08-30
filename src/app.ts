import "express-async-errors";
import express, { Application, json } from "express";
import { errorCheck } from "./middlewares";

const app: Application = express();
app.use(json());

// app.use("/users");
// app.use("/login");
// app.use("/courses");
app.use(errorCheck);

export default app;
