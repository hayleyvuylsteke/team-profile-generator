const managerTest = require('../lib/manager')

test('creates a manager object', () => {
    const manager = new Manager();
  
    expect(manager.name).toEqual(expect.any(String));
    expect(manager.name.length).toBeGreaterThan(0);
    expect(manager.id).toEqual(expect.any(String));
    expect(manager.id.length).toBeGreaterThan(0);
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.email.length).toBeGreaterThan(5);
    expect(manager.role).toBe('Manager');
    expect(manager.officeNumber).toEqual(expect.any(String));
    expect(manager.officeNumber.length).toBeGreaterThan(9);
  });
  