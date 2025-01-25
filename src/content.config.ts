import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders"; // Not available with legacy API

const docs = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/docs" }),
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = { docs };
