const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    const intern = new Intern('sam', 3, 'sam@email.com', 'University');

    expect(intern.name).toBe('sam');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
})