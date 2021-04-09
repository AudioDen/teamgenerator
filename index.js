const inquirer = require("inquirer");
const fs = require("fs");


//const Manager = requier("./lib/manger");
//const Engineer = requier("./lib/engineer");
//const Intern = requier("./lib/intern");




// first question to begin app ///
const startQuestion = {
  type: "list",
  message: "This is a team profile generator. It will generate a useful html file with useful info on team members the team can access. Would you like to continue? ",
  choices: ["Yes create team", "no not at this time"],
  name: "starterQ"
};


/// manager array of questions//

const managerQuestion = [
  {
    type: "input",
    message: "What is the manager name?",
    name: "managerName",
  },
  {
    type: "input",
    message: "What is the manager id number?",
    name: "managerId",
  },
  {
    type: "input",
    message: "What is the manager email address?",
    name: "managerEmail",
  },
  {
    type: "input",
    message: "What is the manager office number?",
    name: "managerOfficeNumber",
  },
];


/// Engineer array of questions  ///

const engineerQuestion = [
  {
    type: "input",
    message: "What is the engineer name?",
    name: "engineerName",
  },
  {
    type: "input",
    message: "What is the engineer id number?",
    name: "engineerId",
  },
  {
    type: "input",
    message: "What is the engineer email address?",
    name: "engineerEmail",
  },
  {
    type: "input",
    message: "What is the engineer Github profile name?",
    name: "enginneerGithub",
  },
];
const internQuestion = [
  {
    type: "input",
    message: "What is the intern's name?",
    name: "internName",
  },
  {
    type: "input",
    message: "What is the intern's id number?",
    name: "internId",
  },
  {
    type: "input",
    message: "What is the intern's email address?",
    name: "inter Email",
  },
  {
    type: "input",
    message: "What is the intern's Bootcamp or university?",
    name: "internSchool",
  },
];









function init() {
  inquirer.prompt(startQuestion).then((response) => {
    if (response.starterQ === "Yes create team") {
      console.log("Please submit manager info");
    } else {
      console.log("application will now close thankyou.");

    }
  })

}

init();