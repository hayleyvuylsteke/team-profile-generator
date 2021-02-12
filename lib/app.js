//requirements for app to run successfully.
const inquirer = require('inquirer');
const Employee = require('../lib/employee');
const Manager = require('../lib/manager');
const Engineer = require('../lib/engineer');
const Intern = require('../lib/intern');
const fs = require('fs');

//employees array
let employees = []
//functions of the app

//Intro message to get started
initializeBuild = () => {
    console.log(`
=================
Welcome to the Team Profile Generator
=================
Ready to start building a team profile? 
I'm going to ask you for some information so we can get it done. 
Let's start with information about the team's manager.
    `);
}

//Build the manager's profile
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
        let newManager = new Manager(name,id,email,officeNumber);
        employees.push(newManager);
        promptAddMember();
    })
    
}

promptAddMember = () => {
    return inquirer.prompt({
            type: 'list',
            name: 'role',
            message: `Let's build this team! Who will we be adding next?`,
            choices: ['Engineer', 'Intern', 'I am finished building.',]
            },
    ).then(({role}) => {
    if (role === "I am finished building.") {
        //build file functionality
        buildTeamProfile();
    } else if (role === "Engineer"){
        addEngineer();
    } else if (role === "Intern") {
        addIntern();
    }
    })
}
//newengineer build
addEngineer = () => {
        return inquirer.prompt([
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
                validate: github => {
                    if (github) {
                      return true;
                    } else {
                      console.log(`Please enter their Github username.`);
                      return false;
                    }
                  }
              },
              
        ])
        .then(({name,id,email,github,}) => {

                let newEngineer = new Engineer (name, id, email, github);
                employees.push(newEngineer);
                promptAddMember();

        })
}

//build intern
addIntern = () => {
        return inquirer.prompt([
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
                name: 'school',
                message: `What school do they attend?`,
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
        .then(({name,id,email,school}) => {
                let newIntern = new Intern (name, id, email, school);
                employees.push(newIntern);
                promptAddMember();
        })
}
buildPageShell = () => {
    const htmlTop =
    `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
        <link rel="stylesheet" href="./styles.css">
        <title>Team Profile</title>
    </head>
    <body>
        <nav>
            <div class="nav-wrapper nav-height">
                <a href="#" class="brand-logo center">Team Profile</a>
            </div>
        </nav>
        <section>
                <div class="row container">`
        fs.writeFileSync("../dist/team-profile.html", htmlTop, function(err) {
            if (err) {
                console.log(err)
            }
        })
}

finishPageShell = () => {
    const htmlBottom =
    `
    </div>
    </section>
    <footer class="page-footer">
        <div class="container">
          <div class="row">
              <h5 class="white-text">Made with ♥ from a command line near you.</h5>
            </div>
          </div>
        </div>
        <div class="footer-copyright">
          <div class="container">
          © 2021 Copyright
          </div>
        </div>
      </footer>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
    <script src="https://kit.fontawesome.com/fce42678c9.js" crossorigin="anonymous"></script>
</body>
</html>
    `
    fs.appendFileSync("../dist/team-profile.html", htmlBottom, function(err) {
        if (err) {
            console.log(err)
        } else {
            console.log("Your profile is complete. Check the dist folder!")
        }
    })
}

buildTeamProfile = () => {
    //build the page
    buildPageShell();

    //build the cards
    for (var i = 0; i < employees.length; i++) {
        let employeeCard = employees[i].buildCard();
        fs.appendFileSync("../dist/team-profile.html", employeeCard, function(err) {
            if (err) {
                console.log(err)
            }
        })
    }
    //finish the footer 
    finishPageShell();

}

initializeBuild()
buildManager()
