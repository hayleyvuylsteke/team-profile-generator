/* Extends the employee class annd has the following properties and methods:
  - name
  - id
  - email
  - getName()
  - getId()
  - getEmail
  - github //github username (not in employee)
  - getGithub () (not in employee)
  - getRole //overridden to return engineer
  */
 const Employee = require('./employee');

 class Engineer extends Employee {
    constructor (name, id, email, github) {
        super(name, email, id);
        this.github = github;
    }
    getGithub () {
        return this.github
    }
    getRole () {
        return "Engineer"
    }
    
    buildCard() {
        let employeeCard =
        `
        <div class="card small engineer-card col s12 m6 l3 card-spacing">
            <div class="card-title"> 
                <span>${this.name}</span>
                <br>
                <span><i class="fas fa-glasses"></i> ${this.role}</span>
            </div>
            <div class="card-content">
                <p>Employee ID: ${this.id}</p>
                <p>Email: <a href="mailto:${this.email}">${this.email}</a></p>
                <p>Github Profile: <a href="https://github.com/${this.github}">${this.github}</a></p>
            </div>
        </div>
        `;
        return employeeCard
    }

      //  fs.appendFile("./dist/team-profile.html", data, function(err) {
       //     if (err) {
      //          return reject(err);
      //      }; return resolve();
      //  }
    }

module.exports = Engineer;