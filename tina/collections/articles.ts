import type { Collection } from "tinacms";

export const ArticlesCollection: Collection = {
  name: "articles",
  label: "Articles",
  path: "src/content/articles",
  format: "mdx",

  fields: [
    {
      label: "Title",
      name: "title",
      type: "string",
      isTitle: true,
      required: true,
    },
    {
      label: "Description",
      name: "description",
      type: "string",
      required: true,
    },
    {
      label: "Publication Date",
      name: "pubDate",
      type: "datetime",
      required: true,
    },
    {
      label: "Updated Date",
      name: "updatedDate",
      type: "datetime",
    },
    {
      label: "Cover Image",
      name: "cover",
      type: "image",
    },
    {
      label: "Cover Alt Text",
      name: "coverAlt",
      type: "string",
    },
    {
      label: "Tags",
      name: "tags",
      type: "string",
      list: true,
    },
    {
      label: "Related Articles",
      name: "relatedArticles",
      type: "reference",
      collections: ["articles"],
    },
    // TOODS: add relatedProjects
    {
      label: "Body",
      name: "body",
      type: "rich-text",
      isBody: true,
      ui: {
        validate: (value) => {
          if (!value?.children) return;

          const hasH1 = value.children.some((node: any) => node.type === "h1");

          if (hasH1) {
            return "Please use H2-H6 only. H1 is reserved for the article title.";
          }
        },
      },
    },
  ],
};
