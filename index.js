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

//// end of manager question to build the team or not if yes you go to team role question

const endManagerQuestion = {
  type: "list",
  message: "Would you like to add more members to your team? select yes to add a engineer or intern.",
  choices: ["Yes", "No"],
  name: "memberTeamSize",
};

///team role question from here you go to the corresponding set of questions

const teamRole = {
  type: "list",
  message: "Is this member of the team a engineer or a intern.",
  choices: ["engineer", "intern"],
  name: "memberRoleType"

}

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

///intern array of questions//////
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








// init function starts the app and sends user to managerInfo function////

function init() {
  inquirer.prompt(startQuestion).then((response) => {
    if (response.starterQ === "Yes create team") {
      console.log("Please submit manager info");
      managerInfo();
    } else {
      console.log("application will now close thankyou.");

    }
  })

}

//// manager function that runs manager questions send manager to final question to start building of team
function managerInfo() {
  inquirer.prompt(managerQuestion).then((response) => {
    console.log(response);
    teamSize();
  })
}


// team building function for intern and engineer
function teamSize() {
  inquirer.prompt(endManagerQuestion).then((response) => {
    if (response.memberTeamSize === "Yes") {
      teamMemberLoop();
    } else if (response.memberTeamSize === "No") {
      console.log("This is where we build html page");
    }
  })
}


///team builder function
function teamMemberLoop() {
  inquirer.prompt(teamRole).then((teamRoleResponse) => {
    if (teamRoleResponse.memberRoleType === "engineer") {
      console.log("Submit engineer profile information");
      inquirer.prompt(engineerQuestion).then((engResponse) => {
        console.log(engResponse);
        teamSize();
      });
    } else if (teamRoleResponse.memberRoleType === "intern") {
      console.log("Submit intern profile information");
      inquirer.prompt(internQuestion).then((intResponse) => {
        console.log(intResponse);
        teamSize();
      });
    }
  });
}




init();