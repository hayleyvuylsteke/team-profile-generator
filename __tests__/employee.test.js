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
  
  test('Testing employee methods', () => {
    let nameTest2 = "Hayley Employee2"
    let idTest2 = "21324"
    let testEmail2 = "hayley@hayley.com2"
    let testRole2 = "Employee"

    let employeeTest2 = new Employee("Hayley Employee2", "21324", "hayley@hayley.com2");

    expect(employeeTest2.getName()).toBe(nameTest2)
    expect(employeeTest2.getID()).toBe(idTest2)
    expect(employeeTest2.getEmail()).toBe(testEmail2)
    expect(employeeTest2.getRole()).toBe(testRole2)
  });