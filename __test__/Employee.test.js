const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
    const employee = new Employee('bob', 1, 'bob@email.com');
  
    expect(employee.name).toBe('bob');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

