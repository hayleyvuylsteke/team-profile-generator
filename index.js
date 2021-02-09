//Packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer')


const promptManager = () => {
  console.log(`
  =================
  Welcome to the Team Profile Generator
  =================
  Ready to start building a team profile? I'm going to ask you for some information so we can get it done. Let's start with information about the team's manager.
  `);

  return inquirer.prompt([
    {
      type: 'input',
      name: 'managerName',
      message: `What's the manager's name?`,
      validate: managerName => {
        if (managerName) {
          return true;
        } else {
          console.log(`Please enter the manager's name`);
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'managerID',
      message: `What's the manager's employee ID?`,
      validate: managerID => {
        if (managerID) {
          return true;
        } else {
          console.log(`Please enter the manager's employee ID.`);
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'managerEmail',
      message: `What's the manager's email address?`,
      validate: managerEmail => {
        if (managerEmail) {
          return true;
        } else {
          console.log(`Please enter the manager's email address.`);
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'managerPhone',
      message: `What's the manager's office phone number?`,
      validate: managerPhone => {
        if (managerPhone) {
          return true;
        } else {
          console.log(`Please enter the manager's office phone number.`);
          return false;
        }
      }
    },
  ]);
};

const promptMenu = () => {
  return inquirer.prompt([
  {
    type: 'list',
    name: 'buildTeam',
    message: `Let's build this team! Who will we be adding next?`,
    choices: ['Engineer', 'Intern', 'I am finished building',]
  },
  
])
  
}

const promptIntern = managerData => {
  if (managerData.buildTeam === "Intern") {
    return inquirer.prompt(
      {
        type: 'input',
        name: 'internName',
        message: `What's the intern's name?`,
        validate: internName => {
          if (internName) {
            return true;
          } else {
            console.log(`Please enter the intern's name.`);
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'internID',
        message: `What's the intern's employee ID?`,
        validate: internID => {
          if (internID) {
            return true;
          } else {
            console.log(`Please enter the intern's employee ID.`);
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'internEmail',
        message: `What's the intern's email address?`,
        validate: internEmail => {
          if (internEmail) {
            return true;
          } else {
            console.log(`Please enter the intern's email address.`);
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'internSchool',
        message: `What school does the intern attend?`,
        validate: internSchool => {
          if (internSchool) {
            return true;
          } else {
            console.log(`Please enter the intern's school.`);
            return false;
          }
        }
      })
      return promptMenu();
  }
}

const promptEngineer = managerData => {
    return inquirer.prompt(
      {
        type: 'input',
        name: 'engineerName',
        message: `What's the engineer's name?`,
        validate: engineerName => {
          if (engineerName) {
            return true;
          } else {
            console.log(`Please enter the engineer's name.`);
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'engineerID',
        message: `What's the engineer's employee ID?`,
        validate: engineerID => {
          if (engineerID) {
            return true;
          } else {
            console.log(`Please enter the engineer's employee ID.`);
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'engineerEmail',
        message: `What's the engineer's email address?`,
        validate: engineerEmail => {
          if (engineerEmail) {
            return true;
          } else {
            console.log(`Please enter the engineer's email address.`);
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'engineerGitHub',
        message: `What's the engineer's GitHub username?`,
        validate: engineerGitHub => {
          if (engineerGitHub) {
            return true;
          } else {
            console.log(`Please enter the engineer's GitHub username.`);
            return false;
          }
        }
      })
      return promptMenu();
  }


promptManager()
  .then(promptMenu)
  .then(menuData => {
    if (menuData.buildTeam === "engineer") {
    return promptEngineer();
    }
    if (menuData.buildTeam === "intern") {
      return promptIntern();
    }
    else {
      return
    }
  })
  