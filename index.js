// Bring in required files and packages
const path = require("path");
const fs = require("fs");
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const pageTemplate = require("./src/page-template");
const output_DIR = path.resolve(__dirname, "dist");
const outputPath = path.join(output_DIR, "team.html");

// create empty team array
const team = [];

//main function to run application
function init() {
  // start with manager
  function managerQuestions() {
    console.log("Please fill in team info: ");
    // prompt questions
    inquirer.prompt([{
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
      // save data to new object
      const manager = new Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.managerOfficeNumber);
      // push to team array
      team.push(manager);

      //add another member?
      switch (answers.moveOn) {
        case "Engineer":
          engineerQuestions();
          break;
        case "Intern":
          internQuestions();
          break;
        //break out
        case "I dont want to add another":
          buildTeam();
      }
    })
  }
  managerQuestions();
}

// function to add engineers questions if user asked to add engineer
function engineerQuestions() {
  //prompts questions
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
      // add to new engineer object
      const engineer = new Engineer(answers.engineerName, answers.engineerID, answers.engineerEmail, answers.engineerGitHub);
      // push to team array
      team.push(engineer);
      //add another?
      switch (answers.moveOn) {
        case "Engineer":
          engineerQuestions();
          break;
        case "Intern":
          internQuestions();
          break;
          //break out
        case "I dont want to add another":
          buildTeam();
      }
    });
}

// function to add intern if user selects to
function internQuestions() {
  // prompt questions
  inquirer
    .prompt([{
        type: 'input',
        name: 'internName',
        message: "What is your intern's name?",
      },
      {
        type: 'input',
        name: 'internID',
        message: "What is the intern's ID?",
      },
      {
        type: 'input',
        name: 'internEmail',
        message: "What is the intern's email?",
      },
      {
        type: 'input',
        name: 'internSchool',
        message: "What school did your intern go to?"
      },
      {
        type: 'list',
        name: "moveOn",
        choices: ["Engineer", "Intern", "I dont want to add another"],
        message: "Add another member?"
      }
    ]).then(answers => {
      // add data to new intern object
      const intern = new Intern(answers.internName, answers.internID, answers.internEmail, answers.internSchool);
      // push to team array
      team.push(intern);
      // add members?
      switch (answers.moveOn) {
        case "Engineer":
          engineerQuestions();
          break;
        case "Intern":
          internQuestions();
          break;
        case "I dont want to add another":
          buildTeam();
      }
    });
}

// function to build team to file
function buildTeam() {
  // Create the output directory if the output path doesn't exist
  if (!fs.existsSync(output_DIR)) {
    fs.mkdirSync(output_DIR)
  }
  fs.writeFileSync(outputPath, pageTemplate(team), "utf-8");
}

// function call to init function to start application
init();