// creates employees
const generateEmployees = (myEmployees) => {
    //  creates the manager html
    const generateManager = (manager) => {
        // template literal to create html for manager
        return `
        <div class="col-4 p-5">
        <div class="card bg-danger text-dark">
        <div class="card-body">
        <h5 class="card-title fs-1">${manager.getName()}</h5>
        <h6 class="card-subtitle mb-2 fs-2"><i class="fas fa-mug-hot mr-2"></i> ${manager.getRole()}</h6>
        <p class="card-text p-1 fs-5">ID: ${manager.getId()}</p>
        <p class="card-text p-1 fs-5">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></p>
        <p class="card-text p-1 fs-5">Office Number: ${manager.getOfficeNumber()}</p>
        </div>
        </div>
        </div>
        `
    }
    //  creates the engineer html
    const generateEngineer = (engineer) => {
        // template literal to create html for engineer
        return `
    <div class="col-4 p-5">
    <div class="card bg-warning text-dark">
    <div class="card-body">
    <h5 class="card-title fs-1">${engineer.getName()}</h5>
    <h6 class="card-subtitle mb-2 fs-2"><i class="fas fa-glasses mr-2"></i> ${engineer.getRole()}</h6>
    <p class="card-text p-1 fs-5">ID: ${engineer.getId()}</p>
    <p class="card-text p-1 fs-5">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></p>
    <p class="card-text p-1 fs-5">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="no">${engineer.getGithub()}</a></p>
    </div>
    </div>
    </div>
    `
    };

    // creates the intern html
    const generateIntern = (intern) => {
        // template literal to create html for intern
        return `
    <div class="col-4 p-5">
    <div class="card bg-success text-dark">
    <div class="card-body">
    <h5 class="card-title fs-1">${intern.getName()}</h5>
    <h6 class="card-subtitle mb-2 fs-2"><i class="fas fa-user-graduate mr-2"></i> ${intern.getRole()}</h6>
    <p class="card-text p-1 fs-5">ID: ${intern.getId()}</p>
    <p class="card-text p-1 fs-5">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></p>
    <p class="card-text p-1 fs-5">School: ${intern.getSchool()}</p>
    </div>
    </div>
    </div>
    `
    };

    //  an empty array to hold the employees based on their role and inputs from the user to be pushed later
    const html = [];

    //  pushes the manager html to the array
    html.push(
        // the data from generateEmployees is passed in as an argument
        myEmployees
        // filters the array to find the manager
        .filter((employee) => employee.getRole() === 'Manager')
        // maps the array to generate the html for the manager
        .map((manager) => generateManager(manager))
    );
    html.push(
        // the data from generateEmployees is passed in as an argument
        myEmployees
        // filters the array to find the engineer
        .filter((employee) => employee.getRole() === 'Engineer')
        // maps the array to generate the html for the engineer
        .map((engineer) => generateEngineer(engineer))
        // joins the html array to create a string
        .join('')
    );
    html.push(
        // the data from generateEmployees is passed in as an argument
        myEmployees
        // filters the array to find the intern
        .filter((employee) => employee.getRole() === 'Intern')
        // maps the array to generate the html for the intern
        .map((intern) => generateIntern(intern))
        // joins the html array to create a string
        .join('')
    );
    // returns all roles and employees and joins the html array to create a string
    return html.join('');
}

// exports the generateEmployees function
module.exports = (myEmployees) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
            integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
            <script src="https://kit.fontawesome.com/0c923aefe5.js" crossorigin="anonymous"></script>
            <title>Team Profile Generator</title>
            </head>
            
            <body>
            <h1 class="text-center bg-primary text-white p-5">My Team</h1>
            <div class="row">
            ${generateEmployees(myEmployees)}
            </div>
            
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous">
            </script>
            </body>
            `
}