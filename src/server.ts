import app from "./app";
import { appDataSource } from "./database/config";

appDataSource
  .initialize()
  .then((): void => {
    const PORT: number = parseInt(process.env.PORT!) || 3000;

    app.listen(PORT, async () => {
      console.log(`App running on port ${PORT}`);
    });
  })
  .catch((err: unknown) => console.error(err));
