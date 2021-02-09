const engineerTest = require('../lib/engineer')

test('creates an engineer object', () => {
    const engineer = new Engineer();
  
    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.name.length).toBeGreaterThan(0);
    expect(engineer.id).toEqual(expect.any(String));
    expect(engineer.id.length).toBeGreaterThan(0);
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.email.length).toBeGreaterThan(5);
    expect(engineer.role).toBe('Engineer');
    expect(engineer.github).toEqual(expect.any(String));
    expect(engineer.github.length).toBeGreaterThan(5);
  });
  