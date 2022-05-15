const Engineer = require("../lib/engineer")

describe('Testing engineer Class', () => {

    describe('Engineer class contaions the attribute and methods needed', () => {

        // Source of truth
        const defaultName = "Trevor";
        const defaultEmail = "Trevor@gmail.com";
        const defaultId = "12";
        const defaultRole = "Engineer"
        const defaultSpecial = "trevoreng"

        test('If we can instantiate an object from the class', () => {
            const engineer = new Engineer(defaultName, defaultId, defaultEmail, defaultSpecial);

            expect(engineer).toBeInstanceOf(Engineer);
            expect(engineer).toBeInstanceOf(Object);

        });

        it('Can get the engineer name by calling getName()', () => {

            const engineer = new Engineer(defaultName, defaultId, defaultEmail, defaultSpecial);
            const result = engineer.getName();

            expect(result).toBe(defaultName);
        });

        // test getEmail()
        it("Can get the engineer email by calling getEmail()", () => {

            const engineer = new Engineer(defaultName, defaultId, defaultEmail, defaultSpecial);

            const result = engineer.getEmail();

            expect(result).toBe(defaultEmail);
        });

        // test getId()
        it("Can get the engineer id by calling getId()", () => {

            const engineer = new Engineer(defaultName, defaultId, defaultEmail, defaultSpecial);

            const result = engineer.getId();

            expect(result).toBe(defaultId);
        });

        // test getRole()
        it("Can get the engineer role by calling getRole()", () => {

            const engineer = new Engineer(defaultName, defaultId, defaultEmail, defaultSpecial);

            const result = engineer.getRole();

            expect(result).toBe(defaultRole);
        });

        // test getSpecial()
        it("Can get the engineer's Github by calling getGithub()", () => {

            const engineer = new Engineer(defaultName, defaultId, defaultEmail, defaultSpecial);

            const result = engineer.getGithub();

            expect(result).toBe(defaultSpecial);
        });
    });
});