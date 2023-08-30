import "reflect-metadata";
import "dotenv/config";
import { DataSource, DataSourceOptions } from "typeorm";
import path from "path";

function dataSourceConfig(): DataSourceOptions {
  const dbUrl: string | undefined = process.env.DATABASE_URL;
  const entitiesPath: string = path.join(__dirname, "./entities/**.{ts,js}");
  const migrationsPath: string = path.join(
    __dirname,
    "./migrations/**.{ts,js}"
  );

  if (!dbUrl) {
    throw new Error("Missing env var: 'DATABASE_URL'");
  }

  return {
    type: "postgres",
    url: dbUrl,
    logging: false,
    entities: [entitiesPath],
    migrations: [migrationsPath],
  };
}

const appDataSource = new DataSource(dataSourceConfig());

export { appDataSource };
