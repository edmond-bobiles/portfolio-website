# Edmond Bobiles | Portfolio

My personal portfolio website. I'm a Computer Science student at the University of Santo Tomas specializing in Data Science, and this site collects my projects, skills, and contact details in one place.

**Live site:** https://portfolio-website-one-eosin-81.vercel.app

## What's inside

- **Home:** a short introduction, a link to my projects, and a resume download
- **Projects:** a featured selection on the homepage, a full listing at `/projects`, and a detail page for each project with its tech stack and links
- **Skills:** grouped into Frontend, Backend, and Tools & DevOps, with icons
- **Contact:** email, GitHub, and LinkedIn links, plus a contact form with topic chips that sends a message to my inbox

## Built with

- [Next.js](https://nextjs.org/) (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [react-icons](https://react-icons.github.io/react-icons/) for the skill and contact icons
- [Zod](https://zod.dev/) for validating the contact form on the server
- [Resend](https://resend.com/) for sending the contact form's email

The site started as plain HTML, CSS, and JavaScript. I then rebuilt it in Next.js to practice component-based design, typed data, and Server Actions, then redesigned it in a monochrome style.

## Run it locally

Requires Node.js 20.9 or newer and npm.

```bash
npm install
cp .env.example .env.local
npm run dev
```

Then open http://localhost:3000.

Other scripts: `npm run build`, `npm run start`, `npm run lint`, and `npm run typecheck`.

## Environment variables

The contact form needs these in `.env.local`. Without them the site still runs, and the form shows a message that it isn't set up.

| Variable | Purpose |
|---|---|
| `RESEND_API_KEY` | API key from Resend |
| `CONTACT_TO_EMAIL` | The address that receives form messages |
| `CONTACT_FROM_EMAIL` | Optional. A sender on a domain verified with Resend |

`.env.local` is ignored by Git. Never commit real keys.

## Project structure

```
src/
├── actions/        Server Action that validates and sends the contact form
├── app/            Pages and layout (home, /projects, /projects/[slug], 404)
├── components/     Header, navigation, footer, project cards, skills, contact
├── data/           Projects, skills, portfolio content, contact topics
└── types/          TypeScript types
public/assets/      Project images and the resume
```

