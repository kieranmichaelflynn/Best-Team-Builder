

class Engineer {
    constructor(id, email, name){

        if (!id || !email || !name) {
            throw new Error('Cannot instantiate without id, name and email')
        }

        this.id = id;
        this.email = email;
        this.name = name;
        this.github = github;
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
    getGithub() {
        return this.github;
    }
    getRole() {
        return 'Engineer';
    }
}
module.exports = Engineer;