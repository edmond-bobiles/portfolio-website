# Edmond Bobiles | Portfolio

My personal portfolio website. I'm a Computer Science student at the University of Santo Tomas specializing in Data Science, and this site collects my projects, skills, and contact details in one place.

## What's inside

- **Home:** a short introduction, a link to my projects, and a resume download
- **Projects:** a featured selection on the homepage, a full listing at `/projects`, and a detail page for each project with its tech stack and links
- **Skills:** programming languages, tools and technologies, and soft skills
- **Contact:** email, GitHub, and LinkedIn

## Built with

- [Next.js](https://nextjs.org/) (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)

The site started as plain HTML, CSS, and JavaScript. I rebuilt it in Next.js to practice component-based design, typed data, and static page generation, keeping the same look and content.

## Run it locally

Requires Node.js and npm.

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

Other scripts: `npm run build`, `npm run start`, `npm run lint`, and `npm run typecheck`.

## Project structure

```
src/
├── app/            Pages and layout (home, /projects, /projects/[slug], 404)
├── components/     Header, navigation, footer, project cards
├── data/           Project list and portfolio content
└── types/          TypeScript types
public/assets/      Images, profile photo, and resume
```

