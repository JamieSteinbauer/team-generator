const inquirer = require('inquirer');
const fs = require('fs');
const generateEmployees = require('./lib/generateEmployees');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const saveTeamInfo = [];

const questions = async () => {
    const answers = await inquirer.prompt([{
        type: 'input',
        name: 'name',
        message: 'What is your name?'
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is your ID?'
    },
    {
        type: 'list',
        name: 'role',
        message: 'What is your role?',
        choices: ['Manager', 'Engineer', 'Intern']
    }])

    if (answers.role === 'Manager') {
        const managerAnswers = await inquirer.prompt([{
            type: 'input',
            name: 'officeNumber',
            message: 'What is your office number?'
        }])
        const Manager = new Manager(answers.name, answers.id, answers.email, managerAnswers.officeNumber);
        saveTeamInfo.push(Manager);
    }
    else if (answers.role === 'Engineer') {
        const engineerAnswers = await inquirer.prompt([{
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username?'   
        }])

        const Engineer = new Engineer(answers.name, answers.id, answers.email, engineerAnswers.github);
        saveTeamInfo.push(Engineer);
    }
    else if (answers.role === 'Intern') {
        const internAnswers = await inquirer.prompt([{
            type: 'input',
            name: 'school',
            message: 'What school do you go to?'
        }])

        const Intern = new Intern(answers.name, answers.id, answers.email, internAnswers.school);
        saveTeamInfo.push(Intern);
    }

    const nextEmployee = await inquirer.prompt([{
        type: 'confirm',
        name: 'nextEmployee',
        message: "Would you like to add another employee?"
    }])

    if (nextEmployee.nextEmployee) {
        return questions();
    }
    else {
        return writeToFile();
    }
}

questions();

function writeToFile() {
    fs.writeFile('./dist/index.html', generateEmployees(saveTeamInfo), err => {
        if (err) throw err;
        console.log('Successfully wrote to file!');
    })
}