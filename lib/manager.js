const Employee = require('./employee');

class Manager extends Employee {
	constructor(id, name, email, officeNumber) {
		super(id, name, email);
		this.officeNumber = officeNumber;
	}

	getRole() {
		return 'Manager';
	}

	getOfficeNumber() {
		return this.officeNumber;
	}
}
console.log(new Manager(''))
module.exports = Manager;