# next-contentful

## Quickstart

- Rename the `.env.example` file to `.env.local` and fill in the variables.
- `npm install`.
- `npm run dev`.

## Development

- `npm run lint .`.

## References

- [#1 - Intro & Setup](https://youtu.be/m9mNsYJbkNg).
- [#2 - Contentful Models](https://youtu.be/otLsndcnqKM).
- [#3 - Contentful Client](https://youtu.be/sougdtlQlEk).
- Sarthak Sharma's [Setting up ESLint and Prettier For Your Next.js Project](https://xenox.dev/setting-up-eslint-and-prettier-for-next-js-project/) blog post.
- Paulin Trognon's [Start a clean Next.js project with TypeScript, ESLint and Prettier from scratch](https://paulintrognon.fr/blog/typescript-prettier-eslint-next-js) blog post.
- Eshwaren M's [Enable Emmet support for JSX in Visual Studio Code | React](https://medium.com/@eshwaren/enable-emmet-support-for-jsx-in-visual-studio-code-react-f1f5dfe8809c) blog post.
- [#4 - Outputting Recipe Data](https://youtu.be/r-Xn1EQD_aU).
- [#5 - Using Images from Contentful](https://youtu.be/Mdx3ywlnzk8).
- [#6 - Styled JSX](https://youtu.be/IJjgueLbhic).
- [#7 - Generating Paths](https://youtu.be/DRF1KBTH15k).
- [#8 - Rich Text Content](https://youtu.be/o6CnTHrwJ-Q).
- [#9 - Deploying to Vercel](https://youtu.be/0OOWCSVhHaU).
- [#10 - Incremental Static Regeneration](https://youtu.be/X0-6lyxj1_Q).
- [#11 - Fallback Pages](https://youtu.be/V4SVNleMitE).

## Notes

- `npx create-next-app [your-site-name] -e https://github.com/iamshaunjp/next-contentful/tree/lesson-1-starter-site`.
- [Contentful](https://www.contentful.com/) (headless CMS).
- `Title must be between 3 & 50 chars long`.
- Slug regex ([source](https://stackoverflow.com/a/19256344)): `^[a-z0-9]+(?:-[a-z0-9]+)*$`.
- `npm i contentful`.
- `npm install -D eslint eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y`.
- [VS Code ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).
- `npm install -D prettier eslint-plugin-prettier eslint-config-prettier`.
- [the component gallery](https://component.gallery/) ([repo](https://github.com/inbn/component-gallery)):
  - [Layout CSS](https://github.com/inbn/component-gallery/tree/master/src/css/layout).
- [Language Identifiers](https://code.visualstudio.com/docs/languages/identifiers) (VS Code).
- [SmolCSS](https://smolcss.dev/).
- [Deep Water](https://marketplace.visualstudio.com/items?itemName=bDesigned.deep-water) (VS Code theme).
- [Panda Syntax](https://marketplace.visualstudio.com/items?itemName=tinkertrain.theme-panda) (VS Code Theme).
- [@contentful/rich-text-react-renderer](https://www.npmjs.com/package/@contentful/rich-text-react-renderer) package.
- [Vercel](https://vercel.com/) (add the environment variables from the `.env.local` file).
- Incremental Static Regeneration: Next.js generates new pages and regenerates the current pages on the fly when data is updated.
- Fallback pages: placeholder content while Next.js fetches new data for a page.
