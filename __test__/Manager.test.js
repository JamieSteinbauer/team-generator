const Manager = require('../lib/Manager');

test('creates manager obect', () => {
    const manager = new Manager('duke', 1, 'duke@gmail.com', 300);

    expect(manager.name).toBe('duke');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));
})

