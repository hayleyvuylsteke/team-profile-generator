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
    
    buildEngineerCard() {
        this.engineerCard =
        `
        <div class="card engineer-card">
            <div class="card-title"> 
                <span>${name}</span>
                <span><i class="fas fa-glasses"></i> ${role}</span>
            </div>
            <div class="card-content">
                <p>Employee ID: ${id}</p>
                <p>Email: <a href="mailto:${email}">${email}</a></p>
                <p>Github Profile: <a href="https://github.com/${github}">${github}</a></p>
            </div>
        </div>
        `
    }
}
module.exports = Engineer;