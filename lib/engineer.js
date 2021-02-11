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
}
module.exports = Engineer;