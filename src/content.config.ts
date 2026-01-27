// 1. Import utilities from `astro:content`
import { defineCollection, reference } from "astro:content";

// 2. Import loader(s)
import { glob } from "astro/loaders";

// 3. Import Zod
import { z } from "astro/zod";

// 4. Define your collection(s)
const pages = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/pages" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    typewriter: z.array(reference("typewriters")).optional(),
    status: z.enum(["planning", "in progress", "complete"]),
    completionDate: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    relatedProjects: z.array(reference("projects")).optional(),
    relatedArticles: z.array(reference("articles")).optional(),
  }),
});

const typewriters = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/typewriters" }),
  schema: z.object({
    title: z.string(),
    manufacturer: z.string(),
    model: z.string(),
    year: z.number().optional(),
    serialNumber: z.string().optional(),
    typeface: z.string().optional(),
    pitch: z.string().optional(),
    cover: z.string().optional(),
    coverAlt: z.string().optional(),
    description: z.string(),
    tags: z.array(z.string()).default([]),
  }),
});

const articles = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/articles" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    cover: z.string().default("/upload/johnny-briggs-b0zk-smIy0g-unsplash.jpg"),
    coverAlt: z.string().default("A close up of an old fashioned typewriter"),
    tags: z.array(z.string()).default([]),
    relatedProjects: z.array(reference("projects")).optional(),
    relatedArticles: z.array(reference("articles")).optional(),
    isDraft: z.boolean().default(false),
  }),
});

// 5. Export a single `collections` object to register your collection(s)
export const collections = { pages, projects, typewriters, articles };
