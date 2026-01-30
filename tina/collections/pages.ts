import type { Collection } from "tinacms";

export const PagesCollection: Collection = {
  name: "pages",
  label: "Pages",
  path: "src/content/pages",
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
