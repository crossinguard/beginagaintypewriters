# Begin Again Typewriters | Website

This repo houses the website files for [Begin Again Typewriters](https://beginagaintypewriters.com), created using the [Astro web framework](https://astro.build) with a headless content management system through [Tina CMS](https://tina.io). 

The approach used here is based on Andy Bell's [A CSS project boilerplate](https://piccalil.li/blog/a-css-project-boilerplate/) and lessons learned in his course [Complete CSS](https://piccalil.li/complete-css/).

## Edit with GitHub Codespace

Using a [GitHub Codespace](https://github.com/features/codespaces) allows you to edit all project files and website content without installing/downloading anything to your local machine. From the [GitHub project repo](https://github.com/crossinguard/beginagaintypewriters), select Code > Codespaces. The Codespace can be opened in either a local version or the web app version of VS Code.

This projects makes use of [bun](https://bun.sh), a JavaScript runtime & toolkit similar to [npm](https://www.npmjs.com/package/npm). A fresh Codespace should already have `npm` installed, which we will use to install `bun` for this project.

Before running any commands, install `bun` (see [bun documentation](https://bun.sh/docs/installation)) within the Codespace by entering the following into the Codespace terminal (View > Terminal):

```bash
npm install bun
```

You should now run `bun install` to install the dependencies for this project.

### `bun` Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `bun install`             | Installs dependencies                            |
| `bun dev`             | Starts local dev server at `localhost:4321`      |
| `bun build`           | Build your production site to `./dist/`          |
| `bun preview`         | Preview your build locally, before deploying     |
| `bun astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `bun astro -- --help` | Get help using the Astro CLI                     |

Within the Codespace terminal, run `bun dev` to launch the internal development version of your project. Access your project by visiting [http://localhost:4321](http://localhost:4321), as directed by the information in the terminal.

Website content can be edited by either interacting with the `.md` files located in `src/content/` or by visiting the Tina CMS admin page at [http://localhost:4321/admin/index.html](http://localhost:4321/admin/index.html).