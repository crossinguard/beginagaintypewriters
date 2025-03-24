import { defineConfig } from "tinacms";

export const articlesCollection: Collection = {
    label: "Articles",
    name: "articles",
    path: "src/content/articles",
    defaultItem: () => {
        return {
            author: 'Kevin Franke',
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
}