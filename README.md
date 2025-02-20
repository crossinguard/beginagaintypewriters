# Begin Again Typewriters | Website

This repo houses the website files for [Begin Again Typerwriters](https://beginagaintypewriters.com), created using HTML, CSS, and JavaScript through the [Astro web framework](https://astro.build). The approach used here is based on Andy Bell's [A CSS project boilerplate](https://piccalil.li/blog/a-css-project-boilerplate/). 

## Project Structure

The project is comprised of two primary folders: `public` and `private`. Per the [Astro project structure documentation](https://docs.astro.build/en/basics/project-structure/), the `public` folder is for non-code, unprocessed assets (fonts, icons, etc.) while the `src` folder is for project source code (components, pages, styles, images, etc.).

```text
/
├── public/
│   └── favicon.svg
├── src/
│   └── components/
│       └── content/
│       └── footer/
│       └── hero/
│       └── navigation/
│   └── css/
│       └── global/
│   └── layouts/
│   └── pages/
└── README.md <-- you are here
```

Within `src` are the following folders:
- `components`: reusable components of code acting as building blocks to create the website
  - `content`: markdown based files that provide the primary content of the website
  - `footer`: footer contents that display at the bottom of each website page
  - `hero`: hero banner displaying the company name and logo present on the home page
  - `navigation`: navigation links to travel between pages
- `css`: visual styling code that determines how the website looks and behaves
  - `global`: primary css files dictating fonts, colors, and site-wide styles
- `layouts`: components focused on page structure
- `pages`: individual pages on the website

## Editing Content

For this website, all primary page content exists in the `components/content` folder. Each website page has its own folder, such as `components/content/about` for the "About" page. The goal was to remove the information from the page structure/style. This allows easy manipulation of page content by nontechnical users without use of a content management system.
