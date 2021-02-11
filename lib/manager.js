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
 const Employee = require('../lib/employee');

 class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super (name, id, email)
        this.officeNumber = officeNumber;
    }
    getOfficeNumber () {
        return this.officeNumber
    }
    getRole () {
        return "Manager"
    }
}
module.exports = Manager;