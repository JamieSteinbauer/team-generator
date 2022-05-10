const generateEmployees = (myEmployees) => {
    const generateManager = (manager) => {
        return `
        <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${manager.getName()}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${manager.getId()}</h6>
            <p class="card-text">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></p>
            <p class="card-text">Office Number: ${manager.getOfficeNumber()}</p>
            </div>
        </div>
        `;
    }
    const generateEngineer = (engineer) => {
        return `
        <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${engineer.getName()}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${engineer.getId()}</h6>
            <p class="card-text">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></p>
            <p class="card-text">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="no">${engineer.getGithub()}</a></p>
            </div>
        </div>
        `;
    }
}