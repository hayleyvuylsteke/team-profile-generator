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

 class Engineer {
    constructor (name, id, email, github) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
    }
    getName() {
        return this.name;
    }
    getID () {
        return this.id;
    }
    getEmail () {
        return this.email;
    }
    getGithub () {
        return this.github
    }
    getRole () {
        return "Engineer"
    }
}
module.exports = Engineer;