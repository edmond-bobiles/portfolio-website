const projects = [
    {
        title: "Blog App",
        description: "A full-stack blog platform with user accounts, posts, and comments.",
        image: "assets/blog-app.png",
        github: "https://github.com/edmond-bobiles/blog-app",
        demo: ""  
    },
    
    {
        title: "Blog App",
        description: "A full-stack blog platform with user accounts, posts, and comments.",
        image: "assets/blog-app.png",
        github: "https://github.com/edmond-bobiles/blog-app",
        demo: ""   
    },

    {
        title: "Blog App",
        description: "A full-stack blog platform with user accounts, posts, and comments.",
        image: "assets/blog-app.png",
        github: "https://github.com/edmond-bobiles/blog-app",
        demo: ""    
    },
];

function createProjectCard(project) {
    const card = document.createElement("div");
    card.className = "project";

    card.innerHTML = `
        <img src="${project.image}" alt="Screenshot of ${project.title}">
        <div class="project-body">
            <h3>${project.title}</h3>
            <p>${project.description}<p>
            <a href="${project.github}"></a>
            <div class="project-links">
                <a class="btn btn-secondary btn-small" href="${project.github}" target="_blank" rel="noopener">View project</a>
                ${project.demo ? `<a href="${project.demo}" target="_blank" rel="noopener">Live site</a>` : ""}
            </div>
        </div>
    `;

    return card;
}

function renderProjects(container, list) {
    // Loop through list, create a card for each one, and append it to container
    for (const project of list){
        const card = createProjectCard(project);
        container.appendChild(card);
    }
}

const grid = document.getElementById("project-grid");
if (grid) {
    const limit = grid.dataset.limit === "all" ? projects.length : Number(grid.dataset.limit);

    renderProjects(grid,projects.slice(0,limit));
}