const Employee = require('../lib/employee')

test('Testing setting values via constructor', () => {
    let nameTest = "Hayley Employee"
    let idTest = "21323"
    let testEmail = "hayley@hayley.com"

    let employeeTest = new Employee("Hayley Employee", "21323", "hayley@hayley.com");


  
    expect(employeeTest.name).toBe(nameTest);
    expect(employeeTest.id).toBe(idTest);
    expect(employeeTest.email).toBe(testEmail);
  });
  