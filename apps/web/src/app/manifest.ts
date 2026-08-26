import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "DR Performance",
    short_name: "DR Performance",
    description: "Assessoria fitness personalizada por Daniel Rodrigues.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#050505",
    lang: "pt-BR",
  };
}
