const path = require("path");
const fs = require("fs");
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const pageTemplate = require("./src/page-template");
const OUTPUT_DIR = path.resolve(__dirname, "dist");
const outputPath = path.join(OUTPUT_DIR, "team.html");


function runApp() {
  //   ...Inquirer prompt and the functions that will ask users about manager, intern, and engineer.
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
    }
  ]).then(answers => {
    
    console.log(answers);
  })

}


//   function buildTeam() {
//     // Create the output directory if the output path doesn't exist
//     if (!fs.existsSync(OUTPUT_DIR)) {
//       fs.mkdirSync(OUTPUT_DIR)
//     }
//     fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
//   }
// }
runApp();