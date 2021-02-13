const Manager = require('../lib/manager')
const Employee = require('../lib/employee')

test('Testing the office Number creation', () => {
    let officeNumberTest = '519-544,8876'

    let managerTest1 = new Manager ("Hayley Manager", "2334", "hayley@hayley.com", officeNumberTest)

    expect(managerTest1.officeNumber).toBe(officeNumberTest);
    
  });

  test ('Testing the getRole() function', () => {
    const roleTest = "Manager"

    let managerTest2 = new Manager ("Hayley Manager2", "2335", "Hayley@hayley.com", "519-555-2333")

    expect(managerTest2.getRole()).toBe(roleTest)

  })
  