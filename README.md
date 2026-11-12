# Portfolio Website

Personal portfolio website for Edmond Bobiles, a Computer Science student at the University of Santo Tomas specializing in Data Science. The site showcases software engineering and data engineering projects, technical skills, and resume downloads.

Built with vanilla HTML, CSS, and JavaScript without external frameworks or build steps.

## Overview

The site uses a clean layout and handles project presentations dynamically on the client side:

- Homepage (`index.html`): Introduction, featured projects list, categorized skills, and contact links.
- Projects Archive (`projects.html`): Full listing of all projects rendered from data.
- Project Detail Page (`project.html`): Reusable template that reads the `?id=` query parameter from the URL to display specific project details, tech tags, GitHub repository links, and previews.
- Scroll Navigation: Navigation bar links update active states as sections scroll into view.
- Resume Download: Direct download trigger configured for a static PDF asset.

## Tech Stack

- Markup: Semantic HTML5
- Styling: Vanilla CSS3 (CSS Grid, Flexbox, responsive breakpoints, Inter font)
- Scripting: Vanilla JavaScript (ES6+, DOM manipulation, URLSearchParams, IntersectionObserver)

## File Structure

```text
portfolio-website/
├── assets/
│   ├── app-router.png    # Preview screenshot for Next.js Dashboard
│   ├── blog-app.png      # Preview screenshot for Blog App
│   ├── calculator.png    # Preview screenshot for Calculator
│   ├── profile.jpg       # Profile picture (optional)
│   └── resume.pdf        # Downloadable resume
├── index.html            # Main landing page
├── project.html          # Single project detail page
├── projects.html         # All projects archive page
├── projects.js           # Project data array
├── script.js             # Card rendering, detail view generation, and scroll navigation
├── style.css             # Global styles, variables, and layout
└── README.md             # Project documentation
```

## Running Locally

Because the site consists of static files, no compilation or dependencies are required.

To view the site with a lightweight local web server (recommended for proper query string handling):

Using Python:
```bash
python3 -m http.server 8000
```

Using Node (`npx`):
```bash
npx serve .
```

Then visit `http://localhost:8000` in your browser.

You can also open `index.html` directly in any web browser.

## Managing Projects

All project information lives in `projects.js`. To add a new project, add an entry to the `projects` array:

```javascript
{
    id: "project-slug",
    title: "Project Name",
    summary: "Short summary shown on the card and header.",
    details: "Detailed explanation of what the project does, the technical decisions, and what was learned.",
    image: "assets/your-preview.png",
    stack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/username/project",
    demo: "https://demo-url.com" // optional
}
```

- id: Used for the URL query parameter (`project.html?id=project-slug`).
- demo: Optional field. If omitted, the "Live demo" button will not render.
- image: Relative path to your preview image in `assets/`.

## Static Assets

- Resume: Place your resume file at `assets/resume.pdf`. The download button on the homepage links directly to this path. When updating your resume, replace this file while keeping the filename intact.
- Profile photo: Place your image at `assets/profile.jpg` for the homepage hero section.
