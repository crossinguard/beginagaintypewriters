import { getEntry } from "astro:content";

export async function getEntryOrThrow<
  C extends "pages" | "articles" | "projects" | "typewriters"
>(collection: C, id: string) {
  const entry = await getEntry(collection, id);
  if (!entry) {
    throw new Error(`Entry '${id}' not found in collection '${collection}'`);
  }
  return entry;
}
