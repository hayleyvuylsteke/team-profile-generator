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

    buildInternCard() {
        this.internCard = 
        `
        <div class="card intern-card">
            <div class="card-title"> 
                <span>${name}</span>
                <span><i class="fas fa-user-graduate"></i> ${role}</span>
            </div>
            <div class="card-content">
                <p>Employee ID: ${id}</p>
                <p>Email: <a href="mailto:${email}">${email}</a></p>
                <p>School: ${school}</a></p>
            </div>
        </div>
        `
    }
}
module.exports = Intern;