const Intern = require('../lib/intern')
const Employee = require('../lib/employee')

test('testing creating a school', () => {
    let schoolTest = "U of T"

    let internTest1 = new Intern ("Hayley Intern", "2332", "Hayley@hayley.com", schoolTest)
  
  expect(internTest1.school).toBe(schoolTest)  
  });
  
  test('getting intern role', () => {
    let roleTest = "Intern"

    let internTest2 = new Intern ("hayley intern", "23232", "hayley@hayley.com")

    expect(internTest2.getRole()).toBe(roleTest)
  })