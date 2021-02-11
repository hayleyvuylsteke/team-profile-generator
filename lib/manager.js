/* Extends the employee class annd has the following properties and methods:
  - name
  - id
  - email
  - getName()
  - getId()
  - getEmail
  - officeNumber (not in employee class)
  - getRole //overridden to return manager
  */
 const Employee = require('./employee');

 class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super (name, id, email);
        this.officeNumber = officeNumber;
    };
    getOfficeNumber () {
        return this.officeNumber
    };
    getRole () {
        return "Manager"
    };
    buildManagerCard() {
        this.managerCard =
    `<div class="card manager-card">
        <div class="card-title"> 
            <span>${name}</span>
            <span><i class="fas fa-briefcase"></i> ${role}</span>
        </div>
        <div class="card-content">
            <p>Employee ID: ${id}</p>
            <p>Email: <a href="mailto:${email}">${email}</a></p>
            <p>Phone: <a href="tel:${officeNumber}">${officeNumber}</a></p>
        </div>
    </div>
    `
    }
}
module.exports = Manager;