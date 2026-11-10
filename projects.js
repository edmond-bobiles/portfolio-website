const projects = [
    {
        id: "blog-app",
        title: "Blog App",
        summary: "A full-stack blog platform with user accounts, posts, and comments.",
        details: "I built this blog app to practice creating a complete web application, from the user interface to the backend and database. Users can sign up, log in, publish and browse posts, and add comments; a FastAPI API connects the HTML and JavaScript frontend to a SQLAlchemy database. Building it helped me understand how frontend interactions, API routes, and related data such as users, posts, and comments fit together in a full-stack project.",
        image: "assets/blog-app.png",
        stack: ["HTML", "Tailwind CSS", "JavaScript", "Python", "FastAPI", "SQLAlchemy"],
        github: "https://github.com/edmond-bobiles/blog-app"
    },
    {
        id: "calculator",
        title: "Calculator",
        summary: "A browser-based calculator built for The Odin Project.",
        details: "I built this calculator as part of The Odin Project to practice JavaScript and interactive web interfaces. It performs basic arithmetic and supports decimal input, backspace, and clearing. You can use its buttons or the keyboard to enter calculations.",
        image: "assets/calculator.png",
        stack: ["HTML", "CSS", "JavaScript", "Bootstrap"],
        github: "https://github.com/edmond-bobiles/calculator"
    },
    {
        id: "nextjs-dashboard",
        title: "Next.js Dashboard",
        summary: "A financial dashboard for reviewing revenue and managing customer invoices.",
        details: "I built this dashboard while working through the Next.js App Router course. It displays revenue summaries, a revenue chart, and recent invoices. Users can sign in and search, paginate, create, and edit invoices backed by a PostgreSQL database. The customer page and invoice deletion are not fully implemented yet.",
        image: "assets/app-router.png",
        stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PostgreSQL", "NextAuth.js", "Zod"],
        github: "https://github.com/edmond-bobiles/nextjs-dashboard"
    }
];
