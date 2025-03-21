// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';

// 2. Import loader(s)
import { glob, file } from 'astro/loaders';

// 3. Define your collection(s)
const pages = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/pages" }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
    })
});
const articles = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/articles" }),
    schema: z.object({
        isDraft: z.boolean().default(true),
        title: z.string(),
        description: z.string(),
        image: z.string().nullish(),
        author: z.string().default('Brett Egbert'),
        pubDate: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),
        tags: z.array(z.string()),
    })
});
const projects = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
    schema: z.object({
        isDraft: z.boolean().default(false),
        title: z.string(),
        description: z.string(),
        image: z.string().nullish(),
        author: z.string().default('Brett Egbert'),
        pubDate: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),
        tags: z.array(z.string()),
    })
});

// 4. Export a single `collections` object to register your collection(s)
export const collections = { pages, articles, projects };