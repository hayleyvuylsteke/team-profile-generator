const Engineer = require('../lib/engineer')
const Employee = require('../lib/employee')

test('testing creating a github', () => {
    let githubTest = "hayleyvuylsteke"

    let engineerTest1 = new Engineer ("Hayley Intern", "2332", "Hayley@hayley.com", githubTest)
  
  expect(engineerTest1.github).toBe(githubTest)  
  });
  
  test('getting engineer role', () => {
    let roleTest = "Engineer"

    let engineerTest2 = new Engineer ("hayley engineer", "23232", "hayley@hayley.com")

    expect(engineerTest2.getRole()).toBe(roleTest)
  })