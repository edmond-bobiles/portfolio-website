function createProjectCard(project) {
    const card = document.createElement("div");
    card.className = "project";

    card.innerHTML = `
        <img src="${project.image}" alt="Screenshot of ${project.title}">
        <div class="project-body">
            <h3>${project.title}</h3>
            <p>${project.summary}</p>
            <div class="project-links">
                <a class="btn btn-secondary btn-small" href="project.html?id=${project.id}">View project</a>
                ${project.demo ? `<a href="${project.demo}" target="_blank" rel="noopener">Live site</a>` : ""}
            </div>
        </div>
    `;

    return card;
}

function renderProjects(container, list) {
    for (const project of list) {
        container.appendChild(createProjectCard(project));
    }
}

function renderProjectDetail(container) {
    const id = new URLSearchParams(window.location.search).get("id");
    const project = projects.find(p => p.id === id);

    if (!project) {
        container.innerHTML = `
            <h1>Project not found</h1>
            <a href="projects.html">← Back to all projects</a>
        `;
        return;
    }

    document.title = `${project.title} | Edmond Bobiles`;

    container.innerHTML = `
        <a class="back-link" href="projects.html">← All projects</a>
        <h1>${project.title}</h1>
        <p class="detail-summary">${project.summary}</p>

        <ul class="tags">
            ${project.stack.map(tech => `<li>${tech}</li>`).join("")}
        </ul>

        <div class="detail-buttons">
            ${project.demo ? `<a class="btn btn-primary" href="${project.demo}" target="_blank" rel="noopener">Live demo</a>` : ""}
            <a class="btn btn-secondary" href="${project.github}" target="_blank" rel="noopener">GitHub</a>
        </div>

        <img class="detail-image" src="${project.image}" alt="Screenshot of ${project.title}">

        <h2>About this project</h2>
        <p class="detail-text">${project.details}</p>
    `;
}

// Project grid (index.html and projects.html)
const grid = document.getElementById("project-grid");
if (grid) {
    const limit = grid.dataset.limit === "all" ? projects.length : Number(grid.dataset.limit);
    renderProjects(grid, projects.slice(0, limit));
}

// Project detail page (project.html)
const detail = document.getElementById("project-detail");
if (detail) {
    renderProjectDetail(detail);
}