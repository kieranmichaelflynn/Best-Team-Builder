

class Employee {
    constructor(id, email, name){

        if (!id || !email || !name) {
            throw new Error('Cannot instantiate without id, name and email')
        }

        this.id = id;
        this.email = email;
        this.name = name;
    }

    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return 'Employee';
    }
}
module.exports = Employee