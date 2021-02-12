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
    buildCard() {
        let managerCard =
    `<div class="card small manager-card col s12 m6 l3 card-spacing">
    <div class="card-title"> 
        <span>${this.name}</span>
        <br>
        <span><i class="fas fa-briefcase"></i> ${this.getRole()}</span>
    </div>
    <div class="card-content">
        <p>Employee ID: ${this.id}</p>
        <p>Email: <a href="mailto:${this.email}">${this.email}</a></p>
        <p>Phone: <a href="tel:${this.officeNumber}">${this.officeNumber}</a></p>
    </div>
</div>
    `
    return managerCard
    }
}
module.exports = Manager;