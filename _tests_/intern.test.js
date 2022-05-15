const Intern = require("../lib/intern")

describe('Testing intern Class', () => {

    describe('Intern class contaions the attribute and methods needed', () => {

        // Source of truth
        const defaultName = "Frida";
        const defaultEmail = "Frida@gmail.com";
        const defaultId = "43";
        const defaultRole = "Intern"
        const defaultSpecial = "CitySchool"

        test('If we can instantiate an object from the class', () => {
            const intern = new Intern(defaultName, defaultId, defaultEmail, defaultSpecial);

            expect(intern).toBeInstanceOf(Intern);
            expect(intern).toBeInstanceOf(Object);

        });

        it('Can get the intern name by calling getName()', () => {

            const intern = new Intern(defaultName, defaultId, defaultEmail, defaultSpecial);
            const result = intern.getName();

            expect(result).toBe(defaultName);
        });

        // test getEmail()
        it("Can get the intern email by calling getEmail()", () => {

            const intern = new Intern(defaultName, defaultId, defaultEmail, defaultSpecial);

            const result = intern.getEmail();

            expect(result).toBe(defaultEmail);
        });

        // test getId()
        it("Can get the intern id by calling getId()", () => {

            const intern = new Intern(defaultName, defaultId, defaultEmail, defaultSpecial);

            const result = intern.getId();

            expect(result).toBe(defaultId);
        });

        // test getRole()
        it("Can get the intern role by calling getRole()", () => {

            const intern = new Intern(defaultName, defaultId, defaultEmail, defaultSpecial);

            const result = intern.getRole();

            expect(result).toBe(defaultRole);
        });

        // test getSpecial()
        it("Can get the intern's School by calling getSchool()", () => {

            const intern = new Intern(defaultName, defaultId, defaultEmail, defaultSpecial);

            const result = intern.getSchool();

            expect(result).toBe(defaultSpecial);
        });
    });
});