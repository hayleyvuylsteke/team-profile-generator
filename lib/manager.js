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

 class Manager {
    constructor (name, id, email, officeNumber) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber;
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
    getOfficeNumber () {
        return this.officeNumber
    }
    getRole () {
        return "Manager"
    }
}
module.exports = Manager;