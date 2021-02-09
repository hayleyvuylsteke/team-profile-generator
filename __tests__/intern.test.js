const internTest = require('../lib/intern')

test('creates an intern object', () => {
    const intern = new Intern();
  
    expect(intern.name).toEqual(expect.any(String));
    expect(intern.name.length).toBeGreaterThan(0);
    expect(intern.id).toEqual(expect.any(String));
    expect(intern.id.length).toBeGreaterThan(0);
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.email.length).toBeGreaterThan(5);
    expect(intern.role).toBe('Intern');
    expect(intern.school).toEqual(expect.any(String));
    expect(intern.school.length).toBeGreaterThan(5);
  });
  