import { z } from "zod";

const portSchema = z.coerce.number().int().min(1).max(65_535);

const environmentSchema = z.object({
  NODE_ENV: z
    .enum(["development", "test", "production"])
    .default("development"),
  API_HOST: z.string().min(1).default("0.0.0.0"),
  API_PORT: portSchema.optional(),
  PORT: portSchema.optional(),
  WEB_ORIGIN: z.url().default("http://localhost:3000"),
});

type ParsedEnvironment = z.infer<typeof environmentSchema>;

export type Environment = Omit<ParsedEnvironment, "API_PORT" | "PORT"> & {
  API_PORT: number;
};

export function readEnvironment(
  source: NodeJS.ProcessEnv = process.env,
): Environment {
  const environment = environmentSchema.parse(source);

  return {
    NODE_ENV: environment.NODE_ENV,
    API_HOST: environment.API_HOST,
    API_PORT: environment.API_PORT ?? environment.PORT ?? 3333,
    WEB_ORIGIN: environment.WEB_ORIGIN,
  };
}
