import { defineConfig } from "tinacms";

export const pagesCollection: Collection = {
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
}