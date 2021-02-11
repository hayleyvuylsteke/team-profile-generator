//requirements for app to run successfully.
const inquirer = require('inquirer');
const Employee = require('../lib/employee');
const Manager = require('../lib/manager');
const Engineer = require('../lib/engineer');
const Intern = require('../lib/intern');


initializeBuild = () => {
    console.log(`
        =================
        Welcome to the Team Profile Generator
        =================
        Ready to start building a team profile? I'm going to ask you for some information so we can get it done. Let's start with information about the team's manager.
    `);
}
    
buildManager = () => {
    return inquirer.prompt([
        {
        type: 'input',
        name: 'name',
        message: `What's the manager's name?`,
        validate: name => {
            if (name) {
                return true;
            } else {
                console.log(`Please enter the manager's name`);
                return false;
            }
        }
        },
        {
        type: 'input',
        name: 'id',
        message: `What's the manager's employee ID?`,
        validate: id => {
            if (id) {
                return true;
            } else {
                console.log(`Please enter the manager's employee ID.`);
                return false;
            }
        }
        },
        {
        type: 'input',
        name: 'email',
        message: `What's the manager's email address?`,
        validate: email => {
            if (email) {
                return true;
            } else {
                console.log(`Please enter the manager's email address.`);
                return false;
            }
        }
        },
        {
        type: 'input',
        name: 'officeNumber',
        message: `What's the manager's office phone number?`,
        validate: officeNumber => {
            if (officeNumber) {
                return true;
            } else {
                console.log(`Please enter the manager's office phone number.`);
                return false;
            }
        }
        },
    ])
    .then(({name,id,email,officeNumber}) => {
        this.manager = new Manager(name,id,email,officeNumber);
    }).then(addMember())
}

addMember = newMember => {
    if (role === "I am finished building") {
        return //file building here.

    } else {
        return inquirer.prompt([
            {
            type: 'list',
            name: 'role',
            message: `Let's build this team! Who will we be adding next?`,
            choices: ['Engineer', 'Intern', 'I am finished building.',]
            },
            {
            type: 'input',
            name: 'name',
            message: `What's their name?`,
            validate: name => {
                if (name) {
                    return true;
                } else {
                    console.log(`Please enter their name.`);
                    return false;
                }
            }
            },
            {
            type: 'input',
            name: 'id',
            message: `What's their employee ID?`,
            validate: id => {
                if (id) {
                    return true;
                } else {
                    console.log(`Please enter their employee ID.`);
                    return false;
                }
            }
            },
            {
            type: 'input',
            name: 'email',
            message: `What's their email address?`,
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log(`Please enter their email address.`);
                    return false;
                }
            }
            },
            {
                type: 'input',
                name: 'github',
                message: `What's their Github username?`,
                when: (newMember) => newMember.role === "Engineer",
                validate: github => {
                    if (github) {
                      return true;
                    } else {
                      console.log(`Please enter their Github username.`);
                      return false;
                    }
                  }
              },
              {
                type: 'input',
                name: 'school',
                message: `What school do they attend?`,
                when: (newMember) => newMember.role === "Intern",
                validate: school => {
                    if (school) {
                      return true;
                    } else {
                      console.log(`Please enter their school.`);
                      return false;
                    }
                  }
              },
        ])
        .then((newMember) => {
            if (newMember.role === "Engineer") {
                const newEngineer = new Engineer (role, name, id, email, github);
                employees.push(newEngineer);

            } else if (newMember.role === "Intern") {
                const newIntern = new Intern (role, name, id, email, school);
                employees.push(newIntern);
            }
        })
    }
}

initializeBuild();

