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
}