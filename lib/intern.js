const Employee = require("./employee");

class Intern extends Employee {
	constructor(id, name, email, school) {
		super(id, name, email);
		this.school = school;
	}

	getSchool() {
		return this.school;
	}

	getRole() {
		return "Intern";
	}
}
console.log(new Intern(" "));
module.exports = Intern;