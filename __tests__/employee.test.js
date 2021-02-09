const employeeTest = require('../lib/employee')

test('creates an employee object', () => {
    const employee = new Employee();
  
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.name.length).toBeGreaterThan(0);
    expect(employee.id).toEqual(expect.any(String));
    expect(employee.id.length).toBeGreaterThan(0);
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.email.length).toBeGreaterThan(5);
    expect(employee.role).toBe('Employee');
  });
  