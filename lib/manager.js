

class Manager {
    constructor(id, email, name){

        if (!id || !email || !name) {
            throw new Error('Cannot instantiate without id, name and email')
        }

        this.id = id;
        this.email = email;
        this.name = name;
        this.officeNumber = officeNumber;
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
        return 'Manager';
    }
}
module.exports = Manager;