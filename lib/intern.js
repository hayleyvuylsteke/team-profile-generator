/* Extends the employee class annd has the following properties and methods:
  - name
  - id
  - email
  - getName()
  - getId()
  - getEmail
  - school //school intern attends (not in employee)
  - getSchool () (not in employee)
  - getRole //overridden to return intern
  */

 class Intern extends Employee {
    constructor (name, id, email, school) {
        super(name, id, email)
        this.school = school;
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
    getSchool () {
        return this.school
    }
    getRole () {
        return "Intern"
    }
}
module.exports = Intern;