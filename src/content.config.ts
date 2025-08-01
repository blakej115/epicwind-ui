import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const docs = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data" }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
  }),
});

export const collections = { docs };
