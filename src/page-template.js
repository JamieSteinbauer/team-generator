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
    const generateIntern = (intern) => {
        return `
        <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${intern.getName()}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${intern.getId()}</h6>
            <p class="card-text">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></p>
            <p class="card-text">School: ${intern.getSchool()}</p>
            </div>
        </div>
        `;
    }

    const html = [];

    html.push(
        myEmployees
        .filter((employee) => employee.getRole() === 'Manager')
        .map((manager) => generateManager(manager))
    )

    html.push(
        myEmployees
        .filter((employee) => employee.getRole() === 'Engineer')
        .map((engineer) => generateEngineer(engineer))
        .join('')
    )

    html.push(
        myEmployees
        .filter((employee) => employee.getRole() === 'Intern')
        .map((intern) => generateIntern(intern))
        .join('')
    )

    return html.join('');
}

module.exports = (myEmployees) => {
    return `
    <!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        
        <title>Team Profile</title>
        </head>

        <body>
        <h1 class="text-center">My Team</h1>
        <div class="container">
        ${generateEmployees(myEmployees)}
        </div>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" 
            integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous">
        </script>
        </body>
    `;
}