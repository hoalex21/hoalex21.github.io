##

My personal portfolio website. Built using Next.js and deployed to GitHub Pages at [https://hoalex21.github.io/](https://hoalex21.github.io/).

## Getting Started

Before running the development server, install the required dependencies:

```bash
npm i
```

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Deploy on GitHub Pages

I am using GitHub Actions as my CI/CD pipeline to automate my deployment to GitHub pages. Every push to main will automatically build, lint, and deploy to [https://hoalex21.github.io/](https://hoalex21.github.io/).
