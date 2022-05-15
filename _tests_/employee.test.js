const Employee = require("../lib/employee")

describe('Testing Employee Class', () => {

    describe('Employee class contaions the attribute and methods needed', () => {
    
        // source of truth

        const defaultName = "Kieran";
        const defaultEmail = "Kieran@gmail.com";
        const defaultId = "12";
        const defaultRole = "Employee"

        // Happy path
        test('If we can instantiate an object from the class', () => {
            const employee = new Employee(defaultName, defaultEmail, defaultId)

            expect(employee).toBeInstanceOf(Employee);
            expect(employee).toBeInstanceOf(Object);
            // Set up the environment
            // Define the source of truth
            // Execute the code
            // Compare the result

        });
        test('Should fail if didnt pass in exactly 3 arguments', () => {
            expect(() => new Employee()).toThrow(Error);
            expect(() => new Employee(defaultId)).toThrow(Error);
            expect(() => new Employee(defaultId, defaultName)).toThrow(Error);
        });
        it('can set a name property in the constructor', () => {
            const employee = new Employee(defaultName, defaultId, defaultEmail);
            expect(employee.name).toBe(defaultName);
        });

        // take in the id arg, and set as property
        it("can set a id property in the constructor", () => {
            const employee = new Employee(defaultName, defaultId, defaultEmail);
            expect(employee.id).toBe(defaultId);
        });
        // take in the email arg, and set as property
        it("can set a email property in the constructor", () => {
            const employee = new Employee(defaultName, defaultId, defaultEmail);
            expect(employee.email).toBe(defaultEmail);
        });

        it('can get the employee name by calling getName()', () => {

            // replicate
            const employee = new Employee(defaultName, defaultId, defaultEmail);

            const result = employee.getName();

            expect(result).toBe(defaultName);

        });


        // test getEmail()
        it("can get the employee email by calling getEmail()", () => {

            // replicate
            const employee = new Employee(defaultName, defaultId, defaultEmail);

            const result = employee.getEmail();

            expect(result).toBe(defaultEmail);
        });

        // test getId()
        it("can get the employee id by calling getId()", () => {
       
            // replicate
            const employee = new Employee(defaultName, defaultId, defaultEmail);

            const result = employee.getId();

            expect(result).toBe(defaultId);
        });

        // test getRole()
        it("can get the employee role by calling getRole()", () => {

            // replicate
            const employee = new Employee(defaultName, defaultId, defaultEmail);

            const result = employee.getRole();

            expect(result).toBe(defaultRole);
        });
    });
});