import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "upload",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        label: "Pages",
        name: "pages",
        path: "src/content/pages",
        defaultItem: () => {
          return {
            author: 'Kevin Franke',
          }
        },
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
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
      {
        label: "Articles",
        name: "articles",
        path: "src/content/articles",
        defaultItem: () => {
          return {
            author: 'Kevin Franke',
            isDraft: false,
          }
        },
        fields: [
          {
            label: 'Draft',
            name: 'isDraft',
            type: 'boolean',
          },
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
            label: 'Image',
            name: 'image',
            type: 'image',
          },
          {
            label: "Author",
            name: "author",
            type: "string",
          },
          {
            label: 'Publication Date',
            name: 'pubDate',
            type: 'datetime',
            required: true,
          },
          {
            label: 'Updated Date',
            name: 'updatedDate',
            type: 'datetime',
          },
          {
            label: "Tags",
            name: "tags",
            type: "string",
            list: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
      {
        label: "Projects",
        name: "projects",
        path: "src/content/projects",
        defaultItem: () => {
          return {
            author: 'Kevin Franke',
            isDraft: false,
            isFeatured: false,
          }
        },
        fields: [
          {
            label: 'Draft',
            name: 'isDraft',
            type: 'boolean',
          },
          {
            label: 'Featured',
            name: 'isFeatured',
            type: 'boolean',
          },
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
            label: 'Image',
            name: 'image',
            type: 'image',
          },
          {
            label: "Author",
            name: "author",
            type: "string",
          },
          {
            label: 'Publication Date',
            name: 'pubDate',
            type: 'datetime',
            required: true,
          },
          {
            label: 'Updated Date',
            name: 'updatedDate',
            type: 'datetime',
          },
          {
            label: "Tags",
            name: "tags",
            type: "string",
            list: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
    ],
  },
  search: {
    tina: {
      indexerToken: process.env.TINA_SEARCH_TOKEN,
      stopwordLanguages: ['eng'],
    },
    indexBatchSize: 100,
    maxSearchIndexFieldLength: 100,
  },
});
