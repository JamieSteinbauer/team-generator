const inquirer = require('inquirer');
const fs = require('fs');
const generateEmployees = require('./src/page-template');

const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')

const saveTeamData = [];

// questions for user
const questions = async () => {
    const answers = await inquirer.prompt([{
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your ID#?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?'
        },
        {
            type: 'list',
            name: 'role',
            message: 'What is your role?',
            choices: ['Manager', 'Engineer', 'Intern']
        },
    ])

    // prompts questions for Manager
    if (answers.role === 'Manager') {
        const managerAnswers = await inquirer.prompt([{
            type: 'input',
            name: 'officeNumber',
            message: 'What is your office number?'
        }, ])
        //  creates Manager object
        const manager = new Manager(answers.name, answers.id, answers.email, managerAnswers.officeNumber);
        //  pushes Manager object to saveTeamData array
        saveTeamData.push(manager);
    }
    // prompts questions for Engineer
    else if (answers.role === 'Engineer') {
        const engineerAnswers = await inquirer.prompt([{
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username?'
        }, ])

        const engineer = new Engineer(answers.name, answers.id, answers.email, engineerAnswers.github);

        saveTeamData.push(engineer);
    }
    // prompts questions for Intern
    else if (answers.role === 'Intern') {
        const internAnswers = await inquirer.prompt([{
            type: 'input',
            name: 'school',
            message: 'What is your school?'
        }, ])

        const intern = new Intern(answers.name, answers.id, answers.email, internAnswers.school);

        saveTeamData.push(intern);
    }
    //  prompts questions for next Employee
    const nextEmployee = await inquirer.prompt([{
        type: 'confirm',
        name: 'nextEmployee',
        message: 'Would you like to add another employee?'
    }])
    //  if nextEmployee is true, prompts questions for next Employee
    if (nextEmployee.nextEmployee) {
        return questions();
    }
    //  if nextEmployee is false, calls generateEmployees function
    else {
        return writeToFile();
    }
}
//  calls questions function
questions();

function writeToFile() {
    //  creates html file
    fs.writeFile('./dist/index.html', generateEmployees(saveTeamData), err => {
        if (err) throw err;
        console.log('Successfully wrote to index.html');
    })
}