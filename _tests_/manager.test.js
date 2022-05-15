const Manager = require("../lib/manager")

describe('Testing manager Class', () => {

    describe('Manager class contaions the attribute and methods needed', () => {

        // Source of truth
        const defaultName = "Jolene";
        const defaultEmail = "Jolene@gmail.com";
        const defaultId = "3";
        const defaultRole = "Manager"
        const defaultSpecial = "19"

        test('If we can instantiate an object from the class', () => {
            const manager = new Manager(defaultName, defaultId, defaultEmail, defaultSpecial);

            expect(manager).toBeInstanceOf(Manager);
            expect(manager).toBeInstanceOf(Object);

        });

        it('Can get the manager name by calling getName()', () => {

            const manager = new Manager(defaultName, defaultId, defaultEmail, defaultSpecial);
            const result = manager.getName();

            expect(result).toBe(defaultName);
        });

        // test getEmail()
        it("Can get the manager email by calling getEmail()", () => {

            const manager = new Manager(defaultName, defaultId, defaultEmail, defaultSpecial);

            const result = manager.getEmail();

            expect(result).toBe(defaultEmail);
        });

        // test getId()
        it("Can get the manager id by calling getId()", () => {

            const manager = new Manager(defaultName, defaultId, defaultEmail, defaultSpecial);

            const result = manager.getId();

            expect(result).toBe(defaultId);
        });

        // test getRole()
        it("Can get the manager role by calling getRole()", () => {

            const manager = new Manager(defaultName, defaultId, defaultEmail, defaultSpecial);

            const result = manager.getRole();

            expect(result).toBe(defaultRole);
        });

        // test getSpecial()
        it("Can get the manager's office number by calling getOfficeNumber()", () => {

            const manager = new Manager(defaultName, defaultId, defaultEmail, defaultSpecial);

            const result = manager.getOfficeNumber();

            expect(result).toBe(defaultSpecial);
        });
    });
});