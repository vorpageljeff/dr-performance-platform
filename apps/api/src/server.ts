import "dotenv/config";

import { buildApplication } from "./app.js";
import { readEnvironment } from "./config/env.js";

const environment = readEnvironment();
const application = await buildApplication({
  webOrigin: environment.WEB_ORIGIN,
});

const stop = async () => {
  await application.close();
};

process.once("SIGINT", stop);
process.once("SIGTERM", stop);

try {
  await application.listen({
    host: environment.API_HOST,
    port: environment.API_PORT,
  });
} catch (error: unknown) {
  application.log.error(error, "Falha ao iniciar a API.");
  process.exitCode = 1;
}
