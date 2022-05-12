const Employee = require("../lib/employee")

describe('Testing Employee Class', () => {

    describe('Employee class contaions the attribute and methods needed', () => {

        const defaultName = "Kieran";
        const defaultEmail = "Kieran@gmail.com";
        const defaultId = "12";

        // Happy path
        test('If we can instantiate an object from the class', () => {
            const employee = new Employee(defaultName, defaultEmail, defaultId)

            expect(employee).toBeInstanceOf(Employee);
            expect(employee).toBeInstanceOf(Object);
            // Set up the environment
            // Define the source of truth
            // Execute the code
            // Compare the result

        })
        test('Should fail if didnt pass in exactly 3 arguments', () => {
        expect(() => new Employee()).toThrow(Error);
        expect(() => new Employee(defaultId)).toThrow(Error);
        expect(() => new Employee(defaultId, defaultName)).toThrow(Error);
        })
        test('Employee class to accept 3 arguments in the constructor: id, email, name', () => {
                expect(Employee.email).toBe(defaultEmail);
        })
        test('If employee has email', () => {
            expect(true).toBe(false);
        })
        test('Should have name', () => {
            expect(true).toBe(false);
        })
        test('Should have ID', () => {
            expect(true).toBe(false);
        })
        test('getName() should return name', () => {
            expect(true).toBe(false);
        })
        test('getID() should return ID', () => {
            expect(true).toBe(false);
        })
        test('getEmail() should return Email', () => {
            expect(true).toBe(false);
        })

        // Sad path
        test('Should break if I did not pass in any argument to the constructor', () => {
            expect(true).toBe(false);
        })
        test('Should break if I pass more than 4 arguments to the constructor', () => {
            expect(true).toBe(false);
        })
        test('Should only receive a valid email', () => {
            expect(true).toBe(false);
        })
    })
});

