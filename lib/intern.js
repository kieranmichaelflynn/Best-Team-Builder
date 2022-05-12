

class Intern {
    constructor(id, email, name){

        if (!id || !email || !name) {
            throw new Error('Cannot instantiate without id, name and email')
        }

        this.id = id;
        this.email = email;
        this.name = name;
        this.school = school;
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
    getSchool() {
        return this.school;
    }
    getRole() {
        return 'Intern';
    }
}
module.exports = Intern;