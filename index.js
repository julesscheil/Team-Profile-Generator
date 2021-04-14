// Bring in required files and packages
const path = require("path");
const fs = require("fs");
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const pageTemplate = require("./src/page-template");
const OUTPUT_DIR = path.resolve(__dirname, "dist");
const outputPath = path.join(OUTPUT_DIR, "team.html");

// create team array
const team = [];

function runApp() {
  // start with manager
  function managerQuestions() {
    inquirer.prompt([
      // console.log("Please give your team's information:") ,
      {
        type: 'input',
        name: 'managerName',
        message: "What is your manager's name?",
      },
      {
        type: 'input',
        name: 'managerID',
        message: "What is the manager's ID?",
      },
      {
        type: 'input',
        name: 'managerEmail',
        message: "What is the manager's email?",
      },
      {
        type: 'input',
        name: 'managerOfficeNumber',
        message: "What is the manager's office number?"
      },
      {
        type: 'list',
        name: "moveOn",
        choices: ["Engineer", "Intern", "I dont want to add another"],
        message: "Add another member?"
      }
    ]).then(answers => {
      const manager = new Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.managerOfficeNumber);
      team.push(manager);

      switch (answers.moveOn) {
        case "Engineer":
          engineerQuestions();
        // case "Intern":
        //   internQuestions();
        case "I dont want to add another":
          buildTeam();
      }

      // buildTeam();
    })
  }
  managerQuestions();
}

function engineerQuestions() {
  inquirer
    .prompt([{
        type: 'input',
        name: 'engineerName',
        message: "What is your engineer's name?",
      },
      {
        type: 'input',
        name: 'engineerID',
        message: "What is the engineer's ID?",
      },
      {
        type: 'input',
        name: 'engineerEmail',
        message: "What is the engineer's email?",
      },
      {
        type: 'input',
        name: 'engineerGitHub',
        message: "What is the engineer's GitHub?"
      },
      {
        type: 'list',
        name: "moveOn",
        choices: ["Engineer", "Intern", "I dont want to add another"],
        message: "Add another member?"
      }
    ]).then(answers => {
      const engineer = new Engineer(answers.engineerName, answers.engineerID, answers.engineerEmail, answers.engineerGitHub);
      team.push(engineer);
      switch (answers.moveOn) {
        case "Engineer":
          engineerQuestions();
        // case "Intern":
        //   internQuestions();
        case "I dont want to add another":
          buildTeam();
      }
    });
}

function buildTeam() {
  // Create the output directory if the output path doesn't exist
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR)
  }
  fs.writeFileSync(outputPath, pageTemplate(team), "utf-8");
}
runApp();