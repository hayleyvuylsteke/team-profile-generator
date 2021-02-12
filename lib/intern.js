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
 const Employee = require('./employee');

 class Intern extends Employee {
    constructor (name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    getSchool () {
        return this.school
    }
    getRole () {
        return "Intern"
    }

    buildCard() {
        let employeeCard = 
        `
        <div class="card small intern-card col s12 m6 l3 card-spacing">
        <div class="card-title"> 
            <span>${this.name}</span>
            <br>
            <span><i class="fas fa-user-graduate"></i> ${this.getRole()}</span>
        </div>
        <div class="card-content">
            <p>Employee ID: ${this.id}</p>
            <p>Email: <a href="mailto:${this.email}">${this.email}</a></p>
            <p>School: ${this.school}</a></p>
        </div>
    </div>
        `
        return employeeCard
    }
}
module.exports = Intern;