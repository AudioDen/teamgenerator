///// This is the building function of all the employees.

class Employee {
	constructor(name, id, email) {
		this.name = name;
		this.id = id;
		this.email = email;
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
// console.log( new Employee(''));

module.exports = Employee;