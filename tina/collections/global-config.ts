import type { Collection } from "tinacms";

export const GlobalConfigCollection: Collection = {
  name: "config",
  label: "Global Config",
  path: "src/content/config",
  format: "json",
  ui: {
    global: true,
    allowedActions: {
      create: false,
      delete: false,
    },
  },
  fields: [
    {
      name: "siteTitle",
      label: "Site Title",
      type: "string",
      required: true,
    },
    {
      name: "siteDescription",
      label: "Site Description",
      type: "string",
      required: true,
    },
    {
      name: "siteOwner",
      label: "Site Owner Name",
      type: "string",
      required: true,
    },
    {
      name: "location",
      label: "Location",
      type: "string",
    },
    {
      name: "nav",
      label: "Navigation",
      type: "object",
      list: true,
      ui: {
        itemProps: (item) => ({
          label: item?.label || "New Nav Item",
        }),
      },
      fields: [
        {
          name: "label",
          label: "Label",
          type: "string",
          required: true,
        },
        {
          name: "link",
          label: "Link",
          type: "string",
          required: true,
        },
        {
          name: "isHome",
          label: "Is Home Link",
          type: "boolean",
          description: "Check if this is the home/logo link",
        },
      ],
    },
  ],
};
